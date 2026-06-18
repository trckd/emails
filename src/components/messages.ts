/**
 * Localized copy shared across every template's chrome: the footer, the
 * default `TipBox` title, and the App Store / Google Play badge alt text.
 *
 * The legal entity name ("Tracked Training Platform Inc.") and the physical
 * address are intentionally identical across locales.
 */
import type { Locale } from '../i18n/locales.js';

export interface CommonMessages {
  footer: {
    copyright: (year: number) => string;
    address: string;
    terms: string;
    privacy: string;
    support: string;
    unsubscribe: string;
    marketingDisclaimer: string;
    serviceDisclaimer: string;
  };
  tipBox: {
    defaultTitle: string;
  };
  appStore: {
    appStoreAlt: string;
    googlePlayAlt: string;
  };
}

const ADDRESS = '9101 Horne Street, Vancouver, BC';
const copyright = (year: number) =>
  `Copyright © ${year} Tracked Training Platform Inc.`;

const en: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'Terms',
    privacy: 'Privacy',
    support: 'Support',
    unsubscribe: 'Unsubscribe',
    marketingDisclaimer:
      "You're receiving this email because you opted in to marketing communications from Tracked.",
    serviceDisclaimer:
      'This is a service notification by the Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Tip' },
  appStore: {
    appStoreAlt: 'Download on the App Store',
    googlePlayAlt: 'Get it on Google Play',
  },
};

const es: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'Términos',
    privacy: 'Privacidad',
    support: 'Soporte',
    unsubscribe: 'Cancelar suscripción',
    marketingDisclaimer:
      'Recibes este correo porque aceptaste recibir comunicaciones de marketing de Tracked.',
    serviceDisclaimer:
      'Esta es una notificación de servicio de Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Consejo' },
  appStore: {
    appStoreAlt: 'Descárgalo en el App Store',
    googlePlayAlt: 'Disponible en Google Play',
  },
};

const fr: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'Conditions',
    privacy: 'Confidentialité',
    support: 'Assistance',
    unsubscribe: 'Se désabonner',
    marketingDisclaimer:
      'Tu reçois cet e-mail car tu as accepté de recevoir les communications marketing de Tracked.',
    serviceDisclaimer:
      'Ceci est une notification de service de la part de Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Astuce' },
  appStore: {
    appStoreAlt: "Télécharger dans l'App Store",
    googlePlayAlt: 'Disponible sur Google Play',
  },
};

const de: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'AGB',
    privacy: 'Datenschutz',
    support: 'Support',
    unsubscribe: 'Abmelden',
    marketingDisclaimer:
      'Du erhältst diese E-Mail, weil du dem Erhalt von Marketing-Mitteilungen von Tracked zugestimmt hast.',
    serviceDisclaimer:
      'Dies ist eine Service-Benachrichtigung der Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Tipp' },
  appStore: {
    appStoreAlt: 'Laden im App Store',
    googlePlayAlt: 'Jetzt bei Google Play',
  },
};

const it: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'Termini',
    privacy: 'Privacy',
    support: 'Assistenza',
    unsubscribe: 'Annulla iscrizione',
    marketingDisclaimer:
      'Ricevi questa email perché hai accettato di ricevere comunicazioni di marketing da Tracked.',
    serviceDisclaimer:
      'Questa è una notifica di servizio della Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Suggerimento' },
  appStore: {
    appStoreAlt: 'Scarica su App Store',
    googlePlayAlt: 'Disponibile su Google Play',
  },
};

const pt: CommonMessages = {
  footer: {
    copyright,
    address: ADDRESS,
    terms: 'Termos',
    privacy: 'Privacidade',
    support: 'Suporte',
    unsubscribe: 'Cancelar inscrição',
    marketingDisclaimer:
      'Você está recebendo este e-mail porque optou por receber comunicações de marketing da Tracked.',
    serviceDisclaimer:
      'Esta é uma notificação de serviço da Tracked Training Platform.',
  },
  tipBox: { defaultTitle: 'Dica' },
  appStore: {
    appStoreAlt: 'Baixar na App Store',
    googlePlayAlt: 'Disponível no Google Play',
  },
};

export const commonMessages: Record<Locale, CommonMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
