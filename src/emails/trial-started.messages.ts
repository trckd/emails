import type { Locale } from '../i18n/locales.js';

export interface TrialStartedMessages {
  preview: string;
  heading: string;
  intro: (
    userName: string,
    daysRemaining: number,
    trialEndDate: string
  ) => string;
  featuresTitle: string;
  features: string[];
  getStarted: string;
  cta: string;
  help: string;
}

const en: TrialStartedMessages = {
  preview: 'Welcome to your Tracked coaching trial',
  heading: 'Welcome to Your Free Trial',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Hi ${userName}, your ${daysRemaining}-day free trial of Tracked has started. You have until ${trialEndDate} to explore everything the platform has to offer.`,
  featuresTitle: "What's included in your trial:",
  features: [
    'Unlimited client management (up to 500 clients)',
    'Custom workout programming and templates',
    'Client progress tracking and analytics',
    'In-app messaging with clients',
    'Full access to the coaching dashboard',
  ],
  getStarted:
    'Ready to get started? Head to your dashboard to add your first clients and start building your coaching business.',
  cta: 'Go to Dashboard',
  help: 'If you have any questions or need help getting set up, our team is here for you. Join our Discord community to connect with other coaches.',
};

const es: TrialStartedMessages = {
  preview: 'Te damos la bienvenida a tu prueba gratuita de coaching de Tracked',
  heading: 'Te damos la bienvenida a tu prueba gratuita',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Hola ${userName}, tu prueba gratuita de ${daysRemaining} días de Tracked ha comenzado. Tienes hasta el ${trialEndDate} para explorar todo lo que la plataforma tiene para ofrecer.`,
  featuresTitle: 'Lo que incluye tu prueba gratuita:',
  features: [
    'Gestión ilimitada de clientes (hasta 500 clientes)',
    'Programación de entrenamientos y plantillas personalizadas',
    'Seguimiento del progreso de los clientes y analíticas',
    'Mensajería con los clientes dentro de la app',
    'Acceso completo al panel de coaching',
  ],
  getStarted:
    '¿Listo para empezar? Ve a tu panel para añadir tus primeros clientes y empezar a construir tu negocio de coaching.',
  cta: 'Ir al panel',
  help: 'Si tienes alguna pregunta o necesitas ayuda con la configuración, nuestro equipo está aquí para ti. Únete a nuestra comunidad de Discord para conectar con otros entrenadores.',
};

const fr: TrialStartedMessages = {
  preview: 'Bienvenue dans ton essai gratuit de coaching Tracked',
  heading: 'Bienvenue dans ton essai gratuit',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Salut ${userName}, ton essai gratuit de ${daysRemaining} jours de Tracked a commencé. Tu as jusqu'au ${trialEndDate} pour explorer tout ce que la plateforme a à offrir.`,
  featuresTitle: 'Ce qui est inclus dans ton essai gratuit :',
  features: [
    "Gestion illimitée des clients (jusqu'à 500 clients)",
    "Programmation d'entraînements et modèles personnalisés",
    'Suivi de la progression des clients et analyses',
    "Messagerie avec les clients dans l'application",
    'Accès complet au tableau de bord de coaching',
  ],
  getStarted:
    'Prêt à te lancer ? Rends-toi sur ton tableau de bord pour ajouter tes premiers clients et commencer à développer ton activité de coaching.',
  cta: 'Accéder au tableau de bord',
  help: "Si tu as des questions ou besoin d'aide pour la configuration, notre équipe est là pour toi. Rejoins notre communauté Discord pour échanger avec d'autres coachs.",
};

const de: TrialStartedMessages = {
  preview: 'Willkommen bei deiner Tracked-Coaching-Testphase',
  heading: 'Willkommen bei deiner kostenlosen Testphase',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Hallo ${userName}, deine ${daysRemaining}-tägige kostenlose Testphase von Tracked hat begonnen. Du hast bis zum ${trialEndDate} Zeit, alles zu entdecken, was die Plattform zu bieten hat.`,
  featuresTitle: 'Das ist in deiner Testphase enthalten:',
  features: [
    'Unbegrenzte Klient-Verwaltung (bis zu 500 Klienten)',
    'Individuelle Trainingsplanung und Vorlagen',
    'Fortschrittsverfolgung der Klienten und Analysen',
    'In-App-Nachrichten mit Klienten',
    'Voller Zugriff auf das Coaching-Dashboard',
  ],
  getStarted:
    'Bereit loszulegen? Geh zu deinem Dashboard, um deine ersten Klienten hinzuzufügen und dein Coaching-Business aufzubauen.',
  cta: 'Zum Dashboard',
  help: 'Wenn du Fragen hast oder Hilfe bei der Einrichtung brauchst, ist unser Team für dich da. Tritt unserer Discord-Community bei, um dich mit anderen Coaches zu vernetzen.',
};

const it: TrialStartedMessages = {
  preview: 'Benvenuto nella tua prova gratuita di coaching di Tracked',
  heading: 'Benvenuto nella tua prova gratuita',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Ciao ${userName}, la tua prova gratuita di ${daysRemaining} giorni di Tracked è iniziata. Hai tempo fino al ${trialEndDate} per esplorare tutto ciò che la piattaforma ha da offrire.`,
  featuresTitle: 'Cosa include la tua prova gratuita:',
  features: [
    'Gestione illimitata dei clienti (fino a 500 clienti)',
    'Programmazione degli allenamenti e modelli personalizzati',
    'Monitoraggio dei progressi dei clienti e analisi',
    "Messaggistica con i clienti nell'app",
    'Accesso completo alla dashboard di coaching',
  ],
  getStarted:
    'Pronto a iniziare? Vai alla tua dashboard per aggiungere i tuoi primi clienti e iniziare a costruire la tua attività di coaching.',
  cta: 'Vai alla dashboard',
  help: 'Se hai domande o hai bisogno di aiuto con la configurazione, il nostro team è qui per te. Unisciti alla nostra community Discord per connetterti con altri coach.',
};

const pt: TrialStartedMessages = {
  preview: 'Boas-vindas ao seu teste gratuito de coaching do Tracked',
  heading: 'Boas-vindas ao seu teste gratuito',
  intro: (userName, daysRemaining, trialEndDate) =>
    `Olá ${userName}, o seu teste gratuito de ${daysRemaining} dias do Tracked começou. Você tem até ${trialEndDate} para explorar tudo o que a plataforma tem a oferecer.`,
  featuresTitle: 'O que está incluído no seu teste gratuito:',
  features: [
    'Gestão ilimitada de clientes (até 500 clientes)',
    'Programação de treinos e modelos personalizados',
    'Acompanhamento do progresso dos clientes e análises',
    'Mensagens com os clientes no app',
    'Acesso completo ao painel de coaching',
  ],
  getStarted:
    'Pronto para começar? Vá até o seu painel para adicionar seus primeiros clientes e começar a construir o seu negócio de coaching.',
  cta: 'Ir para o painel',
  help: 'Se você tiver dúvidas ou precisar de ajuda com a configuração, nossa equipe está aqui para você. Entre na nossa comunidade do Discord para se conectar com outros treinadores.',
};

export const trialStartedMessages: Record<Locale, TrialStartedMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
