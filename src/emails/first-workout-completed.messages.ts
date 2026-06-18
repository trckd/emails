import type { Locale } from '../i18n/locales.js';

export interface FirstWorkoutCompletedMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  detailsTitle: string;
  workoutLabel: string;
  setsLabel: string;
  repsLabel: string;
  firstStep: string;
  cta: string;
  proTipTitle: string;
  proTip: string;
}

const en: FirstWorkoutCompletedMessages = {
  preview: 'Congratulations on completing your first workout on Tracked!',
  heading: 'First Workout Complete!',
  intro: (userName) =>
    `Congratulations, ${userName}! You've just completed your first workout on Tracked.`,
  detailsTitle: 'Your First Workout:',
  workoutLabel: 'Workout:',
  setsLabel: 'Sets Completed:',
  repsLabel: 'Total Reps:',
  firstStep:
    "You've taken the first step towards standardizing how you train. The next workout you track will help you see if you are progressing or regressing.",
  cta: 'View Your Progress',
  proTipTitle: 'Pro Tip',
  proTip:
    'Want to track warm ups and intensity measures? Check out settings in the app to enable these advanced tracking features.',
};

const es: FirstWorkoutCompletedMessages = {
  preview: '¡Felicidades por completar tu primer entrenamiento en Tracked!',
  heading: '¡Primer entrenamiento completado!',
  intro: (userName) =>
    `¡Felicidades, ${userName}! Acabas de completar tu primer entrenamiento en Tracked.`,
  detailsTitle: 'Tu primer entrenamiento:',
  workoutLabel: 'Entrenamiento:',
  setsLabel: 'Series completadas:',
  repsLabel: 'Repeticiones totales:',
  firstStep:
    'Has dado el primer paso para estandarizar tu forma de entrenar. El próximo entrenamiento que registres te ayudará a ver si estás progresando o retrocediendo.',
  cta: 'Ver tu progreso',
  proTipTitle: 'Consejo pro',
  proTip:
    '¿Quieres registrar calentamientos y medidas de intensidad? Revisa los ajustes de la app para activar estas funciones avanzadas de seguimiento.',
};

const fr: FirstWorkoutCompletedMessages = {
  preview: 'Félicitations pour ton premier entraînement terminé sur Tracked !',
  heading: 'Premier entraînement terminé !',
  intro: (userName) =>
    `Félicitations, ${userName} ! Tu viens de terminer ton premier entraînement sur Tracked.`,
  detailsTitle: 'Ton premier entraînement :',
  workoutLabel: 'Entraînement :',
  setsLabel: 'Séries effectuées :',
  repsLabel: 'Répétitions totales :',
  firstStep:
    "Tu as fait le premier pas pour standardiser ta façon de t'entraîner. Le prochain entraînement que tu suivras te permettra de voir si tu progresses ou si tu régresses.",
  cta: 'Voir ta progression',
  proTipTitle: 'Astuce de pro',
  proTip:
    "Tu veux suivre les échauffements et les mesures d'intensité ? Va dans les paramètres de l'application pour activer ces fonctions de suivi avancées.",
};

const de: FirstWorkoutCompletedMessages = {
  preview: 'Glückwunsch zu deinem ersten abgeschlossenen Workout auf Tracked!',
  heading: 'Erstes Workout abgeschlossen!',
  intro: (userName) =>
    `Glückwunsch, ${userName}! Du hast gerade dein erstes Workout auf Tracked abgeschlossen.`,
  detailsTitle: 'Dein erstes Workout:',
  workoutLabel: 'Workout:',
  setsLabel: 'Abgeschlossene Sätze:',
  repsLabel: 'Wiederholungen gesamt:',
  firstStep:
    'Du hast den ersten Schritt gemacht, um dein Training zu standardisieren. Das nächste Workout, das du trackst, zeigt dir, ob du Fortschritte machst oder nachlässt.',
  cta: 'Fortschritt ansehen',
  proTipTitle: 'Profi-Tipp',
  proTip:
    'Möchtest du Aufwärmsätze und Intensitätswerte tracken? Schau in die Einstellungen der App, um diese erweiterten Tracking-Funktionen zu aktivieren.',
};

const it: FirstWorkoutCompletedMessages = {
  preview:
    'Complimenti per aver completato il tuo primo allenamento su Tracked!',
  heading: 'Primo allenamento completato!',
  intro: (userName) =>
    `Complimenti, ${userName}! Hai appena completato il tuo primo allenamento su Tracked.`,
  detailsTitle: 'Il tuo primo allenamento:',
  workoutLabel: 'Allenamento:',
  setsLabel: 'Serie completate:',
  repsLabel: 'Ripetizioni totali:',
  firstStep:
    'Hai fatto il primo passo per standardizzare il tuo modo di allenarti. Il prossimo allenamento che registrerai ti aiuterà a capire se stai progredendo o regredendo.',
  cta: 'Vedi i tuoi progressi',
  proTipTitle: 'Consiglio da pro',
  proTip:
    "Vuoi registrare i riscaldamenti e le misure di intensità? Vai nelle impostazioni dell'app per attivare queste funzioni di monitoraggio avanzate.",
};

const pt: FirstWorkoutCompletedMessages = {
  preview: 'Parabéns por concluir seu primeiro treino no Tracked!',
  heading: 'Primeiro treino concluído!',
  intro: (userName) =>
    `Parabéns, ${userName}! Você acabou de concluir seu primeiro treino no Tracked.`,
  detailsTitle: 'Seu primeiro treino:',
  workoutLabel: 'Treino:',
  setsLabel: 'Séries concluídas:',
  repsLabel: 'Total de repetições:',
  firstStep:
    'Você deu o primeiro passo para padronizar como treina. O próximo treino que você registrar vai ajudar a ver se está progredindo ou regredindo.',
  cta: 'Ver seu progresso',
  proTipTitle: 'Dica pro',
  proTip:
    'Quer registrar aquecimentos e medidas de intensidade? Confira as configurações do app para ativar esses recursos avançados de acompanhamento.',
};

export const firstWorkoutCompletedMessages: Record<
  Locale,
  FirstWorkoutCompletedMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
