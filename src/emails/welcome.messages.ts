import type { Locale } from '../i18n/locales.js';

export interface WelcomeMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  cta: string;
  foundersHeading: string;
  foundersMessage: string;
  foundersImageAlt: string;
}

const en: WelcomeMessages = {
  preview: "Welcome to Tracked - Let's start your fitness journey!",
  heading: 'Welcome to Tracked!',
  intro: (userName) =>
    `Hi ${userName}, we're excited to have you join our community. Tracked is here to help you achieve your training goals with powerful tracking tools.`,
  featuresTitle: 'What you can do with Tracked:',
  features: [
    {
      title: 'Track Workouts',
      description:
        'Log your exercises, sets, and reps with the best tracking tools on the market.',
    },
    {
      title: 'Monitor Progress',
      description: 'Visualize your strength gains and workout history.',
    },
    {
      title: 'Stay Accountable',
      description: 'Share your journey with the community.',
    },
  ],
  cta: 'Get Tracking',
  foundersHeading: 'A Message from the Founders',
  foundersMessage:
    "We started Tracked because we believe everyone deserves access to world-class training tools. As athletes ourselves, we recognize the importance tracking has on your training. We genuinely appreciate the support, and we're committed to building the best possible experience for you. With gratitude, Keenan & Jackson",
  foundersImageAlt: 'Founders of Tracked',
};

const es: WelcomeMessages = {
  preview: 'Bienvenido a Tracked: ¡comencemos tu camino fitness!',
  heading: '¡Bienvenido a Tracked!',
  intro: (userName) =>
    `Hola ${userName}, nos alegra mucho que te unas a nuestra comunidad. Tracked está aquí para ayudarte a alcanzar tus objetivos de entrenamiento con las mejores herramientas de seguimiento.`,
  featuresTitle: 'Lo que puedes hacer con Tracked:',
  features: [
    {
      title: 'Registra tus entrenamientos',
      description:
        'Registra tus ejercicios, series y repeticiones con las mejores herramientas de seguimiento del mercado.',
    },
    {
      title: 'Controla tu progreso',
      description:
        'Visualiza tus ganancias de fuerza y tu historial de entrenamientos.',
    },
    {
      title: 'Mantén la constancia',
      description: 'Comparte tu camino con la comunidad.',
    },
  ],
  cta: 'Empezar a entrenar',
  foundersHeading: 'Un mensaje de los fundadores',
  foundersMessage:
    'Creamos Tracked porque creemos que todos merecen acceso a herramientas de entrenamiento de primer nivel. Como atletas, sabemos lo importante que es el seguimiento para tu entrenamiento. Agradecemos de verdad tu apoyo y estamos comprometidos a ofrecerte la mejor experiencia posible. Con gratitud, Keenan y Jackson',
  foundersImageAlt: 'Fundadores de Tracked',
};

const fr: WelcomeMessages = {
  preview: 'Bienvenue sur Tracked — commençons ton parcours fitness !',
  heading: 'Bienvenue sur Tracked !',
  intro: (userName) =>
    `Salut ${userName}, nous sommes ravis de t'accueillir dans notre communauté. Tracked est là pour t'aider à atteindre tes objectifs d'entraînement grâce à des outils de suivi puissants.`,
  featuresTitle: 'Ce que tu peux faire avec Tracked :',
  features: [
    {
      title: 'Suis tes entraînements',
      description:
        'Enregistre tes exercices, séries et répétitions avec les meilleurs outils de suivi du marché.',
    },
    {
      title: 'Suis ta progression',
      description:
        "Visualise tes gains de force et l'historique de tes entraînements.",
    },
    {
      title: 'Reste régulier',
      description: 'Partage ton parcours avec la communauté.',
    },
  ],
  cta: "Commencer à m'entraîner",
  foundersHeading: 'Un message des fondateurs',
  foundersMessage:
    "Nous avons créé Tracked parce que nous pensons que tout le monde mérite d'accéder à des outils d'entraînement de classe mondiale. En tant qu'athlètes, nous savons à quel point le suivi est important pour ton entraînement. Nous te remercions sincèrement de ton soutien et nous nous engageons à t'offrir la meilleure expérience possible. Avec gratitude, Keenan et Jackson",
  foundersImageAlt: 'Les fondateurs de Tracked',
};

