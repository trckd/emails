import type { Locale } from '../i18n/locales.js';
import { plural } from '../i18n/format.js';

export interface WeekOneCheckinMessages {
  preview: string;
  heading: string;
  // Active branch (workoutsCompleted > 0)
  activeIntro: (userName: string) => string;
  firstWeekTitle: string;
  workoutsLogged: (count: number) => string;
  encouragementGreat: string;
  encouragementGood: string;
  activeClosing: string;
  // Inactive branch (workoutsCompleted === 0)
  inactiveIntro: (userName: string) => string;
  gettingStartedTitle: string;
  gettingStartedSteps: { title: string }[];
  inactiveClosing: string;
  // CTAs
  ctaActive: string;
  ctaInactive: string;
  // TipBox
  helpTitle: string;
  helpBody: string;
  helpContact: string;
  helpContactSuffix: string;
}

const en: WeekOneCheckinMessages = {
  preview: "How's your first week on Tracked going?",
  heading: 'Week One Check-In',
  activeIntro: (userName) =>
    `Hi ${userName}, you've been on Tracked for a week now and we wanted to check in!`,
  firstWeekTitle: 'Your First Week:',
  workoutsLogged: (count) => {
    const noun = plural('en', count, { one: 'Workout', other: 'Workouts' });
    return `${noun} Logged:`;
  },
  encouragementGreat: "Great start! You're building strong habits.",
  encouragementGood: 'Good progress! Try to aim for 3-4 workouts per week.',
  activeClosing:
    'Consistency is the key to reaching your fitness goals. Keep up the momentum and remember - every workout counts!',
  inactiveIntro: (userName) =>
    `Hi ${userName}, you joined Tracked a week ago, and we noticed you haven't logged your first workout yet.`,
  gettingStartedTitle: 'Getting Started is Easy:',
  gettingStartedSteps: [
    { title: 'Open the app and tap the "+" button' },
    { title: 'Select your exercises or create a custom workout' },
    { title: 'Track your sets, reps, and weight as you go' },
    { title: 'Complete your workout and see your progress!' },
  ],
  inactiveClosing:
    "The hardest part is getting started. Once you log that first workout, you'll be on your way to building lasting fitness habits.",
  ctaActive: 'Continue Tracking',
  ctaInactive: 'Log Your First Workout',
  helpTitle: 'Need Help?',
  helpBody: 'Our team is here to help you get the most out of Tracked.',
  helpContact: 'Contact us',
  helpContactSuffix: ' anytime with questions.',
};

