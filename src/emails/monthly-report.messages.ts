import type { Locale } from '../i18n/locales.js';

export interface MonthlyReportMessages {
  /** Fallback shown when a metric value is missing. */
  notAvailable: string;
  preview: (monthName: string) => string;
  reportTitle: (monthName: string) => string;
  activityOverview: string;
  avgDailySteps: string;
  bodyweightTrends: string;
  avgBodyweight: string;
  /** Wraps an already-formatted weight number, e.g. `175.3 lbs`. */
  weightWithUnit: (formattedWeight: string) => string;
  monthlyChange: string;
  /** Wraps an already-formatted, signed change number, e.g. `-2.1 lbs`. */
  changeWithUnit: (formattedChange: string) => string;
  trainingSummary: string;
  sessionsPerWeek: string;
  totalSessions: string;
  totalSetsTracked: string;
  topMuscleGroups: string;
  /** Numbered muscle-group row label, e.g. `1. Chest`. */
  muscleGroupLabel: (rank: number, name: string) => string;
  /** Wraps an already-formatted set count, e.g. `89 sets`. */
  setsValue: (formattedSets: string) => string;
  sessionInsights: string;
  avgReadinessEnergy: string;
  avgReadinessMood: string;
  avgSessionSatisfaction: string;
  avgSessionProgress: string;
  /** Wraps an already-formatted rating, e.g. `7.8/5`. */
  ratingValue: (formattedRating: string) => string;
  managePreferences: string;
}

const en: MonthlyReportMessages = {
  notAvailable: 'N/A',
  preview: (monthName) =>
    `Your ${monthName} Training Report - Your monthly fitness journey at a glance`,
  reportTitle: (monthName) => `Your ${monthName} Training Report`,
  activityOverview: 'Activity Overview',
  avgDailySteps: 'Average Daily Steps',
  bodyweightTrends: 'Bodyweight Trends',
  avgBodyweight: 'Average Bodyweight',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lbs`,
  monthlyChange: 'Monthly Change',
  changeWithUnit: (formattedChange) => `${formattedChange} lbs`,
  trainingSummary: 'Training Summary',
  sessionsPerWeek: 'Sessions Per Week',
  totalSessions: 'Total Sessions',
  totalSetsTracked: 'Total Sets Tracked',
  topMuscleGroups: 'Top 5 Prioritized Muscle Groups',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} sets`,
  sessionInsights: 'Session Insights',
  avgReadinessEnergy: 'Avg Readiness Energy',
  avgReadinessMood: 'Avg Readiness Mood',
  avgSessionSatisfaction: 'Avg Session Satisfaction',
  avgSessionProgress: 'Avg Session Progress',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    'You can manage your email preferences in the Tracked app settings.',
};

const es: MonthlyReportMessages = {
  notAvailable: 'N/D',
  preview: (monthName) =>
    `Tu informe de entrenamiento de ${monthName}: tu mes de fitness de un vistazo`,
  reportTitle: (monthName) => `Tu informe de entrenamiento de ${monthName}`,
  activityOverview: 'Resumen de actividad',
  avgDailySteps: 'Pasos diarios promedio',
  bodyweightTrends: 'Tendencias de peso corporal',
  avgBodyweight: 'Peso corporal promedio',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lb`,
  monthlyChange: 'Cambio mensual',
  changeWithUnit: (formattedChange) => `${formattedChange} lb`,
  trainingSummary: 'Resumen de entrenamiento',
  sessionsPerWeek: 'Sesiones por semana',
  totalSessions: 'Sesiones totales',
  totalSetsTracked: 'Total de series registradas',
  topMuscleGroups: 'Los 5 grupos musculares prioritarios',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} series`,
  sessionInsights: 'Análisis de sesiones',
  avgReadinessEnergy: 'Energía media de preparación',
  avgReadinessMood: 'Ánimo medio de preparación',
  avgSessionSatisfaction: 'Satisfacción media de la sesión',
  avgSessionProgress: 'Progreso medio de la sesión',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    'Puedes gestionar tus preferencias de correo en la configuración de la app de Tracked.',
};

const fr: MonthlyReportMessages = {
  notAvailable: 'N/D',
  preview: (monthName) =>
    `Ton rapport d'entraînement de ${monthName} — ton mois de fitness en un coup d'œil`,
  reportTitle: (monthName) => `Ton rapport d'entraînement de ${monthName}`,
  activityOverview: "Aperçu de l'activité",
  avgDailySteps: 'Pas quotidiens moyens',
  bodyweightTrends: 'Tendances du poids corporel',
  avgBodyweight: 'Poids corporel moyen',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lb`,
  monthlyChange: 'Variation mensuelle',
  changeWithUnit: (formattedChange) => `${formattedChange} lb`,
  trainingSummary: "Résumé de l'entraînement",
  sessionsPerWeek: 'Séances par semaine',
  totalSessions: 'Séances totales',
  totalSetsTracked: 'Total des séries enregistrées',
  topMuscleGroups: 'Top 5 des groupes musculaires prioritaires',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} séries`,
  sessionInsights: 'Analyse des séances',
  avgReadinessEnergy: 'Énergie moyenne de préparation',
  avgReadinessMood: 'Humeur moyenne de préparation',
  avgSessionSatisfaction: 'Satisfaction moyenne de la séance',
  avgSessionProgress: 'Progression moyenne de la séance',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    "Tu peux gérer tes préférences d'e-mail dans les paramètres de l'app Tracked.",
};

