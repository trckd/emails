import type { Locale } from '../i18n/locales.js';

export interface CoachInviteMessages {
  preview: (displayName: string) => string;
  heading: (displayName: string) => string;
  intro: (displayName: string) => string;
  featuresTitle: string;
  features: { title: string }[];
  cta: string;
  ignoreNotice: string;
  learnMore: string;
}

const en: CoachInviteMessages = {
  preview: (displayName) => `Join ${displayName}'s coaching program on Tracked`,
  heading: (displayName) => `Join ${displayName}'s Coaching Program`,
  intro: (displayName) =>
    `Hi there! ${displayName} wants to coach you on Tracked - a platform for personalized fitness coaching and progress tracking.`,
  featuresTitle: "What you'll get:",
  features: [
    { title: 'Personalized workout programs' },
    { title: 'Direct communication with your coach' },
    { title: 'Progress tracking & analytics' },
    { title: 'Nutrition guidance' },
  ],
  cta: 'Accept Coaching Invitation',
  ignoreNotice:
    'If this email was not expected, please ignore it. Learn more about Tracked at',
  learnMore: 'tracked.gg',
};

const es: CoachInviteMessages = {
  preview: (displayName) =>
    `Únete al programa de entrenamiento de ${displayName} en Tracked`,
  heading: (displayName) =>
    `Únete al programa de entrenamiento de ${displayName}`,
  intro: (displayName) =>
    `¡Hola! ${displayName} quiere ser tu entrenador en Tracked, una plataforma de entrenamiento personalizado y seguimiento del progreso.`,
  featuresTitle: 'Lo que obtendrás:',
  features: [
    { title: 'Programas de entrenamiento personalizados' },
    { title: 'Comunicación directa con tu entrenador' },
    { title: 'Seguimiento del progreso y analíticas' },
    { title: 'Orientación nutricional' },
  ],
  cta: 'Aceptar invitación de entrenamiento',
  ignoreNotice:
    'Si no esperabas este correo, ignóralo. Conoce más sobre Tracked en',
  learnMore: 'tracked.gg',
};

const fr: CoachInviteMessages = {
  preview: (displayName) =>
    `Rejoins le programme de coaching de ${displayName} sur Tracked`,
  heading: (displayName) =>
    `Rejoins le programme de coaching de ${displayName}`,
  intro: (displayName) =>
    `Salut ! ${displayName} veut être ton coach sur Tracked, une plateforme de coaching fitness personnalisé et de suivi de la progression.`,
  featuresTitle: 'Ce que tu obtiendras :',
  features: [
    { title: "Programmes d'entraînement personnalisés" },
    { title: 'Communication directe avec ton coach' },
    { title: 'Suivi de la progression et analyses' },
    { title: 'Conseils nutritionnels' },
  ],
  cta: "Accepter l'invitation de coaching",
  ignoreNotice:
    "Si tu n'attendais pas cet e-mail, ignore-le. Apprends-en plus sur Tracked sur",
  learnMore: 'tracked.gg',
};

const de: CoachInviteMessages = {
  preview: (displayName) =>
    `Tritt dem Coaching-Programm von ${displayName} auf Tracked bei`,
  heading: (displayName) =>
    `Tritt dem Coaching-Programm von ${displayName} bei`,
  intro: (displayName) =>
    `Hallo! ${displayName} möchte dich auf Tracked coachen – einer Plattform für personalisiertes Fitness-Coaching und Fortschrittsverfolgung.`,
  featuresTitle: 'Das bekommst du:',
  features: [
    { title: 'Personalisierte Workout-Programme' },
    { title: 'Direkte Kommunikation mit deinem Coach' },
    { title: 'Fortschrittsverfolgung und Analysen' },
    { title: 'Ernährungsberatung' },
  ],
  cta: 'Coaching-Einladung annehmen',
  ignoreNotice:
    'Falls du diese E-Mail nicht erwartet hast, ignoriere sie einfach. Erfahre mehr über Tracked unter',
  learnMore: 'tracked.gg',
};

const it: CoachInviteMessages = {
  preview: (displayName) =>
    `Unisciti al programma di coaching di ${displayName} su Tracked`,
  heading: (displayName) =>
    `Unisciti al programma di coaching di ${displayName}`,
  intro: (displayName) =>
    `Ciao! ${displayName} vuole farti da coach su Tracked, una piattaforma per il coaching fitness personalizzato e il monitoraggio dei progressi.`,
  featuresTitle: 'Cosa otterrai:',
  features: [
    { title: 'Programmi di allenamento personalizzati' },
    { title: 'Comunicazione diretta con il tuo coach' },
    { title: 'Monitoraggio dei progressi e analisi' },
    { title: "Consigli sull'alimentazione" },
  ],
  cta: "Accetta l'invito di coaching",
  ignoreNotice:
    'Se non ti aspettavi questa email, ignorala. Scopri di più su Tracked su',
  learnMore: 'tracked.gg',
};

const pt: CoachInviteMessages = {
  preview: (displayName) =>
    `Participe do programa de treino de ${displayName} no Tracked`,
  heading: (displayName) => `Participe do programa de treino de ${displayName}`,
  intro: (displayName) =>
    `Olá! ${displayName} quer ser seu treinador no Tracked, uma plataforma de treino personalizado e acompanhamento do progresso.`,
  featuresTitle: 'O que você vai receber:',
  features: [
    { title: 'Programas de treino personalizados' },
    { title: 'Comunicação direta com seu treinador' },
    { title: 'Acompanhamento do progresso e análises' },
    { title: 'Orientação nutricional' },
  ],
  cta: 'Aceitar convite de treino',
  ignoreNotice:
    'Se você não esperava este e-mail, ignore-o. Saiba mais sobre o Tracked em',
  learnMore: 'tracked.gg',
};

export const coachInviteMessages: Record<Locale, CoachInviteMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
