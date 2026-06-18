import type { Locale } from '../i18n/locales.js';

export interface ProspectConvertedCoachMessages {
  preview: (clientName: string) => string;
  heading: string;
  intro: (coachName: string, clientName: string, emailSuffix: string) => string;
  cta: string;
}

const en: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} has been added as your client on Tracked`,
  heading: 'Client Accepted',
  intro: (coachName, clientName, emailSuffix) =>
    `Hi ${coachName}, this is a confirmation that you've accepted ${clientName}${emailSuffix} as a client. They've been notified and can now see you as their coach in the app.`,
  cta: 'View Client Profile',
};

const es: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} se ha añadido como tu cliente en Tracked`,
  heading: 'Cliente aceptado',
  intro: (coachName, clientName, emailSuffix) =>
    `Hola ${coachName}, esto confirma que has aceptado a ${clientName}${emailSuffix} como cliente. Ya ha recibido la notificación y ahora puede verte como su entrenador en la app.`,
  cta: 'Ver perfil del cliente',
};

const fr: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} a été ajouté comme client sur Tracked`,
  heading: 'Client accepté',
  intro: (coachName, clientName, emailSuffix) =>
    `Salut ${coachName}, ceci confirme que tu as accepté ${clientName}${emailSuffix} comme client. Il a été notifié et peut désormais te voir comme son coach dans l'application.`,
  cta: 'Voir le profil du client',
};

const de: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} wurde als dein Klient auf Tracked hinzugefügt`,
  heading: 'Klient angenommen',
  intro: (coachName, clientName, emailSuffix) =>
    `Hallo ${coachName}, hiermit bestätigen wir, dass du ${clientName}${emailSuffix} als Klient angenommen hast. Er wurde benachrichtigt und sieht dich jetzt als seinen Coach in der App.`,
  cta: 'Klientenprofil ansehen',
};

const it: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} è stato aggiunto come tuo cliente su Tracked`,
  heading: 'Cliente accettato',
  intro: (coachName, clientName, emailSuffix) =>
    `Ciao ${coachName}, questa è la conferma che hai accettato ${clientName}${emailSuffix} come cliente. È stato avvisato e ora può vederti come suo coach nell'app.`,
  cta: 'Visualizza il profilo del cliente',
};

const pt: ProspectConvertedCoachMessages = {
  preview: (clientName) =>
    `${clientName} foi adicionado como seu cliente no Tracked`,
  heading: 'Cliente aceito',
  intro: (coachName, clientName, emailSuffix) =>
    `Olá ${coachName}, esta é a confirmação de que você aceitou ${clientName}${emailSuffix} como cliente. Ele foi notificado e agora pode ver você como seu treinador no app.`,
  cta: 'Ver perfil do cliente',
};

export const prospectConvertedCoachMessages: Record<
  Locale,
  ProspectConvertedCoachMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
