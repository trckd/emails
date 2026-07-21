import type { Locale } from '../i18n/locales.js';

export interface ClientProgressReportMessages {
  preview: (coachName: string) => string;
  heading: string;
  intro: (clientName: string, coachName: string, periodLabel: string) => string;
  goalFocusTitle: string;
  insightsTitle: string;
  labelWorkouts: string;
  labelSets: string;
  labelNewPRs: string;
  prHighlightsTitle: string;
  bodyweightTitle: string;
  bodyweightChangeLabel: string;
  bodyweightCurrentLabel: string;
  nutritionTitle: string;
  nutritionAdherenceLabel: string;
  nutritionDaysLoggedLabel: string;
  checkInsTitle: string;
  checkInsCompletedLabel: string;
  cta: string;
  closing: (coachName: string) => string;
}

const en: ClientProgressReportMessages = {
  preview: (coachName) => `Your progress report from ${coachName} is ready.`,
  heading: 'Your progress report',
  intro: (clientName, coachName, periodLabel) =>
    `Hi ${clientName}, here's your recap from ${coachName} for ${periodLabel}.`,
  goalFocusTitle: 'Your focus',
  insightsTitle: 'Progress highlights',
  labelWorkouts: 'Workouts',
  labelSets: 'Sets',
  labelNewPRs: 'New PRs',
  prHighlightsTitle: 'PR highlights',
  bodyweightTitle: 'Bodyweight',
  bodyweightChangeLabel: 'Change',
  bodyweightCurrentLabel: 'Current',
  nutritionTitle: 'Nutrition',
  nutritionAdherenceLabel: 'Calorie adherence',
  nutritionDaysLoggedLabel: 'Days logged',
  checkInsTitle: 'Check-ins',
  checkInsCompletedLabel: 'Completed',
  cta: 'View full report',
  closing: (coachName) =>
    `Keep it up — ${coachName} sees the work you're putting in.`,
};

const es: ClientProgressReportMessages = {
  preview: (coachName) => `Tu informe de progreso de ${coachName} está listo.`,
  heading: 'Tu informe de progreso',
  intro: (clientName, coachName, periodLabel) =>
    `Hola ${clientName}, aquí tienes tu resumen de ${coachName} para ${periodLabel}.`,
  goalFocusTitle: 'Tu enfoque',
  insightsTitle: 'Aspectos destacados',
  labelWorkouts: 'Entrenamientos',
  labelSets: 'Series',
  labelNewPRs: 'Nuevos PRs',
  prHighlightsTitle: 'PRs destacados',
  bodyweightTitle: 'Peso corporal',
  bodyweightChangeLabel: 'Cambio',
  bodyweightCurrentLabel: 'Actual',
  nutritionTitle: 'Nutrición',
  nutritionAdherenceLabel: 'Adherencia calórica',
  nutritionDaysLoggedLabel: 'Días registrados',
  checkInsTitle: 'Check-ins',
  checkInsCompletedLabel: 'Completados',
  cta: 'Ver informe completo',
  closing: (coachName) =>
    `Sigue así — ${coachName} ve el esfuerzo que estás poniendo.`,
};

const fr: ClientProgressReportMessages = {
  preview: (coachName) =>
    `Ton rapport de progression de ${coachName} est prêt.`,
  heading: 'Ton rapport de progression',
  intro: (clientName, coachName, periodLabel) =>
    `Salut ${clientName}, voici ton récap de ${coachName} pour ${periodLabel}.`,
  goalFocusTitle: 'Ton objectif',
  insightsTitle: 'Points forts',
  labelWorkouts: 'Entraînements',
  labelSets: 'Séries',
  labelNewPRs: 'Nouveaux PRs',
  prHighlightsTitle: 'PRs marquants',
  bodyweightTitle: 'Poids corporel',
  bodyweightChangeLabel: 'Évolution',
  bodyweightCurrentLabel: 'Actuel',
  nutritionTitle: 'Nutrition',
  nutritionAdherenceLabel: 'Adhérence calorique',
  nutritionDaysLoggedLabel: 'Jours enregistrés',
  checkInsTitle: 'Check-ins',
  checkInsCompletedLabel: 'Complétés',
  cta: 'Voir le rapport complet',
  closing: (coachName) =>
    `Continue comme ça — ${coachName} voit le travail que tu fournis.`,
};

