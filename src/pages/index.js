'use client';

import { useEffect, useState } from 'react';
import OptInForm from '@/components/form/opt-in-form';
import scrollDepth from '@/utils/scrollDepth';

export const content = {
  nav: {
    brand: 'PGC Soluciones',
    cta: 'Diagnóstico gratis',
  },
  hero: {
    badge: '+20 años de experiencia',
    title: 'Ten un aliado tecnológico de confianza, no solo un proveedor que resuelve fallas',
    subtitle: '',
    description: [
      'Más de 20 años entendiendo cómo trabajan las empresas, y a estar ahí antes de que tengas que tomar una decisión tecnológica a ciegas.',
    ],
    cta: {
      main: 'Contáctanos',
      secondary: 'Ver servicios',
    },
    stats: [
      { value: '+20', label: 'Años de experiencia' },
      { value: '+200', label: 'Empresas atendidas' },
      { value: '24/7', label: 'Monitoreo continuo' },
    ],
  },
  autoseleccion: {
    banner: {
      title: '¿Esto es para ti?',
    },
    intro: 'No todas las empresas necesitan un aliado tecnológico externo todavía. Esto es para ti si:',
    items: [
      'Tu equipo administrativo depende cada vez más de la tecnología para operar.',
      'Tu empresa está creciendo y empieza a sentirse desordenada.',
      'No tienes a una persona cuya función principal sea resolver estos temas o está sobrecargada.',
      'Manejas información sensible de clientes y quieres tener claridad sobre cómo está protegida.',
      'Cuando surge una decisión de tecnología, prefieres tener a alguien que te oriente, en vez de solo por prueba y error.',
    ],
    cta: 'Obtén un diagnóstico gratis para tu empresa',
  },
  beneficios: {
    banner: {
      eyebrow: '¿Por qué PGC?',
      title: '¿Por qué elegir PGC Soluciones para tu negocio?',
      description:
        'Muchas veces los proyectos de tecnología se complican porque "negocio" y "tecnología" no hablan el mismo idioma. Ahí es donde nosotros entramos. No solo para resolver fallas, sino para que tengas a alguien de confianza antes de invertir, cambiar de sistema o tomar cualquier decisión que afecte tu operación. Estas son 6 razones por las que conviene tener tu infraestructura tecnológica gestionada por especialistas:',
    },
    items: [
      {
        icon: 'shield',
        title: 'Ten a alguien de confianza antes de decidir, no solo cuando algo falla',
        description:
          'No se trata solo de resolver problemas cuando aparecen. Se trata de tener un aliado tecnológico que te oriente antes de comprar equipo, cambiar de proveedor o invertir en infraestructura nueva.',
      },
      // {
      //   icon: 'globe',
      //   title: 'Trabaja desde cualquier lugar sin perder control de tu información',
      //   description:
      //     'Con escritorios remotos y accesos bien implementados, tu equipo puede operar desde cualquier lugar sin llevarse archivos ni exponer datos sensibles.',
      // },
      {
        icon: 'shield-check',
        title: 'Reduce riesgos que pueden detener tu operación',
        description:
          'Desde correos maliciosos hasta errores internos, una infraestructura bien gestionada ayuda a contener incidentes antes de que se conviertan en un problema mayor.',
      },
      {
        icon: 'lock',
        title: 'Protege tu empresa también físicamente, no solo en el sistema',
        description:
          'La seguridad no es solo digital. Instalamos y monitoreamos cámaras de vigilancia junto con el control de accesos y permisos, para que tengas visibilidad completa de tu operación.',
      },
      {
        icon: 'cpu',
        title: 'Toma mejores decisiones tecnológicas para tu operación',
        description:
          'No se trata de comprar por comprar. Se trata de elegir equipos, sistemas e infraestructura según cómo trabaja cada área de tu empresa, con alguien que te lo explique en tu idioma.',
      },
      {
        icon: 'server',
        title: 'Elige la infraestructura adecuada para cada necesidad',
        description:
          'No todo debe vivir en la nube ni todo debe quedarse en sitio. Evaluamos qué conviene más según el tipo de sistema, control, rendimiento y operación que necesita tu empresa.',
      },
    ],
    cta: 'Obtén un diagnóstico gratis para tu empresa',
  },
  atributos: {
    banner: {
      eyebrow: 'Cómo trabajamos',
      title: 'Si la tecnología sostiene tu empresa, debe estar bien gestionada',
      description:
        'Una infraestructura tecnológica estable no ocurre por casualidad. Se construye con monitoreo, mantenimiento, procesos claros y una relación de confianza real, no de proveedor a la distancia. Así es como trabajamos:',
    },
    items: [
      {
        number: '01',
        title: 'Entendemos primero cómo funciona tu empresa',
        description:
          'Antes de hablar de plataformas o herramientas, analizamos cómo opera tu negocio, qué necesita realmente cada área y construimos una relación de confianza a partir de ahí.',
      },
      {
        number: '02',
        title: 'Monitoreo preventivo',
        description:
          'Supervisamos tu infraestructura para detectar riesgos, prevenir fallas y mantener la continuidad operativa.',
      },
      {
        number: '03',
        title: 'Administración de servidores e infraestructura',
        description:
          'Configuramos, mantenemos y optimizamos los servidores y entornos que soportan tus sistemas.',
      },
      {
        number: '04',
        title: 'Soporte remoto y en sitio',
        description:
          'Atendemos cualquier falla rápidamente de forma remota o directamente en tus instalaciones.',
      },
    ],
    cta: 'Obtén un diagnóstico gratis para tu empresa',
  },
  servicios: {
    banner: {
      eyebrow: 'Servicios',
      title: 'Todo esto podemos resolver en tu negocio',
    },
    items: [
      {
        icon: 'server',
        title: 'Infraestructura y soporte',
        items: [
          'Mantenimiento preventivo y correctivo',
          'Soporte remoto y en sitio',
          'Monitoreo de equipos, red y servidores',
          'Pólizas de mantenimiento',
        ],
      },
      {
        icon: 'monitor',
        title: 'Equipo de cómputo e impresión',
        items: [
          'Reparación de equipo de cómputo',
          'Venta e instalación de computadoras y periféricos',
          'Reparación y venta de impresoras',
          'Venta de consumibles y accesorios',
        ],
      },
      {
        icon: 'wifi',
        title: 'Redes y conectividad',
        items: [
          'Instalación y configuración de redes',
          'Diagnóstico y optimización',
          'Seguridad y monitoreo de red',
          'Acceso y escritorios remotos',
        ],
      },
      {
        icon: 'shield-check',
        title: 'Seguridad y continuidad',
        items: [
          'Control de accesos y permisos',
          'Instalación y monitoreo de cámaras de vigilancia',
          'Respaldos de información',
          'Protección ante incidentes y ransomware',
          'Documentación e historial técnico',
        ],
      },
      {
        icon: 'code',
        title: 'Proyectos tecnológicos a la medida',
        items: [
          'Análisis de necesidades',
          'Diseño de soluciones',
          'Infraestructura híbrida: nube y servidores',
          'Selección de equipos según perfil de usuario',
          'Implementación y acompañamiento',
        ],
      },
    ],
    cta: 'Obtén un diagnóstico gratis para tu empresa',
  },
  testimonios: {
    banner: {
      eyebrow: 'Testimonios',
      title: 'Confía en nosotros… o mejor aún, en quienes ya probaron nuestros servicios.',
    },
    items: [
      {
        quote:
          'Más allá del soporte técnico, PGC funciona como un aliado tecnológico. Nos ayudan a resolver problemas, analizar opciones y tomar mejores decisiones para la empresa.',
        author: 'Director',
        company: 'Grupo ALCREQ',
      },
      {
        quote:
          'Antes teníamos fallas constantes en la red y los servidores. Desde que PGC administra nuestra infraestructura prácticamente desaparecieron los tiempos muertos.',
        author: 'Director administrativo',
        company: 'Empresa de construcción',
      },
      {
        quote:
          'Lo más valioso es que ya no dependemos de técnicos improvisados. Tenemos un sistema claro de soporte y monitoreo.',
        author: 'Socio',
        company: 'Despacho contable',
      },
      {
        quote:
          'Ahora sabemos exactamente cómo está nuestra infraestructura tecnológica gracias a los reportes y seguimiento.',
        author: 'Gerente de operaciones',
        company: 'Empresa comercial',
      },
    ],
    cta: 'Obtén un diagnóstico gratis para tu empresa',
  },
  faqs: {
    banner: {
      eyebrow: 'FAQ',
      title: 'Si tienes dudas, aquí las resolvemos:',
    },
    items: [
      {
        q: '¿Este servicio sustituye a un departamento interno de IT?',
        a: 'Sí. Con PGC es como tener tu propio equipo de IT externo: especialistas que conocen tu infraestructura y pueden resolver cualquier situación tecnológica cuando surja, además de acompañarte en las decisiones antes de que surjan los problemas.',
      },
      {
        q: '¿Cómo funciona el soporte cuando surge un problema?',
        a: 'Las incidencias se atienden primero de forma remota para resolver rápidamente. Si el problema requiere intervención física, el equipo técnico se presenta en sitio.',
      },
      {
        q: '¿Mi empresa es demasiado pequeña o demasiado grande para este servicio?',
        a: 'Lo que importa no es cuántos empleados tienes, sino cuánta gente en tu equipo depende de la tecnología para trabajar. Si tienes entre 10 y 15 personas usando computadora, correo o sistemas propios de la empresa, y sientes que la tecnología empezó a pedir más estructura de la que hoy tiene, somos el aliado adecuado para tu empresa, sin importar si tu plantilla total es de 15 o de 50 personas.',
      },
      {
        q: '¿Qué tan seguro es dar acceso a un proveedor externo?',
        a: 'Tu información siempre está protegida, somos una empresa profesional y hacemos la intervención con acceso controlado y registro de actividad. Además, cada acción queda documentada dentro del historial técnico.',
      },
      {
        q: '¿Por qué trabajar bajo póliza mensual?',
        a: 'Este modelo nos permite tener un mayor control y poder brindarte un soporte continuo y sin fallas.',
      },
      {
        q: '¿Cómo sé que van a cumplir lo que prometen?',
        a: 'La mayoría de nuestros clientes llegan por recomendación directa de otra empresa que ya trabaja con nosotros. Desde el diagnóstico inicial definimos contigo el alcance exacto, y damos seguimiento con reportes periódicos para que siempre sepas en qué estamos trabajando y qué resultados vas obteniendo.',
      },
    ],
  },
  cta: {
    title: 'Contáctanos y ten al aliado tecnológico para decidir y operar sin sorpresas',
    description:
      'Hacemos un diagnóstico sin costo y te decimos qué representa un riesgo y qué conviene resolver primero. Compártenos unos datos.',
    cta: 'Obtén un diagnóstico gratis',
  },
  footer: {
    brand: 'PGC Soluciones',
    tagline: 'Infraestructura tecnológica para empresas que no se detienen.',
    copy: '© 2025 PGC Soluciones. Todos los derechos reservados.',
  },
  thankyou: {
    title: 'Gracias por registrarte',
    description: 'Uno de nuestros técnicos especilaistas en soluciones de negocios te contactará en máximo 24 horas'
  },
};

