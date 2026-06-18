import type { Locale } from '../i18n/locales.js';

export interface ClientOnboardedMessages {
  preview: (displayName: string) => string;
  heading: string;
  intro: (coachName: string, displayName: string) => string;

  // Section: Client Details
  clientDetailsTitle: string;
  nameLabel: string;
  emailLabel: string;
  dateOfBirthLabel: string;
  heightLabel: string;
  weightLabel: string;
  timezoneLabel: string;
  unitsLabel: string;
  unitsMetric: string;
  unitsImperial: string;

  // Section: Training Information
  trainingInfoTitle: string;
  currentGoalLabel: string;
  currentWorkoutsLabel: string;
  trainingSplitLabel: string;
  exercisePreferencesLabel: string;
  availableEquipmentLabel: string;
  injuriesLabel: string;
  cardioPerWeekLabel: string;
  dailyStepsLabel: string;

  // Section: Nutrition Information
  nutritionInfoTitle: string;
  foodPreferencesLabel: string;
  allergiesLabel: string;
  dailyCaloriesLabel: string;
  dailyMacrosLabel: string;
  macrosValue: (protein: string, carbs: string, fat: string) => string;
  mealsPerDayLabel: string;
  usualMealsLabel: string;
  preWorkoutMealsLabel: string;

  // Progress Photos
  progressPhotosTitle: string;
  progressPhotosBody: string;

  // Closing
  reviewProfile: string;
  cta: string;
  assignFirstWorkout: string;
}

const en: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} has completed onboarding and is ready to start training`,
  heading: 'New Client Onboarded!',
  intro: (coachName, displayName) =>
    `Hi ${coachName}, ${displayName} has completed their onboarding questionnaire and is ready to start their training journey with you.`,

  clientDetailsTitle: 'Client Details',
  nameLabel: 'Name',
  emailLabel: 'Email',
  dateOfBirthLabel: 'Date of Birth',
  heightLabel: 'Height',
  weightLabel: 'Weight',
  timezoneLabel: 'Timezone',
  unitsLabel: 'Units',
  unitsMetric: 'Metric (kg/cm)',
  unitsImperial: 'Imperial (lbs/ft)',

  trainingInfoTitle: 'Training Information',
  currentGoalLabel: 'Current Goal',
  currentWorkoutsLabel: 'Current Workouts',
  trainingSplitLabel: 'Training Split',
  exercisePreferencesLabel: 'Exercise Preferences',
  availableEquipmentLabel: 'Available Equipment',
  injuriesLabel: 'Injuries/Limitations',
  cardioPerWeekLabel: 'Cardio per Week',
  dailyStepsLabel: 'Daily Steps',

  nutritionInfoTitle: 'Nutrition Information',
  foodPreferencesLabel: 'Food Preferences',
  allergiesLabel: 'Allergies',
  dailyCaloriesLabel: 'Daily Calories',
  dailyMacrosLabel: 'Daily Macros',
  macrosValue: (protein, carbs, fat) =>
    `P: ${protein}g | C: ${carbs}g | F: ${fat}g`,
  mealsPerDayLabel: 'Meals per Day',
  usualMealsLabel: 'Usual Meals',
  preWorkoutMealsLabel: 'Pre-workout Meals',

  progressPhotosTitle: 'Progress Photos',
  progressPhotosBody:
    'This client has uploaded progress photos. View them in their profile.',

  reviewProfile:
    'Review their profile and start building their personalized training program.',
  cta: 'View Client Profile',
  assignFirstWorkout:
    'Assign their first workout or check in to welcome them to your coaching roster.',
};

const es: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} ha completado el registro y está listo para empezar a entrenar`,
  heading: '¡Nuevo cliente incorporado!',
  intro: (coachName, displayName) =>
    `Hola ${coachName}, ${displayName} ha completado su cuestionario de incorporación y está listo para empezar su camino de entrenamiento contigo.`,

  clientDetailsTitle: 'Datos del cliente',
  nameLabel: 'Nombre',
  emailLabel: 'Correo electrónico',
  dateOfBirthLabel: 'Fecha de nacimiento',
  heightLabel: 'Altura',
  weightLabel: 'Peso',
  timezoneLabel: 'Zona horaria',
  unitsLabel: 'Unidades',
  unitsMetric: 'Métrico (kg/cm)',
  unitsImperial: 'Imperial (lb/ft)',

  trainingInfoTitle: 'Información de entrenamiento',
  currentGoalLabel: 'Objetivo actual',
  currentWorkoutsLabel: 'Entrenamientos actuales',
  trainingSplitLabel: 'Rutina de entrenamiento',
  exercisePreferencesLabel: 'Preferencias de ejercicios',
  availableEquipmentLabel: 'Equipamiento disponible',
  injuriesLabel: 'Lesiones/limitaciones',
  cardioPerWeekLabel: 'Cardio por semana',
  dailyStepsLabel: 'Pasos diarios',

  nutritionInfoTitle: 'Información de nutrición',
  foodPreferencesLabel: 'Preferencias alimentarias',
  allergiesLabel: 'Alergias',
  dailyCaloriesLabel: 'Calorías diarias',
  dailyMacrosLabel: 'Macros diarios',
  macrosValue: (protein, carbs, fat) =>
    `P: ${protein} g | C: ${carbs} g | G: ${fat} g`,
  mealsPerDayLabel: 'Comidas por día',
  usualMealsLabel: 'Comidas habituales',
  preWorkoutMealsLabel: 'Comidas antes de entrenar',

  progressPhotosTitle: 'Fotos de progreso',
  progressPhotosBody:
    'Este cliente ha subido fotos de progreso. Míralas en su perfil.',

  reviewProfile:
    'Revisa su perfil y empieza a crear su programa de entrenamiento personalizado.',
  cta: 'Ver perfil del cliente',
  assignFirstWorkout:
    'Asígnale su primer entrenamiento o salúdalo para darle la bienvenida a tu lista de clientes.',
};

