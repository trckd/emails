import type { Locale } from '../i18n/locales.js';

export interface SubscriptionCanceledMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  nextTitle: string;
  nextActiveUntil: (cancellationDate: string) => string;
  nextFullAccess: string;
  nextDataStored: string;
  sorry: string;
  feedbackCta: string;
  changedMindTitle: string;
  changedMindBody: (cancellationDate: string) => string;
  reactivateCta: string;
}

const en: SubscriptionCanceledMessages = {
  preview: 'Your Tracked subscription has been canceled',
  heading: 'Subscription Canceled',
  intro: (userName) =>
    `Hi ${userName}, we've confirmed that your Tracked subscription has been canceled.`,
  nextTitle: 'What happens next:',
  nextActiveUntil: (cancellationDate) =>
    `• Your subscription will remain active until ${cancellationDate}`,
  nextFullAccess: "• You'll continue to have full access until that date",
  nextDataStored:
    '• Your data will be safely stored and available if you return',
  sorry:
    "We're sorry to see you go! Your feedback helps us improve Tracked for everyone.",
  feedbackCta: 'Share Feedback',
  changedMindTitle: 'Changed your mind?',
  changedMindBody: (cancellationDate) =>
    `You can reactivate your subscription at any time before ${cancellationDate}.`,
  reactivateCta: 'Reactivate Subscription',
};

const es: SubscriptionCanceledMessages = {
  preview: 'Tu suscripción de Tracked se ha cancelado',
  heading: 'Suscripción cancelada',
  intro: (userName) =>
    `Hola ${userName}, hemos confirmado que tu suscripción de Tracked se ha cancelado.`,
  nextTitle: 'Qué pasa ahora:',
  nextActiveUntil: (cancellationDate) =>
    `• Tu suscripción seguirá activa hasta el ${cancellationDate}`,
  nextFullAccess: '• Seguirás teniendo acceso completo hasta esa fecha',
  nextDataStored:
    '• Tus datos se guardarán de forma segura y estarán disponibles si vuelves',
  sorry:
    '¡Lamentamos que te vayas! Tus comentarios nos ayudan a mejorar Tracked para todos.',
  feedbackCta: 'Enviar comentarios',
  changedMindTitle: '¿Cambiaste de opinión?',
  changedMindBody: (cancellationDate) =>
    `Puedes reactivar tu suscripción en cualquier momento antes del ${cancellationDate}.`,
  reactivateCta: 'Reactivar suscripción',
};

const fr: SubscriptionCanceledMessages = {
  preview: 'Ton abonnement Tracked a été annulé',
  heading: 'Abonnement annulé',
  intro: (userName) =>
    `Salut ${userName}, nous confirmons que ton abonnement Tracked a été annulé.`,
  nextTitle: 'Ce qui se passe ensuite :',
  nextActiveUntil: (cancellationDate) =>
    `• Ton abonnement restera actif jusqu'au ${cancellationDate}`,
  nextFullAccess: "• Tu conserveras un accès complet jusqu'à cette date",
  nextDataStored:
    '• Tes données seront conservées en toute sécurité et disponibles si tu reviens',
  sorry:
    'Nous sommes désolés de te voir partir ! Tes retours nous aident à améliorer Tracked pour tout le monde.',
  feedbackCta: 'Donner mon avis',
  changedMindTitle: "Tu as changé d'avis ?",
  changedMindBody: (cancellationDate) =>
    `Tu peux réactiver ton abonnement à tout moment avant le ${cancellationDate}.`,
  reactivateCta: "Réactiver l'abonnement",
};

const de: SubscriptionCanceledMessages = {
  preview: 'Dein Tracked-Abo wurde gekündigt',
  heading: 'Abo gekündigt',
  intro: (userName) =>
    `Hallo ${userName}, wir bestätigen, dass dein Tracked-Abo gekündigt wurde.`,
  nextTitle: 'Wie es weitergeht:',
  nextActiveUntil: (cancellationDate) =>
    `• Dein Abo bleibt bis zum ${cancellationDate} aktiv`,
  nextFullAccess: '• Bis zu diesem Datum behältst du vollen Zugang',
  nextDataStored:
    '• Deine Daten werden sicher gespeichert und stehen bereit, falls du zurückkommst',
  sorry:
    'Schade, dass du gehst! Dein Feedback hilft uns, Tracked für alle zu verbessern.',
  feedbackCta: 'Feedback geben',
  changedMindTitle: 'Anders überlegt?',
  changedMindBody: (cancellationDate) =>
    `Du kannst dein Abo jederzeit vor dem ${cancellationDate} reaktivieren.`,
  reactivateCta: 'Abo reaktivieren',
};

const it: SubscriptionCanceledMessages = {
  preview: 'Il tuo abbonamento Tracked è stato annullato',
  heading: 'Abbonamento annullato',
  intro: (userName) =>
    `Ciao ${userName}, ti confermiamo che il tuo abbonamento Tracked è stato annullato.`,
  nextTitle: 'Cosa succede ora:',
  nextActiveUntil: (cancellationDate) =>
    `• Il tuo abbonamento resterà attivo fino al ${cancellationDate}`,
  nextFullAccess: '• Continuerai ad avere accesso completo fino a quella data',
  nextDataStored:
    '• I tuoi dati saranno conservati in sicurezza e disponibili se tornerai',
  sorry:
    'Ci dispiace vederti andare via! Il tuo feedback ci aiuta a migliorare Tracked per tutti.',
  feedbackCta: 'Lascia un feedback',
  changedMindTitle: 'Hai cambiato idea?',
  changedMindBody: (cancellationDate) =>
    `Puoi riattivare il tuo abbonamento in qualsiasi momento prima del ${cancellationDate}.`,
  reactivateCta: 'Riattiva abbonamento',
};

const pt: SubscriptionCanceledMessages = {
  preview: 'Sua assinatura do Tracked foi cancelada',
  heading: 'Assinatura cancelada',
  intro: (userName) =>
    `Olá ${userName}, confirmamos que sua assinatura do Tracked foi cancelada.`,
  nextTitle: 'O que acontece agora:',
  nextActiveUntil: (cancellationDate) =>
    `• Sua assinatura continuará ativa até ${cancellationDate}`,
  nextFullAccess: '• Você continuará com acesso completo até essa data',
  nextDataStored:
    '• Seus dados serão guardados com segurança e ficarão disponíveis se você voltar',
  sorry:
    'Sentimos muito que você esteja indo embora! Seu feedback nos ajuda a melhorar o Tracked para todos.',
  feedbackCta: 'Enviar feedback',
  changedMindTitle: 'Mudou de ideia?',
  changedMindBody: (cancellationDate) =>
    `Você pode reativar sua assinatura a qualquer momento antes de ${cancellationDate}.`,
  reactivateCta: 'Reativar assinatura',
};

export const subscriptionCanceledMessages: Record<
  Locale,
  SubscriptionCanceledMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
