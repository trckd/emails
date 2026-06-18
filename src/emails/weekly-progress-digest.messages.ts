import type { Locale } from '../i18n/locales.js';
import { plural } from '../i18n/format.js';

export interface WeeklyProgressDigestMessages {
  preview: (weekStartDate: string, weekEndDate: string) => string;
  heading: string;
  intro: (
    userName: string,
    weekStartDate: string,
    weekEndDate: string
  ) => string;
  labelWorkouts: string;
  labelVolume: string;
  labelNewPRs: string;
  completionRate: (rate: string) => string;
  // volumeChange: sign decided in template; absolute formatted value passed in
  volumeChangeUp: (value: string) => string;
  volumeChangeDown: (value: string) => string;
  volumeChangeSame: string;
  // streakDays: formatted count + raw count for pluralization
  streakBadge: (formattedDays: string, days: number) => string;
  streakSubtext: string;
  topExercisesTitle: string;
  cta: string;
  closing: string;
}

const en: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Your weekly training summary - ${weekStartDate} to ${weekEndDate}`,
  heading: 'Your Week in Review',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Hi ${userName}, here's your training summary for ${weekStartDate} - ${weekEndDate}.`,
  labelWorkouts: 'Workouts',
  labelVolume: 'Volume',
  labelNewPRs: 'New PRs',
  completionRate: (rate) => `${rate}% complete`,
  volumeChangeUp: (value) => `+${value}% vs last week`,
  volumeChangeDown: (value) => `-${value}% vs last week`,
  volumeChangeSame: 'Same as last week',
  streakBadge: (formattedDays, days) => {
    const noun = plural('en', days, { one: 'Day', other: 'Day' });
    return `${formattedDays} ${noun} Streak!`;
  },
  streakSubtext: 'Keep it going - consistency is key',
  topExercisesTitle: 'Top Exercises This Week',
  cta: 'View Full Report',
  closing: 'Keep pushing - every workout brings you closer to your goals.',
};

const es: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Tu resumen semanal de entrenamiento: del ${weekStartDate} al ${weekEndDate}`,
  heading: 'Tu semana en resumen',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Hola ${userName}, aquí tienes tu resumen de entrenamiento del ${weekStartDate} al ${weekEndDate}.`,
  labelWorkouts: 'Entrenamientos',
  labelVolume: 'Volumen',
  labelNewPRs: 'Nuevos PRs',
  completionRate: (rate) => `${rate}% completado`,
  volumeChangeUp: (value) => `+${value}% vs. la semana pasada`,
  volumeChangeDown: (value) => `-${value}% vs. la semana pasada`,
  volumeChangeSame: 'Igual que la semana pasada',
  streakBadge: (formattedDays, days) => {
    const noun = plural('es', days, { one: 'día', other: 'días' });
    return `¡Racha de ${formattedDays} ${noun}!`;
  },
  streakSubtext: 'Sigue así: la constancia es la clave',
  topExercisesTitle: 'Mejores ejercicios de la semana',
  cta: 'Ver informe completo',
  closing:
    'Sigue dándolo todo: cada entrenamiento te acerca más a tus objetivos.',
};

const fr: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Ton résumé d'entraînement de la semaine - du ${weekStartDate} au ${weekEndDate}`,
  heading: 'Ta semaine en résumé',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Salut ${userName}, voici ton résumé d'entraînement du ${weekStartDate} au ${weekEndDate}.`,
  labelWorkouts: 'Entraînements',
  labelVolume: 'Volume',
  labelNewPRs: 'Nouveaux records',
  completionRate: (rate) => `${rate}% atteint`,
  volumeChangeUp: (value) => `+${value}% vs la semaine dernière`,
  volumeChangeDown: (value) => `-${value}% vs la semaine dernière`,
  volumeChangeSame: 'Identique à la semaine dernière',
  streakBadge: (formattedDays, days) => {
    const noun = plural('fr', days, { one: 'jour', other: 'jours' });
    return `Série de ${formattedDays} ${noun} !`;
  },
  streakSubtext: 'Continue comme ça : la régularité est la clé',
  topExercisesTitle: 'Meilleurs exercices de la semaine',
  cta: 'Voir le rapport complet',
  closing:
    'Continue de te dépasser : chaque entraînement te rapproche de tes objectifs.',
};

