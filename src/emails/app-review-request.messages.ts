import type { Locale } from '../i18n/locales.js';

export interface AppReviewRequestMessages {
  /** Receives the already locale-formatted workout count. */
  preview: (count: string, rawCount: number) => string;
  heading: string;
  /** Sentence lead-in; the bolded count is rendered separately in the template. */
  introPre: (userName: string) => string;
  /** Bolded segment: `count` is pre-formatted, `rawCount` drives the noun. */
  introBold: (count: string, rawCount: number) => string;
  /** Sentence remainder after the bolded count. */
  introPost: string;
  workoutsAndCounting: (rawCount: number) => string;
  reviewPitch: string;
  reviewQuestion: string;
  reviewOnAppStore: string;
  reviewOnGooglePlay: string;
  thankYou: string;
}

const en: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `You've completed ${count} ${
      rawCount === 1 ? 'workout' : 'workouts'
    }! Share your experience`,
  heading: "You're Crushing It!",
  introPre: (userName) => `Hi ${userName}, you've completed `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount === 1 ? 'workout' : 'workouts'}`,
  introPost: " on Tracked. That's an amazing achievement!",
  workoutsAndCounting: (rawCount) =>
    rawCount === 1 ? 'workout and counting' : 'workouts and counting',
  reviewPitch:
    "We'd love to hear what you think! A quick review helps other athletes discover Tracked and helps us continue improving the app.",
  reviewQuestion: 'Would you take 30 seconds to leave a review?',
  reviewOnAppStore: 'Review on App Store',
  reviewOnGooglePlay: 'Review on Google Play',
  thankYou:
    'Thank you for being part of the Tracked community. Your support means everything to us!',
};

const es: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `¡Has completado ${count} ${
      rawCount === 1 ? 'entrenamiento' : 'entrenamientos'
    }! Comparte tu experiencia`,
  heading: '¡Lo estás bordando!',
  introPre: (userName) => `Hola ${userName}, has completado `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount === 1 ? 'entrenamiento' : 'entrenamientos'}`,
  introPost: ' en Tracked. ¡Es un logro increíble!',
  workoutsAndCounting: (rawCount) =>
    rawCount === 1 ? 'entrenamiento y subiendo' : 'entrenamientos y subiendo',
  reviewPitch:
    '¡Nos encantaría saber qué opinas! Una reseña rápida ayuda a otros atletas a descubrir Tracked y nos ayuda a seguir mejorando la app.',
  reviewQuestion: '¿Te animas a dejar una reseña en 30 segundos?',
  reviewOnAppStore: 'Reseñar en el App Store',
  reviewOnGooglePlay: 'Reseñar en Google Play',
  thankYou:
    'Gracias por ser parte de la comunidad de Tracked. ¡Tu apoyo lo significa todo para nosotros!',
};

const fr: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `Tu as terminé ${count} ${
      rawCount <= 1 ? 'entraînement' : 'entraînements'
    } ! Partage ton expérience`,
  heading: 'Tu assures !',
  introPre: (userName) => `Salut ${userName}, tu as terminé `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount <= 1 ? 'entraînement' : 'entraînements'}`,
  introPost: " sur Tracked. C'est une réussite incroyable !",
  workoutsAndCounting: (rawCount) =>
    rawCount <= 1
      ? 'entraînement et ça continue'
      : 'entraînements et ça continue',
  reviewPitch:
    "Nous aimerions beaucoup savoir ce que tu en penses ! Un avis rapide aide d'autres athlètes à découvrir Tracked et nous aide à continuer d'améliorer l'application.",
  reviewQuestion: 'Prendrais-tu 30 secondes pour laisser un avis ?',
  reviewOnAppStore: "Donner un avis sur l'App Store",
  reviewOnGooglePlay: 'Donner un avis sur Google Play',
  thankYou:
    'Merci de faire partie de la communauté Tracked. Ton soutien compte énormément pour nous !',
};

const de: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `Du hast ${count} ${
      rawCount === 1 ? 'Workout' : 'Workouts'
    } abgeschlossen! Teile deine Erfahrung`,
  heading: 'Du rockst das!',
  introPre: (userName) => `Hallo ${userName}, du hast `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount === 1 ? 'Workout' : 'Workouts'}`,
  introPost: ' auf Tracked abgeschlossen. Das ist eine großartige Leistung!',
  workoutsAndCounting: (rawCount) =>
    rawCount === 1
      ? 'Workout und es geht weiter'
      : 'Workouts und es geht weiter',
  reviewPitch:
    'Wir würden gerne hören, was du denkst! Eine kurze Bewertung hilft anderen Sportlern, Tracked zu entdecken, und hilft uns, die App weiter zu verbessern.',
  reviewQuestion: 'Nimmst du dir 30 Sekunden Zeit für eine Bewertung?',
  reviewOnAppStore: 'Im App Store bewerten',
  reviewOnGooglePlay: 'Bei Google Play bewerten',
  thankYou:
    'Danke, dass du Teil der Tracked-Community bist. Deine Unterstützung bedeutet uns alles!',
};

const it: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `Hai completato ${count} ${
      rawCount === 1 ? 'allenamento' : 'allenamenti'
    }! Condividi la tua esperienza`,
  heading: 'Stai spaccando!',
  introPre: (userName) => `Ciao ${userName}, hai completato `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount === 1 ? 'allenamento' : 'allenamenti'}`,
  introPost: ' su Tracked. È un traguardo incredibile!',
  workoutsAndCounting: (rawCount) =>
    rawCount === 1 ? 'allenamento e si continua' : 'allenamenti e si continua',
  reviewPitch:
    "Ci piacerebbe sapere cosa ne pensi! Una recensione veloce aiuta altri atleti a scoprire Tracked e ci aiuta a migliorare l'app.",
  reviewQuestion: 'Ti va di lasciare una recensione in 30 secondi?',
  reviewOnAppStore: 'Recensisci su App Store',
  reviewOnGooglePlay: 'Recensisci su Google Play',
  thankYou:
    'Grazie per far parte della community di Tracked. Il tuo supporto è tutto per noi!',
};

const pt: AppReviewRequestMessages = {
  preview: (count, rawCount) =>
    `Você completou ${count} ${
      rawCount === 1 ? 'treino' : 'treinos'
    }! Compartilhe sua experiência`,
  heading: 'Você está arrasando!',
  introPre: (userName) => `Olá ${userName}, você completou `,
  introBold: (count, rawCount) =>
    `${count} ${rawCount === 1 ? 'treino' : 'treinos'}`,
  introPost: ' no Tracked. É uma conquista incrível!',
  workoutsAndCounting: (rawCount) =>
    rawCount === 1 ? 'treino e contando' : 'treinos e contando',
  reviewPitch:
    'Adoraríamos saber sua opinião! Uma avaliação rápida ajuda outros atletas a descobrir o Tracked e nos ajuda a continuar melhorando o app.',
  reviewQuestion: 'Você pode deixar uma avaliação em 30 segundos?',
  reviewOnAppStore: 'Avaliar na App Store',
  reviewOnGooglePlay: 'Avaliar no Google Play',
  thankYou:
    'Obrigado por fazer parte da comunidade Tracked. Seu apoio significa tudo para nós!',
};

export const appReviewRequestMessages: Record<
  Locale,
  AppReviewRequestMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
