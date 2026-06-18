import type { Locale } from '../i18n/locales.js';

export interface FirstWorkoutAssignedMessages {
  preview: (coachName: string) => string;
  heading: string;
  intro: (clientName: string, coachName: string) => string;
  detailsTitle: string;
  programLabel: string;
  coachLabel: string;
  designedNote: string;
  cta: string;
  trackReminder: string;
}

const en: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} has assigned your first workout program on Tracked`,
  heading: 'Your Training Journey Begins!',
  intro: (clientName, coachName) =>
    `Hi ${clientName}, ${coachName} has created your personalized workout program and it's ready for you to start.`,
  detailsTitle: 'Program Details:',
  programLabel: 'Program:',
  coachLabel: 'Coach:',
  designedNote:
    'Your coach has designed this program specifically for your goals. Open the app to view your workouts and get started!',
  cta: 'View Your Program',
  trackReminder:
    'Remember to track each workout and communicate with your coach if you have any questions or concerns.',
};

const es: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} te ha asignado tu primer programa de entrenamiento en Tracked`,
  heading: '¡Comienza tu camino de entrenamiento!',
  intro: (clientName, coachName) =>
    `Hola ${clientName}, ${coachName} ha creado tu programa de entrenamiento personalizado y ya está listo para que empieces.`,
  detailsTitle: 'Detalles del programa:',
  programLabel: 'Programa:',
  coachLabel: 'Entrenador:',
  designedNote:
    'Tu entrenador ha diseñado este programa específicamente para tus objetivos. ¡Abre la app para ver tus entrenamientos y empezar!',
  cta: 'Ver tu programa',
  trackReminder:
    'Recuerda registrar cada entrenamiento y hablar con tu entrenador si tienes alguna duda o inquietud.',
};

const fr: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} t'a attribué ton premier programme d'entraînement sur Tracked`,
  heading: "Ton parcours d'entraînement commence !",
  intro: (clientName, coachName) =>
    `Salut ${clientName}, ${coachName} a créé ton programme d'entraînement personnalisé et il est prêt à démarrer.`,
  detailsTitle: 'Détails du programme :',
  programLabel: 'Programme :',
  coachLabel: 'Coach :',
  designedNote:
    "Ton coach a conçu ce programme spécialement pour tes objectifs. Ouvre l'application pour voir tes entraînements et te lancer !",
  cta: 'Voir ton programme',
  trackReminder:
    "N'oublie pas de suivre chaque entraînement et de contacter ton coach si tu as des questions ou des inquiétudes.",
};

const de: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} hat dir dein erstes Trainingsprogramm auf Tracked zugewiesen`,
  heading: 'Dein Trainingsweg beginnt!',
  intro: (clientName, coachName) =>
    `Hallo ${clientName}, ${coachName} hat dein personalisiertes Workout-Programm erstellt und es ist startklar für dich.`,
  detailsTitle: 'Programmdetails:',
  programLabel: 'Programm:',
  coachLabel: 'Coach:',
  designedNote:
    'Dein Coach hat dieses Programm speziell für deine Ziele entwickelt. Öffne die App, um deine Workouts anzusehen und loszulegen!',
  cta: 'Programm ansehen',
  trackReminder:
    'Denk daran, jedes Workout zu tracken und dich bei Fragen oder Bedenken an deinen Coach zu wenden.',
};

const it: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} ti ha assegnato il tuo primo programma di allenamento su Tracked`,
  heading: 'Il tuo percorso di allenamento inizia!',
  intro: (clientName, coachName) =>
    `Ciao ${clientName}, ${coachName} ha creato il tuo programma di allenamento personalizzato ed è pronto per iniziare.`,
  detailsTitle: 'Dettagli del programma:',
  programLabel: 'Programma:',
  coachLabel: 'Coach:',
  designedNote:
    "Il tuo coach ha progettato questo programma appositamente per i tuoi obiettivi. Apri l'app per vedere i tuoi allenamenti e iniziare!",
  cta: 'Vedi il tuo programma',
  trackReminder:
    'Ricordati di registrare ogni allenamento e di parlare con il tuo coach se hai domande o dubbi.',
};

const pt: FirstWorkoutAssignedMessages = {
  preview: (coachName) =>
    `${coachName} atribuiu seu primeiro programa de treino no Tracked`,
  heading: 'Sua jornada de treino começa!',
  intro: (clientName, coachName) =>
    `Olá ${clientName}, ${coachName} criou seu programa de treino personalizado e ele já está pronto para você começar.`,
  detailsTitle: 'Detalhes do programa:',
  programLabel: 'Programa:',
  coachLabel: 'Treinador:',
  designedNote:
    'Seu treinador criou este programa especificamente para suas metas. Abra o app para ver seus treinos e começar!',
  cta: 'Ver seu programa',
  trackReminder:
    'Lembre-se de registrar cada treino e de falar com seu treinador se tiver qualquer dúvida ou preocupação.',
};

export const firstWorkoutAssignedMessages: Record<
  Locale,
  FirstWorkoutAssignedMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