const de: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Deine wöchentliche Trainingsübersicht - ${weekStartDate} bis ${weekEndDate}`,
  heading: 'Deine Woche im Rückblick',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Hallo ${userName}, hier ist deine Trainingsübersicht für ${weekStartDate} - ${weekEndDate}.`,
  labelWorkouts: 'Workouts',
  labelVolume: 'Volumen',
  labelNewPRs: 'Neue Rekorde',
  completionRate: (rate) => `${rate}% geschafft`,
  volumeChangeUp: (value) => `+${value}% vs. letzte Woche`,
  volumeChangeDown: (value) => `-${value}% vs. letzte Woche`,
  volumeChangeSame: 'Gleich wie letzte Woche',
  streakBadge: (formattedDays, days) => {
    const noun = plural('de', days, { one: 'Tag', other: 'Tage' });
    return `${formattedDays}-${noun}-Serie!`;
  },
  streakSubtext: 'Bleib dran - Beständigkeit ist der Schlüssel',
  topExercisesTitle: 'Top-Übungen dieser Woche',
  cta: 'Vollständigen Bericht ansehen',
  closing: 'Bleib dran - jedes Workout bringt dich deinen Zielen näher.',
};

const it: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Il tuo riepilogo settimanale di allenamento - dal ${weekStartDate} al ${weekEndDate}`,
  heading: 'La tua settimana in sintesi',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Ciao ${userName}, ecco il tuo riepilogo di allenamento dal ${weekStartDate} al ${weekEndDate}.`,
  labelWorkouts: 'Allenamenti',
  labelVolume: 'Volume',
  labelNewPRs: 'Nuovi record',
  completionRate: (rate) => `${rate}% completato`,
  volumeChangeUp: (value) => `+${value}% rispetto alla scorsa settimana`,
  volumeChangeDown: (value) => `-${value}% rispetto alla scorsa settimana`,
  volumeChangeSame: 'Come la scorsa settimana',
  streakBadge: (formattedDays, days) => {
    const noun = plural('it', days, { one: 'giorno', other: 'giorni' });
    return `Serie di ${formattedDays} ${noun}!`;
  },
  streakSubtext: 'Continua così: la costanza è la chiave',
  topExercisesTitle: 'Migliori esercizi della settimana',
  cta: 'Vedi il report completo',
  closing:
    'Continua a spingere: ogni allenamento ti avvicina ai tuoi obiettivi.',
};

const pt: WeeklyProgressDigestMessages = {
  preview: (weekStartDate, weekEndDate) =>
    `Seu resumo semanal de treino - de ${weekStartDate} a ${weekEndDate}`,
  heading: 'Sua semana em resumo',
  intro: (userName, weekStartDate, weekEndDate) =>
    `Olá ${userName}, aqui está o seu resumo de treino de ${weekStartDate} a ${weekEndDate}.`,
  labelWorkouts: 'Treinos',
  labelVolume: 'Volume',
  labelNewPRs: 'Novos recordes',
  completionRate: (rate) => `${rate}% concluído`,
  volumeChangeUp: (value) => `+${value}% vs. a semana passada`,
  volumeChangeDown: (value) => `-${value}% vs. a semana passada`,
  volumeChangeSame: 'Igual à semana passada',
  streakBadge: (formattedDays, days) => {
    const noun = plural('pt', days, { one: 'dia', other: 'dias' });
    return `Sequência de ${formattedDays} ${noun}!`;
  },
  streakSubtext: 'Continue assim: a constância é a chave',
  topExercisesTitle: 'Melhores exercícios da semana',
  cta: 'Ver relatório completo',
  closing: 'Continue se esforçando: cada treino aproxima você das suas metas.',
};

export const weeklyProgressDigestMessages: Record<
  Locale,
  WeeklyProgressDigestMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
