// ─── Project / Brand Info ─────────────────────────────────────────────────────
// Edit this file for each project. Everything here is project-specific.

export const info = {
  legalName: "PGC Soluciones",
  companyName: "PGC Soluciones",
  description: "Especialistas en IT",

  email: {
    sender: "",
    recipients: [""],
    subject: "Nuevo prospecto",
  },

  phoneNumber: "+523317698384",

  whatsapp: {
    value: "+523317698384",
    message: "Hola, me interesa conocer más información",
  },

  social: {
    facebook: "",
    instagram: "",
  },

  address: {
    address: "",
    col: "",
    cp: "",
    city: "",
    state: "",
  },

  // n8n or any POST webhook that receives the lead
  optInWebhook: "https://n8n.notoriovs.com/webhook/6d8fff1c-339d-4171-bb16-0ac011bfc09d",
  surveyWebhook: "",

  // Where to redirect after survey completion (leave empty to use /thankyou)
  surveyRedirect: "",

  privacyNotice: "/aviso-privacidad",
  termsConditions: "/aviso-privacidad",

  // Optional: promo bar text shown at the top of each page (set null to hide)
  promoBar: null,
};
