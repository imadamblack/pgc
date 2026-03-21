'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { useForm, FormProvider } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import StepRenderer from '@/components/form/stepRenderer';
import fbEvent, { gtagSendEvent } from '@/services/fbEvents';
import { normalizeWhatsapp } from '@/utils/formValidators';
import { info } from '@info';
import { content } from '@content';

// ─── Loading intro shown before the survey steps ──────────────────────────────
const SurveyIntro = () => (
  <motion.div
    key="intro"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-brand-1 flex-grow flex flex-col items-center justify-center px-6 py-16"
  >
    <div className="text-center max-w-lg">
      <h1 className="ft-6 font-black text-white mb-8 leading-tight">
        {content.survey.intro.title}
      </h1>

      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden mt-12 mb-4">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="h-full bg-brand-2 rounded-full"
        />
      </div>
      <p className="-ft-1 text-white/60">Cargando...</p>
    </div>
  </motion.div>
);

// ─── Define survey steps here ─────────────────────────────────────────────────
// Each step has a `type` and relevant config.
// Types: 'radio' | 'checkbox' | 'select' | 'text' | 'tel' | 'textarea' | 'checkpoint' | 'opt-in'
const buildFormSteps = ({ fullName, phone }) => [
  // ── Example question ──────────────────────────────────────────────────────
  {
    type: 'radio',
    name: 'question_1',
    title: '¿Cuál es tu pregunta número uno?',
    inputOptions: { required: 'Selecciona una opción' },
    options: [
      { value: 'opcion-a', label: 'Opción A' },
      { value: 'opcion-b', label: 'Opción B' },
      { value: 'opcion-c', label: 'Opción C' },
      { value: 'opcion-d', label: 'Opción D' },
    ],
    cols: 1,
  },
  {
    type: 'radio',
    name: 'question_2',
    title: '¿Cuál es tu pregunta número dos?',
    inputOptions: { required: 'Selecciona una opción' },
    options: [
      { value: 'opcion-a', label: 'Opción A' },
      { value: 'opcion-b', label: 'Opción B' },
      { value: 'opcion-c', label: 'Opción C' },
    ],
    cols: 1,
  },
  // ── Opt-in (always last) ──────────────────────────────────────────────────
  {
    type: 'opt-in',
    name: 'optin',
    title: content.survey.optin.title,
    description: content.survey.optin.description,
    fields: [
      {
        type: 'text',
        name: 'fullName',
        title: 'Tu nombre completo',
        inputOptions: { value: fullName, required: '¿Cómo te llamas?' },
      },
      {
        type: 'tel',
        name: 'phone',
        title: 'Tu WhatsApp (10 dígitos)',
        inputOptions: {
          value: phone,
          required: '¿Cuál es tu WhatsApp?',
          maxLength: { value: 10, message: 'Ingresa 10 dígitos' },
          minLength: { value: 10, message: 'Ingresa 10 dígitos' },
        },
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Survey({ lead, utm }) {
  const [showIntro, setShowIntro] = useState(true);
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);

  const methods = useForm({ mode: 'all' });
  const { handleSubmit, formState: { errors }, watch } = methods;
  const router = useRouter();

  const formSteps = buildFormSteps({ fullName: lead.fullName, phone: lead.phone });

  const lastInputIndex = formSteps.reduce((last, step, i) =>
    step.type !== 'checkpoint' ? i : last, 0);

  // Hide intro after 4s
  useEffect(() => {
    if (!showIntro) return;
    const t = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(t);
  }, [showIntro]);

  // Auto-advance checkpoint steps
  useEffect(() => {
    const current = formSteps[formStep];
    if (current?.autoAdvance) {
      const t = setTimeout(() => {
        setFormStep((p) => Math.min(p + 1, formSteps.length - 1));
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [formStep]);

  // Fire FB/gtag events on checkpoint steps
  useEffect(() => {
    const step = formSteps[formStep];
    if (step?.type === 'checkpoint') {
      fbEvent(step.name);
      if (typeof gtag !== 'undefined') gtag('event', step.name.replace(/-/g, '_'));
    }
  }, [formStep]);

  const handleNext = async () => {
    const current = formSteps[formStep];

    if (current.type === 'checkpoint') {
      return setFormStep((p) => Math.min(p + 1, formSteps.length - 1));
    }

    const valid = await methods.trigger(current.name);
    if (!valid) {
      setInputError(formStep);
      return;
    }

    setInputError(null);
    window.scrollTo(0, 0);
    setFormStep((p) => Math.min(p + 1, formSteps.length - 1));
  };

  const onSubmit = async (data) => {
    setSending(true);
    try {
      data.whatsapp = normalizeWhatsapp(data.phone);

      const payload = { ...lead, ...data, ...utm };

      const res = await fetch(info.optInWebhook, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await res.json().catch(() => ({}));

      fbEvent('Lead', { phone: data.phone, externalID: result.id });
      // gtagSendEvent('CONVERSION_LABEL', { fullName: data.fullName, phone: data.whatsapp });

      setCookie('lead', { ...data, id: result.id });

      const redirect = info.surveyRedirect || '/thankyou';
      await router.push(redirect);

    } catch (err) {
      console.error('Survey submit error:', err);
    } finally {
      setSending(false);
    }
  };

  const isLastStep = formStep === lastInputIndex;

  return (
    <div className="relative flex flex-col flex-grow bg-gradient-to-b from-brand-6 to-white">
      <AnimatePresence mode="wait">

        {showIntro && <SurveyIntro />}

        {!showIntro && (
          <motion.div
            key="survey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col flex-grow pb-[8rem]"
          >
            {/* Progress bar */}
            <div className="sticky top-0 bg-white w-full max-w-[56rem] mx-auto px-8 py-4 z-10 shadow-sm">
              <div className="relative bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-brand-1 rounded-full transition-all duration-500"
                  style={{ width: `${((formStep + 1) / formSteps.length) * 100}%` }}
                />
              </div>
              <p className="-ft-3 text-center text-neutral-400 mt-2">
                Paso {formStep + 1} de {formSteps.length}
              </p>
            </div>

            {/* Form */}
            <div className="container !px-0 flex flex-col flex-grow items-center">
              <div className="survey-card">
                <FormProvider {...methods}>
                  <form className="flex flex-col flex-grow" onSubmit={handleSubmit(onSubmit)}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={formStep}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <StepRenderer
                          step={formSteps[formStep]}
                          index={formStep}
                          currentStep={formStep}
                          errors={errors}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom nav */}
                    <div className={`fixed bottom-0 inset-x-0 p-6 grid ${formSteps[formStep].type === 'checkpoint' ? 'grid-cols-1' : 'grid-cols-2'} gap-4 bg-white border-t border-gray-200 z-50`}>
                      {formSteps[formStep].type !== 'checkpoint' && (
                        <button
                          type="button"
                          onClick={() => setFormStep((p) => Math.max(p - 1, 0))}
                          disabled={formStep === 0}
                          className="!bg-transparent !text-brand-1 !border-2 !border-brand-1 disabled:!opacity-30"
                        >
                          ← Atrás
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={sending}
                        onClick={() => {
                          if (isLastStep) {
                            handleSubmit(onSubmit)();
                          } else {
                            handleNext();
                          }
                        }}
                        className="w-full"
                      >
                        {sending && <span className="animate-spin mr-2 inline-block">⟳</span>}
                        {isLastStep ? 'Enviar →' : 'Siguiente →'}
                      </button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { req, query } = ctx;
  const cookiesHeader = req.headers.cookie || '';

  const keys = ['utm', 'lead'];
  const cookies = {};

  for (const key of keys) {
    const raw = cookiesHeader
      .split('; ')
      .find(c => c.startsWith(`${key}=`))
      ?.split('=')[1];
    if (!raw) continue;
    try {
      const clean = raw.startsWith('j%3A') ? raw.slice(4) : raw;
      cookies[key] = JSON.parse(decodeURIComponent(clean));
    } catch {
      cookies[key] = decodeURIComponent(raw);
    }
  }

  const utmFromQuery = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    if (query[param]) utmFromQuery[param] = query[param];
  });

  const utm =
    Object.keys(utmFromQuery).length > 0 ? utmFromQuery : cookies.utm ?? null;

  const { lead } = cookies;

  return {
    props: {
      lead: {
        fullName: lead?.fullName ?? '',
        phone: lead?.phone ?? '',
        whatsapp: lead?.whatsapp ?? '',
      },
      utm: utm ?? {},
    },
  };
}