const fr: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} a terminé son intégration et est prêt à commencer à s'entraîner`,
  heading: 'Nouveau client intégré !',
  intro: (coachName, displayName) =>
    `Salut ${coachName}, ${displayName} a terminé son questionnaire d'intégration et est prêt à démarrer son parcours d'entraînement avec toi.`,

  clientDetailsTitle: 'Informations du client',
  nameLabel: 'Nom',
  emailLabel: 'E-mail',
  dateOfBirthLabel: 'Date de naissance',
  heightLabel: 'Taille',
  weightLabel: 'Poids',
  timezoneLabel: 'Fuseau horaire',
  unitsLabel: 'Unités',
  unitsMetric: 'Métrique (kg/cm)',
  unitsImperial: 'Impérial (lbs/ft)',

  trainingInfoTitle: "Informations d'entraînement",
  currentGoalLabel: 'Objectif actuel',
  currentWorkoutsLabel: 'Entraînements actuels',
  trainingSplitLabel: "Répartition de l'entraînement",
  exercisePreferencesLabel: "Préférences d'exercices",
  availableEquipmentLabel: 'Équipement disponible',
  injuriesLabel: 'Blessures/limitations',
  cardioPerWeekLabel: 'Cardio par semaine',
  dailyStepsLabel: 'Pas par jour',

  nutritionInfoTitle: 'Informations sur la nutrition',
  foodPreferencesLabel: 'Préférences alimentaires',
  allergiesLabel: 'Allergies',
  dailyCaloriesLabel: 'Calories journalières',
  dailyMacrosLabel: 'Macros journaliers',
  macrosValue: (protein, carbs, fat) =>
    `P : ${protein} g | G : ${carbs} g | L : ${fat} g`,
  mealsPerDayLabel: 'Repas par jour',
  usualMealsLabel: 'Repas habituels',
  preWorkoutMealsLabel: "Repas avant l'entraînement",

  progressPhotosTitle: 'Photos de progression',
  progressPhotosBody:
    'Ce client a téléversé des photos de progression. Consulte-les dans son profil.',

  reviewProfile:
    "Consulte son profil et commence à élaborer son programme d'entraînement personnalisé.",
  cta: 'Voir le profil du client',
  assignFirstWorkout:
    "Attribue-lui son premier entraînement ou prends contact pour l'accueillir dans ta liste de clients.",
};