const Icon = ({name, className = 'w-5 h-5'}) => {
  const icons = {
    globe: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    lock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
      </svg>
    ),
    cpu: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"/>
      </svg>
    ),
    layers: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
      </svg>
    ),
    server: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-.75m19.5 0A2.25 2.25 0 0021.75 15v-1.5a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 13.5V15a2.25 2.25 0 002.25 2.25m15 0H4.5m15-11.25v.75A2.25 2.25 0 0117.25 9H6.75A2.25 2.25 0 014.5 6.75V6m17.25 0A2.25 2.25 0 0019.5 3.75H4.5A2.25 2.25 0 002.25 6m19.5 0H2.25"/>
      </svg>
    ),
    monitor: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/>
      </svg>
    ),
    wifi: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"/>
      </svg>
    ),
    'shield-check': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
    code: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
      </svg>
    ),
    check: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
      </svg>
    ),
    chevronDown: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
    ),
    arrow: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
      </svg>
    ),
    quote: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    ),
    menu: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    ),
    x: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    ),
  };
  return icons[name] || null;
};
const CTAButton = ({children, variant = 'primary', href= '/#contact', className = ''}) => {
  if (variant === 'primary') {
    return (
      <div className="max-w-4xl border-y border-neutral-500 py-12">
      <p className="text-white mb-4">Platiquemos de tu próxima decisión tecnológica</p>
      <a
        href={href}
        className={`cursor-pointer inline-flex items-center gap-2 bg-[#27d53b] hover:bg-[#003D99] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-tranneutral-y-0.5 ft-1 ${className}`}
      >
        {children}
        <Icon name="arrow" className="w-4 h-4"/>
      </a>
      </div>
    );
  }
  return (
    <a
      href={href}
      className={`cursor-pointer inline-flex items-center gap-2 border border-[#27d53b] text-[#27d53b] hover:bg-[#27d53b] hover:text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 ft-1 ${className}`}
    >
      {children}
    </a>
  );
};
const Eyebrow = ({children}) => (
  <span className="-ft-3 inline-block font-bold tracking-[0.2em] uppercase text-[#27d53b] mb-3">
    {children}
  </span>
);
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed py-8 top-0 left-0 right-0 z-50 bg-neutral-800/80 backdrop-blur-md border-b border-neutral-100">
      <div className="container mx-auto my-auto px-6 flex items-center justify-between">
        <span className="font-black ft-3 text-neutral-100 tracking-tight">
          PGC <span className="text-[#27d53b]">Soluciones</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {['Beneficios'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="-ft-1 font-medium text-neutral-300 hover:text-[#27d53b] transition-colors"
            >
              {item}
            </a>
          ))}
          <CTAButton className="!py-2.5 !px-5 !-ft-1">{content.nav.cta}</CTAButton>
        </div>
        <button className="md:hidden text-[#27d53b]" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'x' : 'menu'} className="w-6 h-6"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-4">
          {['Beneficios'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="-ft-1 font-medium text-neutral-700"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <CTAButton className="!py-3 !-ft-1 justify-center">{content.nav.cta}</CTAButton>
        </div>
      )}
    </nav>
  );
};
const Hero = () => (
  <section className="pt-20 md:pt-56 pb-24 px-6 relative overflow-hidden" style={{backgroundColor: '#020617'}}>
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    {/* Glow */}
    <div
      className="absolute top-0 left-1/2 -tranneutral-x-1/2 w-[800px] h-[400px] bg-[#27d53b] opacity-10 blur-[120px] rounded-full pointer-events-none"/>

    <div className="container mx-auto relative z-10">
      <div className="max-w-6xl">
        {/* Badge */}
        <div className="mb-6">
        <span
          className="inline-flex items-center gap-2 -ft-3 font-bold tracking-widest uppercase bg-white/10 text-neutral-300 border border-white/10 px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
          {content.hero.badge}
        </span>
        </div>

        {/* Headline */}
        <h1 className="ft-8 font-black text-white leading-[1.05] tracking-tight mb-4">
          {content.hero.title}{' '}
          <span className="text-[#27d53b]">{content.hero.subtitle}</span>
        </h1>

        <div className="mb-10 space-y-4">
          {content.hero.description.map((paragraph, i) => (
            <p key={i} className="ft-2 text-neutral-200 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <CTAButton>{content.hero.cta.main}</CTAButton>
          {/*<CTAButton variant="secondary"*/}
          {/*           href="#servicios"*/}
          {/*           className="!border-white/20 !text-neutral-300 hover:!bg-white/10 hover:!text-white">*/}
          {/*  {content.hero.cta.secondary}*/}
          {/*</CTAButton>*/}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {content.hero.stats.map((s) => (
            <div key={s.label} className="border-l-2 border-[#27d53b] pl-4">
              <div className="ft-5 font-black text-white mb-0.5">{s.value}</div>
              <div className="-ft-3 text-neutral-300 ">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
const Autoseleccion = () => (
  <section id="autoseleccion" className="py-24 px-6 bg-neutral-50">
    <div className="container mx-auto max-w-3xl">
      <h2 className="ft-7 font-black text-neutral-900 text-center mb-8">
        {content.autoseleccion.banner.title}
      </h2>
      <p className="text-neutral-500 ft-1 leading-relaxed mb-6">{content.autoseleccion.intro}</p>
      <ul className="space-y-4 mb-8">
        {content.autoseleccion.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-neutral-700 ft-1 leading-relaxed">
            <Icon name="check" className="w-5 h-5 text-[#27d53b] flex-shrink-0 mt-1"/>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-neutral-500 ft-1 leading-relaxed mb-10">{content.autoseleccion.outro}</p>
      <div className="flex justify-center">
        <CTAButton>{content.autoseleccion.cta}</CTAButton>
      </div>
    </div>
  </section>
);
const Beneficios = () => (
  <section id="beneficios" className="py-24 px-6 bg-white">
    <div className="container mx-auto">
      {/*<div className="max-w-2xl mb-16">*/}
      {/*  <Eyebrow>{content.beneficios.banner.eyebrow}</Eyebrow>*/}
      {/*  <h2 className="ft-7 font-black text-neutral-900  mb-4">*/}
      {/*    {content.beneficios.banner.title}*/}
      {/*  </h2>*/}
      {/*  <p className="text-neutral-500 ft-1 leading-relaxed">{content.beneficios.banner.description}</p>*/}
      {/*</div>*/}

      <div className="grid grid-cols-1 gap-5 mb-12 max-w-7xl mx-auto">
        {content.beneficios.items.map((item, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl border border-neutral-100 hover:border-[#27d53b]/20 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 cursor-default"
          >
            <div
              className="w-20 h-20 rounded-xl bg-[#EBF3FF] text-[#27d53b] flex items-center justify-center mb-5 group-hover:bg-[#27d53b] group-hover:text-white transition-colors duration-300">
              <Icon name={item.icon} className="w-12 h-12"/>
            </div>
            <h3 className="font-bold text-neutral-900 ft-2 mb-2 leading-snug">{item.title}</h3>
            <p className="text-neutral-500 ft-1 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/*<div className="flex justify-center">*/}
      {/*  <CTAButton>{content.beneficios.cta}</CTAButton>*/}
      {/*</div>*/}
    </div>
  </section>
);
const Atributos = () => (
  <section className="py-24 px-6 relative overflow-hidden" style={{backgroundColor: '#020617'}}>
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>{content.atributos.banner.eyebrow}</Eyebrow>
          <h2 className="ft-7 font-black text-white  mb-4">
            {content.atributos.banner.title}
          </h2>
          <p className="text-neutral-400 ft-1 leading-relaxed mb-8">
            {content.atributos.banner.description}
          </p>
          <CTAButton>{content.atributos.cta}</CTAButton>
        </div>

        <div className="flex flex-col gap-4">
          {content.atributos.items.map((item) => (
            <div
              key={item.number}
              className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/8 hover:border-[#27d53b]/40 transition-colors duration-200"
            >
              <div className="flex-shrink-0 ft-5 font-black text-[#27d53b]/40 leading-none w-10 text-right">
                {item.number}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1.5 ft-2">{item.title}</h3>
                <p className="text-neutral-400 ft-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
const Servicios = () => (
  <section id="servicios" className="py-24 px-6 bg-neutral-50">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Eyebrow>{content.servicios.banner.eyebrow}</Eyebrow>
        <h2 className="ft-7 font-black text-neutral-900 ">
          {content.servicios.banner.title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {content.servicios.items.map((service, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white border border-neutral-100 hover:border-[#27d53b]/20 hover:shadow-lg transition-all duration-200 ${
              i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#27d53b] flex items-center justify-center mb-4">
              <Icon name={service.icon} className="w-5 h-5"/>
            </div>
            <h3 className="font-bold text-neutral-900 mb-3 ft-2">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-neutral-500 ft-1">
                  <Icon name="check" className="w-4 h-4 text-[#27d53b] flex-shrink-0 mt-0.5"/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <CTAButton>{content.servicios.cta}</CTAButton>
      </div>
    </div>
  </section>
);
const Testimonios = () => (
  <section id="testimonios" className="py-24 px-6 bg-white">
    <div className="container mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <Eyebrow>{content.testimonios.banner.eyebrow}</Eyebrow>
        <h2 className="ft-7 font-black text-neutral-900 ">
          {content.testimonios.banner.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {content.testimonios.items.map((t, i) => (
          <div
            key={i}
            className="relative p-8 rounded-2xl text-white flex flex-col" style={{backgroundColor: '#020617'}}
          >
            <div className="text-[#27d53b] mb-4 opacity-50">
              <Icon name="quote" className="w-8 h-8"/>
            </div>
            <p className="text-neutral-300 ft-1 leading-relaxed flex-1 mb-6 italic">
              "{t.quote}"
            </p>
            <div className="border-t border-white/10 pt-4">
              <div className="font-bold text-white -ft-1">{t.author}</div>
              <div className="text-neutral-500 -ft-2">{t.company}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <CTAButton>{content.testimonios.cta}</CTAButton>
      </div>
    </div>
  </section>
);
const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>{content.faqs.banner.eyebrow}</Eyebrow>
          <h2 className="ft-7 font-black text-neutral-900 ">
            {content.faqs.banner.title}
          </h2>
        </div>

        <div className="space-y-3">
          {content.faqs.items.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
            >
              <div
                className="cursor-pointer w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-neutral-900 pr-4 ft-2">{faq.q}</span>
                <span
                  className={`flex-shrink-0 text-[#27d53b] transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                >
                  <Icon name="chevronDown" className="w-5 h-5"/>
                </span>
              </div>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-500 ft-1 leading-relaxed border-t border-neutral-50 pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const CTAFinal = () => (
  <section id="contact" className="py-24 px-6 bg-green-600 relative overflow-hidden">

    <div className="max-w-3xl mx-auto relative">
      <h2 className="ft-7 font-black text-white  mb-4">
        {content.cta.title}
      </h2>
      <p className="text-white ft-2 font-medium mb-10">{content.cta.description}</p>
      {/*<div>*/}
      {/*  <p className="ft-2 flex gap-4 text-white"><Icon name="check" className="w-8 h-8 mt-2"/>Sin costo</p>*/}
      {/*  <p className="ft-2 flex gap-4 text-white"><Icon name="check" className="w-8 h-8 mt-2"/>Sin compromiso</p>*/}
      {/*  <p className="ft-2 flex gap-4 text-white"><Icon name="check" className="w-8 h-8 mt-2"/>+20 años de experiencia</p>*/}
      {/*</div>*/}
    </div>
    <div className="max-w-3xl mx-auto mt-20">
      <OptInForm/>
    </div>
  </section>
);
const Footer = () => (
  <footer className="py-10 px-6 border-t border-white/5" style={{backgroundColor: '#020617'}}>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-black text-white ft-1 tracking-tight">
          PGC <span className="text-[#4D94FF]">Soluciones</span>
        </span>
        <p className="text-neutral-500 -ft-3 mt-1">{content.footer.tagline}</p>
      </div>
      <p className="text-neutral-600 -ft-3">{content.footer.copy}</p>
    </div>
  </footer>
);

export default function PGCLandingPage() {
  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  return (
    <main className="font-sans antialiased">
      <Hero/>
      <Autoseleccion/>
      <Beneficios/>
      <Atributos/>
      <Servicios/>
      <Testimonios/>
      <FAQ/>
      <CTAFinal/>
    </main>
  );
}
