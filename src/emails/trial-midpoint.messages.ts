import type { Locale } from '../i18n/locales.js';

export interface TrialMidpointMessages {
  preview: (daysRemaining: number) => string;
  heading: string;
  introWithClients: (
    userName: string,
    clientsAdded: number,
    daysRemaining: number,
    trialEndDate: string
  ) => string;
  introNoClients: (userName: string, daysRemaining: number) => string;
  quickStartTitle: string;
  quickStart: string[];
  missedTitle: string;
  missed: { label: string; description: string }[];
  upgradeTitle: string;
  upgradeBody: string;
  cta: string;
  questions: string;
}

const en: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `${daysRemaining} days left in your Tracked trial`,
  heading: "You're Halfway Through Your Trial",
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Hi ${userName}, you've added ${clientsAdded} ${clientsAdded === 1 ? 'client' : 'clients'} to Tracked so far. You have ${daysRemaining} days left to explore everything the platform has to offer before your trial ends on ${trialEndDate}.`,
  introNoClients: (userName, daysRemaining) =>
    `Hi ${userName}, you have ${daysRemaining} days left in your free trial. We noticed you haven't added any clients yet. Let us help you get started.`,
  quickStartTitle: 'Quick Start Guide',
  quickStart: [
    '1. Add your first client from the dashboard',
    '2. Create a workout program or use a template',
    '3. Assign workouts and start tracking progress',
  ],
  missedTitle: 'Features you might have missed:',
  missed: [
    {
      label: 'Workout Templates',
      description: 'Save time with reusable programs',
    },
    {
      label: 'Progress Photos',
      description: 'Track visual client transformations',
    },
    {
      label: 'Check-ins',
      description: 'Weekly accountability with your clients',
    },
    {
      label: 'Analytics',
      description: 'See training trends and client performance',
    },
  ],
  upgradeTitle: 'Ready to upgrade?',
  upgradeBody:
    'Lock in your subscription now and never lose access to your client data. Pricing is based on the number of active clients you manage.',
  cta: 'View Pricing',
  questions:
    'Questions? Join our Discord community to connect with other coaches and get tips on growing your coaching business.',
};

const es: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `Te quedan ${daysRemaining} días de tu prueba gratuita de Tracked`,
  heading: 'Vas por la mitad de tu prueba gratuita',
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Hola ${userName}, hasta ahora has añadido ${clientsAdded} ${clientsAdded === 1 ? 'cliente' : 'clientes'} a Tracked. Te quedan ${daysRemaining} días para explorar todo lo que la plataforma tiene para ofrecer antes de que tu prueba gratuita termine el ${trialEndDate}.`,
  introNoClients: (userName, daysRemaining) =>
    `Hola ${userName}, te quedan ${daysRemaining} días de tu prueba gratuita. Notamos que aún no has añadido ningún cliente. Déjanos ayudarte a empezar.`,
  quickStartTitle: 'Guía de inicio rápido',
  quickStart: [
    '1. Añade tu primer cliente desde el panel',
    '2. Crea un programa de entrenamiento o usa una plantilla',
    '3. Asigna entrenamientos y empieza a seguir el progreso',
  ],
  missedTitle: 'Funciones que quizás no hayas visto:',
  missed: [
    {
      label: 'Plantillas de entrenamiento',
      description: 'Ahorra tiempo con programas reutilizables',
    },
    {
      label: 'Fotos de progreso',
      description: 'Sigue las transformaciones visuales de tus clientes',
    },
    {
      label: 'Check-ins',
      description: 'Constancia semanal con tus clientes',
    },
    {
      label: 'Analíticas',
      description:
        'Observa las tendencias de entrenamiento y el rendimiento de los clientes',
    },
  ],
  upgradeTitle: '¿Listo para mejorar tu plan?',
  upgradeBody:
    'Asegura tu suscripción ahora y no pierdas nunca el acceso a los datos de tus clientes. El precio se basa en el número de clientes activos que gestionas.',
  cta: 'Ver precios',
  questions:
    '¿Preguntas? Únete a nuestra comunidad de Discord para conectar con otros entrenadores y recibir consejos para hacer crecer tu negocio de coaching.',
};

const fr: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `Il te reste ${daysRemaining} jours dans ton essai Tracked`,
  heading: 'Tu es à la moitié de ton essai gratuit',
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Salut ${userName}, tu as ajouté ${clientsAdded} ${clientsAdded <= 1 ? 'client' : 'clients'} à Tracked jusqu'à présent. Il te reste ${daysRemaining} jours pour explorer tout ce que la plateforme a à offrir avant la fin de ton essai gratuit le ${trialEndDate}.`,
  introNoClients: (userName, daysRemaining) =>
    `Salut ${userName}, il te reste ${daysRemaining} jours dans ton essai gratuit. Nous avons remarqué que tu n'as encore ajouté aucun client. Laisse-nous t'aider à démarrer.`,
  quickStartTitle: 'Guide de démarrage rapide',
  quickStart: [
    '1. Ajoute ton premier client depuis le tableau de bord',
    "2. Crée un programme d'entraînement ou utilise un modèle",
    '3. Attribue des entraînements et commence à suivre la progression',
  ],
  missedTitle: 'Des fonctionnalités que tu as peut-être manquées :',
  missed: [
    {
      label: "Modèles d'entraînement",
      description: 'Gagne du temps avec des programmes réutilisables',
    },
    {
      label: 'Photos de progression',
      description: 'Suis les transformations visuelles de tes clients',
    },
    {
      label: 'Check-ins',
      description: 'Un suivi hebdomadaire avec tes clients',
    },
    {
      label: 'Analyses',
      description:
        "Observe les tendances d'entraînement et les performances des clients",
    },
  ],
  upgradeTitle: 'Prêt à passer à la version supérieure ?',
  upgradeBody:
    "Verrouille ton abonnement dès maintenant et ne perds jamais l'accès aux données de tes clients. Le tarif dépend du nombre de clients actifs que tu gères.",
  cta: 'Voir les tarifs',
  questions:
    "Des questions ? Rejoins notre communauté Discord pour échanger avec d'autres coachs et obtenir des conseils pour développer ton activité de coaching.",
};