const de: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} hat das Onboarding abgeschlossen und ist bereit, mit dem Training zu beginnen`,
  heading: 'Neuer Klient eingerichtet!',
  intro: (coachName, displayName) =>
    `Hallo ${coachName}, ${displayName} hat den Onboarding-Fragebogen ausgefüllt und ist bereit, seinen Trainingsweg mit dir zu beginnen.`,

  clientDetailsTitle: 'Klientendaten',
  nameLabel: 'Name',
  emailLabel: 'E-Mail',
  dateOfBirthLabel: 'Geburtsdatum',
  heightLabel: 'Größe',
  weightLabel: 'Gewicht',
  timezoneLabel: 'Zeitzone',
  unitsLabel: 'Einheiten',
  unitsMetric: 'Metrisch (kg/cm)',
  unitsImperial: 'Imperial (lbs/ft)',

  trainingInfoTitle: 'Trainingsinformationen',
  currentGoalLabel: 'Aktuelles Ziel',
  currentWorkoutsLabel: 'Aktuelle Workouts',
  trainingSplitLabel: 'Trainingsaufteilung',
  exercisePreferencesLabel: 'Übungspräferenzen',
  availableEquipmentLabel: 'Verfügbare Ausrüstung',
  injuriesLabel: 'Verletzungen/Einschränkungen',
  cardioPerWeekLabel: 'Cardio pro Woche',
  dailyStepsLabel: 'Schritte pro Tag',

  nutritionInfoTitle: 'Ernährungsinformationen',
  foodPreferencesLabel: 'Ernährungsvorlieben',
  allergiesLabel: 'Allergien',
  dailyCaloriesLabel: 'Tägliche Kalorien',
  dailyMacrosLabel: 'Tägliche Makros',
  macrosValue: (protein, carbs, fat) =>
    `P: ${protein} g | K: ${carbs} g | F: ${fat} g`,
  mealsPerDayLabel: 'Mahlzeiten pro Tag',
  usualMealsLabel: 'Übliche Mahlzeiten',
  preWorkoutMealsLabel: 'Mahlzeiten vor dem Training',

  progressPhotosTitle: 'Fortschrittsfotos',
  progressPhotosBody:
    'Dieser Klient hat Fortschrittsfotos hochgeladen. Sieh sie dir in seinem Profil an.',

  reviewProfile:
    'Sieh dir sein Profil an und beginne mit der Erstellung seines personalisierten Trainingsprogramms.',
  cta: 'Klientenprofil ansehen',
  assignFirstWorkout:
    'Weise ihm sein erstes Workout zu oder melde dich, um ihn in deinem Coaching-Kader willkommen zu heißen.',
};

const it: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} ha completato l'onboarding ed è pronto per iniziare ad allenarsi`,
  heading: 'Nuovo cliente registrato!',
  intro: (coachName, displayName) =>
    `Ciao ${coachName}, ${displayName} ha completato il questionario di onboarding ed è pronto per iniziare il suo percorso di allenamento con te.`,

  clientDetailsTitle: 'Dati del cliente',
  nameLabel: 'Nome',
  emailLabel: 'Email',
  dateOfBirthLabel: 'Data di nascita',
  heightLabel: 'Altezza',
  weightLabel: 'Peso',
  timezoneLabel: 'Fuso orario',
  unitsLabel: 'Unità',
  unitsMetric: 'Metrico (kg/cm)',
  unitsImperial: 'Imperiale (lbs/ft)',

  trainingInfoTitle: "Informazioni sull'allenamento",
  currentGoalLabel: 'Obiettivo attuale',
  currentWorkoutsLabel: 'Allenamenti attuali',
  trainingSplitLabel: "Suddivisione dell'allenamento",
  exercisePreferencesLabel: 'Preferenze di esercizi',
  availableEquipmentLabel: 'Attrezzatura disponibile',
  injuriesLabel: 'Infortuni/limitazioni',
  cardioPerWeekLabel: 'Cardio a settimana',
  dailyStepsLabel: 'Passi al giorno',

  nutritionInfoTitle: 'Informazioni sulla nutrizione',
  foodPreferencesLabel: 'Preferenze alimentari',
  allergiesLabel: 'Allergie',
  dailyCaloriesLabel: 'Calorie giornaliere',
  dailyMacrosLabel: 'Macro giornalieri',
  macrosValue: (protein, carbs, fat) =>
    `P: ${protein} g | C: ${carbs} g | G: ${fat} g`,
  mealsPerDayLabel: 'Pasti al giorno',
  usualMealsLabel: 'Pasti abituali',
  preWorkoutMealsLabel: "Pasti prima dell'allenamento",

  progressPhotosTitle: 'Foto dei progressi',
  progressPhotosBody:
    'Questo cliente ha caricato foto dei progressi. Visualizzale nel suo profilo.',

  reviewProfile:
    'Controlla il suo profilo e inizia a creare il suo programma di allenamento personalizzato.',
  cta: 'Visualizza il profilo del cliente',
  assignFirstWorkout:
    'Assegnagli il suo primo allenamento o contattalo per dargli il benvenuto nella tua lista di clienti.',
};

