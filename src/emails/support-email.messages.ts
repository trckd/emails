import type { Locale } from '../i18n/locales.js';

export interface SupportEmailMessages {
  preview: (email: string) => string;
  heading: string;
  emailLabel: string;
  categoryLabel: string;
  messageLabel: string;
}

const en: SupportEmailMessages = {
  preview: (email) => `Support request from ${email}`,
  heading: 'Support Request',
  emailLabel: 'Email:',
  categoryLabel: 'Category:',
  messageLabel: 'Message:',
};

const es: SupportEmailMessages = {
  preview: (email) => `Solicitud de soporte de ${email}`,
  heading: 'Solicitud de soporte',
  emailLabel: 'Correo:',
  categoryLabel: 'Categoría:',
  messageLabel: 'Mensaje:',
};

const fr: SupportEmailMessages = {
  preview: (email) => `Demande d'assistance de ${email}`,
  heading: "Demande d'assistance",
  emailLabel: 'E-mail :',
  categoryLabel: 'Catégorie :',
  messageLabel: 'Message :',
};

const de: SupportEmailMessages = {
  preview: (email) => `Support-Anfrage von ${email}`,
  heading: 'Support-Anfrage',
  emailLabel: 'E-Mail:',
  categoryLabel: 'Kategorie:',
  messageLabel: 'Nachricht:',
};

const it: SupportEmailMessages = {
  preview: (email) => `Richiesta di assistenza da ${email}`,
  heading: 'Richiesta di assistenza',
  emailLabel: 'Email:',
  categoryLabel: 'Categoria:',
  messageLabel: 'Messaggio:',
};

const pt: SupportEmailMessages = {
  preview: (email) => `Solicitação de suporte de ${email}`,
  heading: 'Solicitação de suporte',
  emailLabel: 'E-mail:',
  categoryLabel: 'Categoria:',
  messageLabel: 'Mensagem:',
};

export const supportEmailMessages: Record<Locale, SupportEmailMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