const es: WeekOneCheckinMessages = {
  preview: '¿Qué tal va tu primera semana en Tracked?',
  heading: 'Revisión de la primera semana',
  activeIntro: (userName) =>
    `Hola ${userName}, ya llevas una semana en Tracked y queríamos ver cómo te va.`,
  firstWeekTitle: 'Tu primera semana:',
  workoutsLogged: (count) => {
    const noun = plural('es', count, {
      one: 'entrenamiento registrado',
      other: 'entrenamientos registrados',
    });
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)}:`;
  },
  encouragementGreat: '¡Buen comienzo! Estás creando hábitos sólidos.',
  encouragementGood:
    '¡Buen progreso! Intenta apuntar a 3-4 entrenamientos por semana.',
  activeClosing:
    'La constancia es la clave para alcanzar tus objetivos fitness. Mantén el impulso y recuerda: ¡cada entrenamiento cuenta!',
  inactiveIntro: (userName) =>
    `Hola ${userName}, te uniste a Tracked hace una semana y notamos que aún no has registrado tu primer entrenamiento.`,
  gettingStartedTitle: 'Empezar es fácil:',
  gettingStartedSteps: [
    { title: 'Abre la app y toca el botón "+"' },
    { title: 'Elige tus ejercicios o crea un entrenamiento personalizado' },
    { title: 'Registra tus series, repeticiones y peso sobre la marcha' },
    { title: '¡Completa tu entrenamiento y mira tu progreso!' },
  ],
  inactiveClosing:
    'Lo más difícil es empezar. Una vez que registres ese primer entrenamiento, estarás en camino de crear hábitos fitness duraderos.',
  ctaActive: 'Seguir entrenando',
  ctaInactive: 'Registrar tu primer entrenamiento',
  helpTitle: '¿Necesitas ayuda?',
  helpBody:
    'Nuestro equipo está aquí para ayudarte a sacar el máximo provecho de Tracked.',
  helpContact: 'Contáctanos',
  helpContactSuffix: ' cuando quieras si tienes preguntas.',
};

const fr: WeekOneCheckinMessages = {
  preview: 'Comment se passe ta première semaine sur Tracked ?',
  heading: 'Bilan de la première semaine',
  activeIntro: (userName) =>
    `Salut ${userName}, ça fait une semaine que tu es sur Tracked et nous voulions prendre de tes nouvelles !`,
  firstWeekTitle: 'Ta première semaine :',
  workoutsLogged: (count) => {
    const noun = plural('fr', count, {
      one: 'entraînement enregistré',
      other: 'entraînements enregistrés',
    });
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)} :`;
  },
  encouragementGreat: 'Bon début ! Tu construis de solides habitudes.',
  encouragementGood:
    'Belle progression ! Essaie de viser 3-4 entraînements par semaine.',
  activeClosing:
    'La régularité est la clé pour atteindre tes objectifs fitness. Garde le rythme et souviens-toi : chaque entraînement compte !',
  inactiveIntro: (userName) =>
    `Salut ${userName}, tu as rejoint Tracked il y a une semaine et nous avons remarqué que tu n'as pas encore enregistré ton premier entraînement.`,
  gettingStartedTitle: "Bien démarrer, c'est facile :",
  gettingStartedSteps: [
    { title: 'Ouvre l\'app et appuie sur le bouton "+"' },
    { title: 'Choisis tes exercices ou crée un entraînement personnalisé' },
    { title: 'Enregistre tes séries, répétitions et poids au fur et à mesure' },
    { title: 'Termine ton entraînement et vois ta progression !' },
  ],
  inactiveClosing:
    "Le plus dur, c'est de commencer. Une fois que tu auras enregistré ce premier entraînement, tu seras en route pour bâtir des habitudes fitness durables.",
  ctaActive: "Continuer à m'entraîner",
  ctaInactive: 'Enregistrer mon premier entraînement',
  helpTitle: "Besoin d'aide ?",
  helpBody: "Notre équipe est là pour t'aider à tirer le meilleur de Tracked.",
  helpContact: 'Contacte-nous',
  helpContactSuffix: ' à tout moment si tu as des questions.',
};

const de: WeekOneCheckinMessages = {
  preview: 'Wie läuft deine erste Woche bei Tracked?',
  heading: 'Check-in zur ersten Woche',
  activeIntro: (userName) =>
    `Hallo ${userName}, du bist jetzt seit einer Woche bei Tracked und wir wollten mal nachhören!`,
  firstWeekTitle: 'Deine erste Woche:',
  workoutsLogged: (count) => {
    const noun = plural('de', count, {
      one: 'Workout protokolliert',
      other: 'Workouts protokolliert',
    });
    return `${noun}:`;
  },
  encouragementGreat: 'Toller Start! Du baust dir starke Gewohnheiten auf.',
  encouragementGood:
    'Guter Fortschritt! Versuch, 3-4 Workouts pro Woche anzupeilen.',
  activeClosing:
    'Beständigkeit ist der Schlüssel, um deine Fitnessziele zu erreichen. Halte den Schwung und denk daran - jedes Workout zählt!',
  inactiveIntro: (userName) =>
    `Hallo ${userName}, du bist Tracked vor einer Woche beigetreten und uns ist aufgefallen, dass du dein erstes Workout noch nicht protokolliert hast.`,
  gettingStartedTitle: 'Der Einstieg ist einfach:',
  gettingStartedSteps: [
    { title: 'Öffne die App und tippe auf die Schaltfläche "+"' },
    { title: 'Wähle deine Übungen aus oder erstelle ein eigenes Workout' },
    { title: 'Tracke deine Sätze, Wiederholungen und Gewichte unterwegs' },
    { title: 'Schließe dein Workout ab und sieh deinen Fortschritt!' },
  ],
  inactiveClosing:
    'Das Schwerste ist der Anfang. Sobald du dieses erste Workout protokollierst, bist du auf dem besten Weg, dauerhafte Fitnessgewohnheiten aufzubauen.',
  ctaActive: 'Weiter tracken',
  ctaInactive: 'Erstes Workout protokollieren',
  helpTitle: 'Brauchst du Hilfe?',
  helpBody: 'Unser Team hilft dir, das Beste aus Tracked herauszuholen.',
  helpContact: 'Kontaktiere uns',
  helpContactSuffix: ' jederzeit bei Fragen.',
};