const de: WelcomeMessages = {
  preview: 'Willkommen bei Tracked – starten wir deine Fitnessreise!',
  heading: 'Willkommen bei Tracked!',
  intro: (userName) =>
    `Hallo ${userName}, wir freuen uns sehr, dass du Teil unserer Community wirst. Tracked hilft dir, deine Trainingsziele mit leistungsstarken Tracking-Tools zu erreichen.`,
  featuresTitle: 'Das kannst du mit Tracked machen:',
  features: [
    {
      title: 'Workouts tracken',
      description:
        'Protokolliere deine Übungen, Sätze und Wiederholungen mit den besten Tracking-Tools auf dem Markt.',
    },
    {
      title: 'Fortschritt verfolgen',
      description:
        'Visualisiere deine Kraftzuwächse und deinen Trainingsverlauf.',
    },
    {
      title: 'Dranbleiben',
      description: 'Teile deinen Weg mit der Community.',
    },
  ],
  cta: "Los geht's",
  foundersHeading: 'Eine Nachricht von den Gründern',
  foundersMessage:
    'Wir haben Tracked gegründet, weil wir glauben, dass jeder Zugang zu erstklassigen Trainingstools verdient. Als Sportler wissen wir, wie wichtig Tracking für dein Training ist. Wir schätzen deine Unterstützung wirklich sehr und sind bestrebt, dir das bestmögliche Erlebnis zu bieten. Mit Dankbarkeit, Keenan & Jackson',
  foundersImageAlt: 'Die Gründer von Tracked',
};

const it: WelcomeMessages = {
  preview: 'Benvenuto su Tracked: iniziamo il tuo percorso fitness!',
  heading: 'Benvenuto su Tracked!',
  intro: (userName) =>
    `Ciao ${userName}, siamo felicissimi di averti nella nostra community. Tracked è qui per aiutarti a raggiungere i tuoi obiettivi di allenamento con i migliori strumenti di monitoraggio.`,
  featuresTitle: 'Cosa puoi fare con Tracked:',
  features: [
    {
      title: 'Monitora gli allenamenti',
      description:
        'Registra esercizi, serie e ripetizioni con i migliori strumenti di monitoraggio sul mercato.',
    },
    {
      title: 'Monitora i progressi',
      description:
        'Visualizza i tuoi progressi di forza e lo storico degli allenamenti.',
    },
    {
      title: 'Resta costante',
      description: 'Condividi il tuo percorso con la community.',
    },
  ],
  cta: 'Inizia ad allenarti',
  foundersHeading: 'Un messaggio dai fondatori',
  foundersMessage:
    "Abbiamo creato Tracked perché crediamo che tutti meritino l'accesso a strumenti di allenamento di livello mondiale. Da atleti, sappiamo quanto sia importante il monitoraggio per il tuo allenamento. Ti ringraziamo di cuore per il supporto e ci impegniamo a offrirti la migliore esperienza possibile. Con gratitudine, Keenan e Jackson",
  foundersImageAlt: 'I fondatori di Tracked',
};

const pt: WelcomeMessages = {
  preview: 'Bem-vindo ao Tracked: vamos começar sua jornada fitness!',
  heading: 'Bem-vindo ao Tracked!',
  intro: (userName) =>
    `Olá ${userName}, estamos muito felizes em ter você na nossa comunidade. O Tracked está aqui para ajudar você a alcançar suas metas de treino com as melhores ferramentas de acompanhamento.`,
  featuresTitle: 'O que você pode fazer com o Tracked:',
  features: [
    {
      title: 'Acompanhe seus treinos',
      description:
        'Registre seus exercícios, séries e repetições com as melhores ferramentas de acompanhamento do mercado.',
    },
    {
      title: 'Monitore seu progresso',
      description:
        'Visualize seus ganhos de força e o histórico dos seus treinos.',
    },
    {
      title: 'Mantenha a constância',
      description: 'Compartilhe sua jornada com a comunidade.',
    },
  ],
  cta: 'Começar a treinar',
  foundersHeading: 'Uma mensagem dos fundadores',
  foundersMessage:
    'Criamos o Tracked porque acreditamos que todos merecem acesso a ferramentas de treino de classe mundial. Como atletas, sabemos o quanto o acompanhamento é importante para o seu treino. Agradecemos muito o seu apoio e estamos comprometidos em oferecer a melhor experiência possível para você. Com gratidão, Keenan e Jackson',
  foundersImageAlt: 'Fundadores do Tracked',
};

export const welcomeMessages: Record<Locale, WelcomeMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
