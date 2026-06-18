import type { Locale } from '../i18n/locales.js';

export interface DirectMessageMessages {
  preview: (senderName: string) => string;
  heading: string;
  intro: (recipientName: string, displayName: string) => string;
  messagePreviewLabel: string;
  cta: string;
  openAppHint: string;
}

const en: DirectMessageMessages = {
  preview: (senderName) => `New message from ${senderName} on Tracked`,
  heading: 'You Have a New Message',
  intro: (recipientName, displayName) =>
    `Hi ${recipientName}, ${displayName} sent you a message on Tracked.`,
  messagePreviewLabel: 'Message Preview:',
  cta: 'View Message',
  openAppHint: 'Open the Tracked app to read the full message and reply.',
};

const es: DirectMessageMessages = {
  preview: (senderName) => `Nuevo mensaje de ${senderName} en Tracked`,
  heading: 'Tienes un nuevo mensaje',
  intro: (recipientName, displayName) =>
    `Hola ${recipientName}, ${displayName} te envió un mensaje en Tracked.`,
  messagePreviewLabel: 'Vista previa del mensaje:',
  cta: 'Ver mensaje',
  openAppHint:
    'Abre la app de Tracked para leer el mensaje completo y responder.',
};

const fr: DirectMessageMessages = {
  preview: (senderName) => `Nouveau message de ${senderName} sur Tracked`,
  heading: 'Tu as un nouveau message',
  intro: (recipientName, displayName) =>
    `Salut ${recipientName}, ${displayName} t'a envoyé un message sur Tracked.`,
  messagePreviewLabel: 'Aperçu du message :',
  cta: 'Voir le message',
  openAppHint:
    "Ouvre l'app Tracked pour lire le message en entier et répondre.",
};

const de: DirectMessageMessages = {
  preview: (senderName) => `Neue Nachricht von ${senderName} auf Tracked`,
  heading: 'Du hast eine neue Nachricht',
  intro: (recipientName, displayName) =>
    `Hallo ${recipientName}, ${displayName} hat dir eine Nachricht auf Tracked geschickt.`,
  messagePreviewLabel: 'Nachrichtenvorschau:',
  cta: 'Nachricht ansehen',
  openAppHint:
    'Öffne die Tracked-App, um die ganze Nachricht zu lesen und zu antworten.',
};

const it: DirectMessageMessages = {
  preview: (senderName) => `Nuovo messaggio da ${senderName} su Tracked`,
  heading: 'Hai un nuovo messaggio',
  intro: (recipientName, displayName) =>
    `Ciao ${recipientName}, ${displayName} ti ha inviato un messaggio su Tracked.`,
  messagePreviewLabel: 'Anteprima del messaggio:',
  cta: 'Vedi messaggio',
  openAppHint:
    "Apri l'app Tracked per leggere il messaggio completo e rispondere.",
};

const pt: DirectMessageMessages = {
  preview: (senderName) => `Nova mensagem de ${senderName} no Tracked`,
  heading: 'Você tem uma nova mensagem',
  intro: (recipientName, displayName) =>
    `Olá ${recipientName}, ${displayName} enviou uma mensagem para você no Tracked.`,
  messagePreviewLabel: 'Prévia da mensagem:',
  cta: 'Ver mensagem',
  openAppHint:
    'Abra o app do Tracked para ler a mensagem completa e responder.',
};

export const directMessageMessages: Record<Locale, DirectMessageMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
