import type { Locale } from '../i18n/locales.js';

export interface CheckInAvailableMessages {
  preview: (coachName: string) => string;
  heading: string;
  intro: (userName: string, coachName: string) => string;
  dueLabel: string;
  cta: string;
  closing: (coachName: string) => string;
  appTipTitle: string;
  appTip: string;
}

const en: CheckInAvailableMessages = {
  preview: (coachName) => `${coachName} sent you a new check-in.`,
  heading: 'You have a new check-in',
  intro: (userName, coachName) =>
    `Hi ${userName}, ${coachName} sent you a check-in to fill out.`,
  dueLabel: 'Due',
  cta: 'Open check-in',
  closing: (coachName) =>
    `It only takes a minute, and your answers help ${coachName} keep your plan on track.`,
  appTipTitle: 'Get check-ins instantly',
  appTip:
    "You're getting this by email because push notifications aren't set up. Install the Tracked app and turn on notifications to get check-ins the moment your coach sends them.",
};

const es: CheckInAvailableMessages = {
  preview: (coachName) => `${coachName} te envió un nuevo check-in.`,
  heading: 'Tienes un nuevo check-in',
  intro: (userName, coachName) =>
    `Hola ${userName}, ${coachName} te envió un check-in para completar.`,
  dueLabel: 'Fecha límite',
  cta: 'Abrir check-in',
  closing: (coachName) =>
    `Solo te toma un minuto, y tus respuestas ayudan a ${coachName} a mantener tu plan en marcha.`,
  appTipTitle: 'Recibe los check-ins al instante',
  appTip:
    'Recibes esto por correo porque no tienes activadas las notificaciones. Instala la app de Tracked y activa las notificaciones para recibir los check-ins en cuanto tu entrenador los envíe.',
};

const fr: CheckInAvailableMessages = {
  preview: (coachName) => `${coachName} t'a envoyé un nouveau check-in.`,
  heading: 'Tu as un nouveau check-in',
  intro: (userName, coachName) =>
    `Salut ${userName}, ${coachName} t'a envoyé un check-in à remplir.`,
  dueLabel: 'Échéance',
  cta: 'Ouvrir le check-in',
  closing: (coachName) =>
    `Ça ne prend qu'une minute, et tes réponses aident ${coachName} à garder ton plan sur les rails.`,
  appTipTitle: 'Reçois les check-ins instantanément',
  appTip:
    "Tu reçois cet e-mail car les notifications ne sont pas activées. Installe l'app Tracked et active les notifications pour recevoir les check-ins dès que ton coach les envoie.",
};

const de: CheckInAvailableMessages = {
  preview: (coachName) =>
    `${coachName} hat dir einen neuen Check-in geschickt.`,
  heading: 'Du hast einen neuen Check-in',
  intro: (userName, coachName) =>
    `Hallo ${userName}, ${coachName} hat dir einen Check-in zum Ausfüllen geschickt.`,
  dueLabel: 'Fällig',
  cta: 'Check-in öffnen',
  closing: (coachName) =>
    `Es dauert nur eine Minute, und deine Antworten helfen ${coachName}, deinen Plan auf Kurs zu halten.`,
  appTipTitle: 'Check-ins sofort erhalten',
  appTip:
    'Du erhältst diese E-Mail, weil Push-Benachrichtigungen nicht eingerichtet sind. Installiere die Tracked-App und aktiviere Benachrichtigungen, um Check-ins sofort zu erhalten, sobald dein Coach sie sendet.',
};

const it: CheckInAvailableMessages = {
  preview: (coachName) => `${coachName} ti ha inviato un nuovo check-in.`,
  heading: 'Hai un nuovo check-in',
  intro: (userName, coachName) =>
    `Ciao ${userName}, ${coachName} ti ha inviato un check-in da compilare.`,
  dueLabel: 'Scadenza',
  cta: 'Apri il check-in',
  closing: (coachName) =>
    `Ci vuole solo un minuto, e le tue risposte aiutano ${coachName} a tenere il tuo piano in carreggiata.`,
  appTipTitle: "Ricevi i check-in all'istante",
  appTip:
    "Ricevi questa email perché le notifiche non sono attive. Installa l'app Tracked e attiva le notifiche per ricevere i check-in non appena il tuo coach li invia.",
};

const pt: CheckInAvailableMessages = {
  preview: (coachName) => `${coachName} enviou um novo check-in para você.`,
  heading: 'Você tem um novo check-in',
  intro: (userName, coachName) =>
    `Olá ${userName}, ${coachName} enviou um check-in para você preencher.`,
  dueLabel: 'Prazo',
  cta: 'Abrir check-in',
  closing: (coachName) =>
    `Leva só um minuto, e suas respostas ajudam ${coachName} a manter seu plano em dia.`,
  appTipTitle: 'Receba os check-ins na hora',
  appTip:
    'Você está recebendo isto por e-mail porque as notificações não estão ativadas. Instale o app Tracked e ative as notificações para receber os check-ins assim que seu treinador enviar.',
};

export const checkInAvailableMessages: Record<
  Locale,
  CheckInAvailableMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