const pt: ClientOnboardedMessages = {
  preview: (displayName) =>
    `${displayName} concluiu o onboarding e está pronto para começar a treinar`,
  heading: 'Novo cliente integrado!',
  intro: (coachName, displayName) =>
    `Olá ${coachName}, ${displayName} concluiu o questionário de integração e está pronto para começar a jornada de treino com você.`,

  clientDetailsTitle: 'Dados do cliente',
  nameLabel: 'Nome',
  emailLabel: 'E-mail',
  dateOfBirthLabel: 'Data de nascimento',
  heightLabel: 'Altura',
  weightLabel: 'Peso',
  timezoneLabel: 'Fuso horário',
  unitsLabel: 'Unidades',
  unitsMetric: 'Métrico (kg/cm)',
  unitsImperial: 'Imperial (lbs/ft)',

  trainingInfoTitle: 'Informações de treino',
  currentGoalLabel: 'Meta atual',
  currentWorkoutsLabel: 'Treinos atuais',
  trainingSplitLabel: 'Divisão de treino',
  exercisePreferencesLabel: 'Preferências de exercícios',
  availableEquipmentLabel: 'Equipamento disponível',
  injuriesLabel: 'Lesões/limitações',
  cardioPerWeekLabel: 'Cardio por semana',
  dailyStepsLabel: 'Passos por dia',

  nutritionInfoTitle: 'Informações de nutrição',
  foodPreferencesLabel: 'Preferências alimentares',
  allergiesLabel: 'Alergias',
  dailyCaloriesLabel: 'Calorias diárias',
  dailyMacrosLabel: 'Macros diários',
  macrosValue: (protein, carbs, fat) =>
    `P: ${protein} g | C: ${carbs} g | G: ${fat} g`,
  mealsPerDayLabel: 'Refeições por dia',
  usualMealsLabel: 'Refeições habituais',
  preWorkoutMealsLabel: 'Refeições antes do treino',

  progressPhotosTitle: 'Fotos de progresso',
  progressPhotosBody:
    'Este cliente enviou fotos de progresso. Veja-as no perfil dele.',

  reviewProfile:
    'Revise o perfil dele e comece a montar o programa de treino personalizado.',
  cta: 'Ver perfil do cliente',
  assignFirstWorkout:
    'Atribua o primeiro treino ou entre em contato para dar as boas-vindas à sua lista de clientes.',
};

export const clientOnboardedMessages: Record<Locale, ClientOnboardedMessages> =
  {
    en,
    es,
    fr,
    de,
    it,
    pt,
  };
