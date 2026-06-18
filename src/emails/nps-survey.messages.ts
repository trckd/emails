import type { Locale } from '../i18n/locales.js';

export interface NpsSurveyMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  question: string;
  notLikely: string;
  veryLikely: string;
  closing: string;
}

const en: NpsSurveyMessages = {
  preview: 'Quick question: How likely are you to recommend Tracked?',
  heading: 'Quick Feedback',
  intro: (userName) =>
    `Hi ${userName}, we'd love your honest feedback. It only takes 10 seconds!`,
  question: 'How likely are you to recommend Tracked to a friend?',
  notLikely: 'Not likely',
  veryLikely: 'Very likely',
  closing:
    "Just click a number above - that's it! Your feedback helps us build a better app for everyone.",
};

const es: NpsSurveyMessages = {
  preview: 'Pregunta rápida: ¿qué probabilidad hay de que recomiendes Tracked?',
  heading: 'Comentarios rápidos',
  intro: (userName) =>
    `Hola ${userName}, nos encantaría conocer tu opinión sincera. ¡Solo te llevará 10 segundos!`,
  question: '¿Qué probabilidad hay de que recomiendes Tracked a un amigo?',
  notLikely: 'Poco probable',
  veryLikely: 'Muy probable',
  closing:
    'Solo haz clic en un número de arriba, ¡eso es todo! Tu opinión nos ayuda a crear una mejor app para todos.',
};

const fr: NpsSurveyMessages = {
  preview:
    'Petite question : quelle est la probabilité que tu recommandes Tracked ?',
  heading: 'Ton avis en bref',
  intro: (userName) =>
    `Salut ${userName}, nous aimerions beaucoup avoir ton avis sincère. Cela ne prend que 10 secondes !`,
  question: 'Quelle est la probabilité que tu recommandes Tracked à un ami ?',
  notLikely: 'Peu probable',
  veryLikely: 'Très probable',
  closing:
    "Clique simplement sur un chiffre ci-dessus, et c'est tout ! Ton avis nous aide à créer une meilleure application pour tout le monde.",
};

const de: NpsSurveyMessages = {
  preview:
    'Kurze Frage: Wie wahrscheinlich ist es, dass du Tracked weiterempfiehlst?',
  heading: 'Kurzes Feedback',
  intro: (userName) =>
    `Hallo ${userName}, wir würden uns über dein ehrliches Feedback freuen. Es dauert nur 10 Sekunden!`,
  question:
    'Wie wahrscheinlich ist es, dass du Tracked einem Freund weiterempfiehlst?',
  notLikely: 'Unwahrscheinlich',
  veryLikely: 'Sehr wahrscheinlich',
  closing:
    "Klick einfach oben auf eine Zahl – das war's! Dein Feedback hilft uns, eine bessere App für alle zu entwickeln.",
};

const it: NpsSurveyMessages = {
  preview: 'Domanda veloce: quanto è probabile che consigli Tracked?',
  heading: 'Feedback veloce',
  intro: (userName) =>
    `Ciao ${userName}, ci piacerebbe avere il tuo parere sincero. Bastano solo 10 secondi!`,
  question: 'Quanto è probabile che consigli Tracked a un amico?',
  notLikely: 'Poco probabile',
  veryLikely: 'Molto probabile',
  closing:
    "Basta cliccare su un numero qui sopra, tutto qui! Il tuo parere ci aiuta a creare un'app migliore per tutti.",
};

const pt: NpsSurveyMessages = {
  preview:
    'Pergunta rápida: qual a probabilidade de você recomendar o Tracked?',
  heading: 'Feedback rápido',
  intro: (userName) =>
    `Olá ${userName}, adoraríamos receber seu feedback sincero. Leva só 10 segundos!`,
  question: 'Qual a probabilidade de você recomendar o Tracked a um amigo?',
  notLikely: 'Pouco provável',
  veryLikely: 'Muito provável',
  closing:
    'É só clicar em um número acima, simples assim! Seu feedback nos ajuda a construir um app melhor para todos.',
};

export const npsSurveyMessages: Record<Locale, NpsSurveyMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