const it: WeekOneCheckinMessages = {
  preview: 'Come sta andando la tua prima settimana su Tracked?',
  heading: 'Check-in della prima settimana',
  activeIntro: (userName) =>
    `Ciao ${userName}, è passata una settimana da quando sei su Tracked e volevamo sapere come va!`,
  firstWeekTitle: 'La tua prima settimana:',
  workoutsLogged: (count) => {
    const noun = plural('it', count, {
      one: 'allenamento registrato',
      other: 'allenamenti registrati',
    });
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)}:`;
  },
  encouragementGreat: 'Ottimo inizio! Stai costruendo abitudini solide.',
  encouragementGood:
    'Buoni progressi! Cerca di puntare a 3-4 allenamenti a settimana.',
  activeClosing:
    'La costanza è la chiave per raggiungere i tuoi obiettivi fitness. Mantieni lo slancio e ricorda: ogni allenamento conta!',
  inactiveIntro: (userName) =>
    `Ciao ${userName}, ti sei iscritto a Tracked una settimana fa e abbiamo notato che non hai ancora registrato il tuo primo allenamento.`,
  gettingStartedTitle: 'Iniziare è facile:',
  gettingStartedSteps: [
    { title: 'Apri l\'app e tocca il pulsante "+"' },
    { title: 'Scegli i tuoi esercizi o crea un allenamento personalizzato' },
    { title: 'Registra serie, ripetizioni e peso man mano' },
    { title: 'Completa il tuo allenamento e guarda i tuoi progressi!' },
  ],
  inactiveClosing:
    'La parte più difficile è iniziare. Una volta registrato quel primo allenamento, sarai sulla buona strada per costruire abitudini fitness durature.',
  ctaActive: 'Continua ad allenarti',
  ctaInactive: 'Registra il tuo primo allenamento',
  helpTitle: 'Hai bisogno di aiuto?',
  helpBody: 'Il nostro team è qui per aiutarti a sfruttare al meglio Tracked.',
  helpContact: 'Contattaci',
  helpContactSuffix: ' in qualsiasi momento per qualsiasi domanda.',
};

const pt: WeekOneCheckinMessages = {
  preview: 'Como está sendo a sua primeira semana no Tracked?',
  heading: 'Check-in da primeira semana',
  activeIntro: (userName) =>
    `Olá ${userName}, você já está há uma semana no Tracked e quisemos saber como vai!`,
  firstWeekTitle: 'Sua primeira semana:',
  workoutsLogged: (count) => {
    const noun = plural('pt', count, {
      one: 'treino registrado',
      other: 'treinos registrados',
    });
    return `${noun.charAt(0).toUpperCase()}${noun.slice(1)}:`;
  },
  encouragementGreat: 'Ótimo começo! Você está criando hábitos sólidos.',
  encouragementGood: 'Bom progresso! Tente mirar em 3-4 treinos por semana.',
  activeClosing:
    'A constância é a chave para alcançar suas metas fitness. Mantenha o ritmo e lembre-se: cada treino conta!',
  inactiveIntro: (userName) =>
    `Olá ${userName}, você entrou no Tracked há uma semana e percebemos que ainda não registrou o seu primeiro treino.`,
  gettingStartedTitle: 'Começar é fácil:',
  gettingStartedSteps: [
    { title: 'Abra o app e toque no botão "+"' },
    { title: 'Escolha seus exercícios ou crie um treino personalizado' },
    { title: 'Registre suas séries, repetições e peso conforme avança' },
    { title: 'Conclua seu treino e veja o seu progresso!' },
  ],
  inactiveClosing:
    'A parte mais difícil é começar. Assim que você registrar esse primeiro treino, estará no caminho para criar hábitos fitness duradouros.',
  ctaActive: 'Continuar treinando',
  ctaInactive: 'Registrar seu primeiro treino',
  helpTitle: 'Precisa de ajuda?',
  helpBody:
    'Nossa equipe está aqui para ajudar você a aproveitar o Tracked ao máximo.',
  helpContact: 'Fale com a gente',
  helpContactSuffix: ' quando quiser, se tiver dúvidas.',
};

export const weekOneCheckinMessages: Record<Locale, WeekOneCheckinMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