const de: ClientProgressReportMessages = {
  preview: (coachName) =>
    `Dein Fortschrittsbericht von ${coachName} ist fertig.`,
  heading: 'Dein Fortschrittsbericht',
  intro: (clientName, coachName, periodLabel) =>
    `Hi ${clientName}, hier ist deine Zusammenfassung von ${coachName} für ${periodLabel}.`,
  goalFocusTitle: 'Dein Fokus',
  insightsTitle: 'Fortschritts-Highlights',
  labelWorkouts: 'Workouts',
  labelSets: 'Sätze',
  labelNewPRs: 'Neue PRs',
  prHighlightsTitle: 'PR-Highlights',
  bodyweightTitle: 'Körpergewicht',
  bodyweightChangeLabel: 'Veränderung',
  bodyweightCurrentLabel: 'Aktuell',
  nutritionTitle: 'Ernährung',
  nutritionAdherenceLabel: 'Kalorien-Adhärenz',
  nutritionDaysLoggedLabel: 'Erfasste Tage',
  checkInsTitle: 'Check-ins',
  checkInsCompletedLabel: 'Abgeschlossen',
  cta: 'Vollständigen Bericht ansehen',
  closing: (coachName) =>
    `Weiter so — ${coachName} sieht, wie viel Arbeit du reinsteckst.`,
};

const it: ClientProgressReportMessages = {
  preview: (coachName) =>
    `Il tuo report dei progressi da ${coachName} è pronto.`,
  heading: 'Il tuo report dei progressi',
  intro: (clientName, coachName, periodLabel) =>
    `Ciao ${clientName}, ecco il tuo riepilogo da ${coachName} per ${periodLabel}.`,
  goalFocusTitle: 'Il tuo obiettivo',
  insightsTitle: 'Progressi in evidenza',
  labelWorkouts: 'Allenamenti',
  labelSets: 'Serie',
  labelNewPRs: 'Nuovi PR',
  prHighlightsTitle: 'PR in evidenza',
  bodyweightTitle: 'Peso corporeo',
  bodyweightChangeLabel: 'Variazione',
  bodyweightCurrentLabel: 'Attuale',
  nutritionTitle: 'Nutrizione',
  nutritionAdherenceLabel: 'Aderenza calorica',
  nutritionDaysLoggedLabel: 'Giorni registrati',
  checkInsTitle: 'Check-in',
  checkInsCompletedLabel: 'Completati',
  cta: 'Vedi il report completo',
  closing: (coachName) =>
    `Continua così — ${coachName} vede l'impegno che ci stai mettendo.`,
};

const pt: ClientProgressReportMessages = {
  preview: (coachName) =>
    `Seu relatório de progresso de ${coachName} está pronto.`,
  heading: 'Seu relatório de progresso',
  intro: (clientName, coachName, periodLabel) =>
    `Olá ${clientName}, aqui está seu resumo de ${coachName} para ${periodLabel}.`,
  goalFocusTitle: 'Seu foco',
  insightsTitle: 'Destaques do progresso',
  labelWorkouts: 'Treinos',
  labelSets: 'Séries',
  labelNewPRs: 'Novos PRs',
  prHighlightsTitle: 'PRs em destaque',
  bodyweightTitle: 'Peso corporal',
  bodyweightChangeLabel: 'Mudança',
  bodyweightCurrentLabel: 'Atual',
  nutritionTitle: 'Nutrição',
  nutritionAdherenceLabel: 'Aderência calórica',
  nutritionDaysLoggedLabel: 'Dias registrados',
  checkInsTitle: 'Check-ins',
  checkInsCompletedLabel: 'Concluídos',
  cta: 'Ver relatório completo',
  closing: (coachName) =>
    `Continue assim — ${coachName} vê o esforço que você está fazendo.`,
};

export const clientProgressReportMessages: Record<
  Locale,
  ClientProgressReportMessages
> = { en, es, fr, de, it, pt };