const de: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `Noch ${daysRemaining} Tage in deiner Tracked-Testphase`,
  heading: 'Du bist in der Mitte deiner Testphase',
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Hallo ${userName}, du hast bisher ${clientsAdded} ${clientsAdded === 1 ? 'Klienten' : 'Klienten'} zu Tracked hinzugefügt. Dir bleiben noch ${daysRemaining} Tage, um alles zu entdecken, was die Plattform zu bieten hat, bevor deine Testphase am ${trialEndDate} endet.`,
  introNoClients: (userName, daysRemaining) =>
    `Hallo ${userName}, dir bleiben noch ${daysRemaining} Tage in deiner kostenlosen Testphase. Uns ist aufgefallen, dass du noch keine Klienten hinzugefügt hast. Lass uns dir beim Einstieg helfen.`,
  quickStartTitle: 'Schnellstart-Anleitung',
  quickStart: [
    '1. Füge deinen ersten Klienten über das Dashboard hinzu',
    '2. Erstelle ein Trainingsprogramm oder nutze eine Vorlage',
    '3. Weise Workouts zu und beginne, den Fortschritt zu verfolgen',
  ],
  missedTitle: 'Funktionen, die du vielleicht verpasst hast:',
  missed: [
    {
      label: 'Trainingsvorlagen',
      description: 'Spare Zeit mit wiederverwendbaren Programmen',
    },
    {
      label: 'Fortschrittsfotos',
      description: 'Verfolge die sichtbaren Veränderungen deiner Klienten',
    },
    {
      label: 'Check-ins',
      description: 'Wöchentliche Verbindlichkeit mit deinen Klienten',
    },
    {
      label: 'Analysen',
      description:
        'Sieh dir Trainingstrends und die Leistung deiner Klienten an',
    },
  ],
  upgradeTitle: 'Bereit zum Upgraden?',
  upgradeBody:
    'Sichere dir jetzt dein Abo und verliere nie den Zugriff auf die Daten deiner Klienten. Der Preis richtet sich nach der Anzahl der aktiven Klienten, die du verwaltest.',
  cta: 'Preise ansehen',
  questions:
    'Fragen? Tritt unserer Discord-Community bei, um dich mit anderen Coaches zu vernetzen und Tipps für das Wachstum deines Coaching-Business zu erhalten.',
};

const it: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `Ti restano ${daysRemaining} giorni della tua prova di Tracked`,
  heading: 'Sei a metà della tua prova gratuita',
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Ciao ${userName}, finora hai aggiunto ${clientsAdded} ${clientsAdded === 1 ? 'cliente' : 'clienti'} a Tracked. Ti restano ${daysRemaining} giorni per esplorare tutto ciò che la piattaforma ha da offrire prima che la tua prova gratuita termini il ${trialEndDate}.`,
  introNoClients: (userName, daysRemaining) =>
    `Ciao ${userName}, ti restano ${daysRemaining} giorni della tua prova gratuita. Abbiamo notato che non hai ancora aggiunto nessun cliente. Lascia che ti aiutiamo a iniziare.`,
  quickStartTitle: 'Guida rapida',
  quickStart: [
    '1. Aggiungi il tuo primo cliente dalla dashboard',
    '2. Crea un programma di allenamento o usa un modello',
    '3. Assegna gli allenamenti e inizia a monitorare i progressi',
  ],
  missedTitle: 'Funzioni che potresti esserti perso:',
  missed: [
    {
      label: 'Modelli di allenamento',
      description: 'Risparmia tempo con programmi riutilizzabili',
    },
    {
      label: 'Foto dei progressi',
      description: 'Monitora le trasformazioni visive dei tuoi clienti',
    },
    {
      label: 'Check-in',
      description: 'Costanza settimanale con i tuoi clienti',
    },
    {
      label: 'Analisi',
      description:
        'Osserva le tendenze di allenamento e le prestazioni dei clienti',
    },
  ],
  upgradeTitle: "Pronto a fare l'upgrade?",
  upgradeBody:
    "Blocca ora il tuo abbonamento e non perdere mai l'accesso ai dati dei tuoi clienti. Il prezzo si basa sul numero di clienti attivi che gestisci.",
  cta: 'Vedi i prezzi',
  questions:
    'Domande? Unisciti alla nostra community Discord per connetterti con altri coach e ricevere consigli su come far crescere la tua attività di coaching.',
};