const de: MonthlyReportMessages = {
  notAvailable: 'k. A.',
  preview: (monthName) =>
    `Dein Trainingsbericht für ${monthName} – dein Fitnessmonat auf einen Blick`,
  reportTitle: (monthName) => `Dein Trainingsbericht für ${monthName}`,
  activityOverview: 'Aktivitätsübersicht',
  avgDailySteps: 'Durchschnittliche Schritte pro Tag',
  bodyweightTrends: 'Körpergewichtstrends',
  avgBodyweight: 'Durchschnittliches Körpergewicht',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lbs`,
  monthlyChange: 'Monatliche Veränderung',
  changeWithUnit: (formattedChange) => `${formattedChange} lbs`,
  trainingSummary: 'Trainingsübersicht',
  sessionsPerWeek: 'Einheiten pro Woche',
  totalSessions: 'Einheiten gesamt',
  totalSetsTracked: 'Erfasste Sätze gesamt',
  topMuscleGroups: 'Top 5 priorisierte Muskelgruppen',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} Sätze`,
  sessionInsights: 'Einblicke in die Einheiten',
  avgReadinessEnergy: 'Ø Bereitschaftsenergie',
  avgReadinessMood: 'Ø Bereitschaftsstimmung',
  avgSessionSatisfaction: 'Ø Zufriedenheit mit der Einheit',
  avgSessionProgress: 'Ø Fortschritt der Einheit',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    'Du kannst deine E-Mail-Einstellungen in den Einstellungen der Tracked-App verwalten.',
};

const it: MonthlyReportMessages = {
  notAvailable: 'N/D',
  preview: (monthName) =>
    `Il tuo report di allenamento di ${monthName}: il tuo mese di fitness in sintesi`,
  reportTitle: (monthName) => `Il tuo report di allenamento di ${monthName}`,
  activityOverview: "Panoramica dell'attività",
  avgDailySteps: 'Passi giornalieri medi',
  bodyweightTrends: 'Andamento del peso corporeo',
  avgBodyweight: 'Peso corporeo medio',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lb`,
  monthlyChange: 'Variazione mensile',
  changeWithUnit: (formattedChange) => `${formattedChange} lb`,
  trainingSummary: "Riepilogo dell'allenamento",
  sessionsPerWeek: 'Sessioni a settimana',
  totalSessions: 'Sessioni totali',
  totalSetsTracked: 'Totale serie registrate',
  topMuscleGroups: 'I 5 gruppi muscolari prioritari',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} serie`,
  sessionInsights: 'Approfondimenti sulle sessioni',
  avgReadinessEnergy: 'Energia media di prontezza',
  avgReadinessMood: 'Umore medio di prontezza',
  avgSessionSatisfaction: 'Soddisfazione media della sessione',
  avgSessionProgress: 'Progresso medio della sessione',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    "Puoi gestire le tue preferenze email nelle impostazioni dell'app Tracked.",
};

const pt: MonthlyReportMessages = {
  notAvailable: 'N/D',
  preview: (monthName) =>
    `Seu relatório de treino de ${monthName} — seu mês de fitness em resumo`,
  reportTitle: (monthName) => `Seu relatório de treino de ${monthName}`,
  activityOverview: 'Visão geral da atividade',
  avgDailySteps: 'Média de passos diários',
  bodyweightTrends: 'Tendências de peso corporal',
  avgBodyweight: 'Peso corporal médio',
  weightWithUnit: (formattedWeight) => `${formattedWeight} lb`,
  monthlyChange: 'Variação mensal',
  changeWithUnit: (formattedChange) => `${formattedChange} lb`,
  trainingSummary: 'Resumo do treino',
  sessionsPerWeek: 'Sessões por semana',
  totalSessions: 'Total de sessões',
  totalSetsTracked: 'Total de séries registradas',
  topMuscleGroups: 'Top 5 grupos musculares priorizados',
  muscleGroupLabel: (rank, name) => `${rank}. ${name}`,
  setsValue: (formattedSets) => `${formattedSets} séries`,
  sessionInsights: 'Insights das sessões',
  avgReadinessEnergy: 'Energia média de prontidão',
  avgReadinessMood: 'Humor médio de prontidão',
  avgSessionSatisfaction: 'Satisfação média da sessão',
  avgSessionProgress: 'Progresso médio da sessão',
  ratingValue: (formattedRating) => `${formattedRating}/5`,
  managePreferences:
    'Você pode gerenciar suas preferências de e-mail nas configurações do app Tracked.',
};

export const monthlyReportMessages: Record<Locale, MonthlyReportMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