const pt: TrialMidpointMessages = {
  preview: (daysRemaining) =>
    `Faltam ${daysRemaining} dias no seu teste do Tracked`,
  heading: 'Você está na metade do seu teste gratuito',
  introWithClients: (userName, clientsAdded, daysRemaining, trialEndDate) =>
    `Olá ${userName}, até agora você adicionou ${clientsAdded} ${clientsAdded === 1 ? 'cliente' : 'clientes'} ao Tracked. Faltam ${daysRemaining} dias para você explorar tudo o que a plataforma tem a oferecer antes que seu teste gratuito termine em ${trialEndDate}.`,
  introNoClients: (userName, daysRemaining) =>
    `Olá ${userName}, faltam ${daysRemaining} dias no seu teste gratuito. Percebemos que você ainda não adicionou nenhum cliente. Deixe a gente ajudar você a começar.`,
  quickStartTitle: 'Guia de início rápido',
  quickStart: [
    '1. Adicione seu primeiro cliente pelo painel',
    '2. Crie um programa de treino ou use um modelo',
    '3. Atribua treinos e comece a acompanhar o progresso',
  ],
  missedTitle: 'Recursos que você pode ter perdido:',
  missed: [
    {
      label: 'Modelos de treino',
      description: 'Economize tempo com programas reutilizáveis',
    },
    {
      label: 'Fotos de progresso',
      description: 'Acompanhe as transformações visuais dos seus clientes',
    },
    {
      label: 'Check-ins',
      description: 'Constância semanal com seus clientes',
    },
    {
      label: 'Análises',
      description: 'Veja as tendências de treino e o desempenho dos clientes',
    },
  ],
  upgradeTitle: 'Pronto para fazer upgrade?',
  upgradeBody:
    'Garanta sua assinatura agora e nunca perca o acesso aos dados dos seus clientes. O preço é baseado no número de clientes ativos que você gerencia.',
  cta: 'Ver preços',
  questions:
    'Dúvidas? Entre na nossa comunidade do Discord para se conectar com outros treinadores e receber dicas para fazer seu negócio de coaching crescer.',
};

export const trialMidpointMessages: Record<Locale, TrialMidpointMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
