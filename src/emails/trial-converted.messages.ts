import type { Locale } from '../i18n/locales.js';

export interface TrialConvertedMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  whatsNextTitle: string;
  whatsNext: string[];
  community: string;
  cta: string;
  discordInvite: string;
}

const en: TrialConvertedMessages = {
  preview: "Welcome to Tracked - You're now a subscriber",
  heading: 'Welcome to Tracked',
  intro: (userName) =>
    `Hi ${userName}, thank you for subscribing to Tracked. You now have full access to all coaching features with no time limits.`,
  whatsNextTitle: "What's next:",
  whatsNext: [
    'Continue managing your clients from the dashboard',
    'Your billing is based on your active client count',
    'Manage your subscription anytime from billing settings',
    'Reach out if you need any help getting started',
  ],
  community:
    "We're excited to have you as part of the Tracked community. If you have any questions about your subscription or the platform, we're here to help.",
  cta: 'Go to Dashboard',
  discordInvite:
    'Join our Discord community to connect with other coaches, share tips, and get the latest updates.',
};

const es: TrialConvertedMessages = {
  preview: 'Te damos la bienvenida a Tracked: ahora eres suscriptor',
  heading: 'Te damos la bienvenida a Tracked',
  intro: (userName) =>
    `Hola ${userName}, gracias por suscribirte a Tracked. Ahora tienes acceso completo a todas las funciones de coaching sin límites de tiempo.`,
  whatsNextTitle: 'Qué sigue:',
  whatsNext: [
    'Sigue gestionando a tus clientes desde el panel',
    'Tu facturación se basa en el número de clientes activos',
    'Gestiona tu suscripción cuando quieras desde la configuración de facturación',
    'Escríbenos si necesitas ayuda para empezar',
  ],
  community:
    'Nos alegra mucho tenerte como parte de la comunidad de Tracked. Si tienes alguna pregunta sobre tu suscripción o la plataforma, estamos aquí para ayudarte.',
  cta: 'Ir al panel',
  discordInvite:
    'Únete a nuestra comunidad de Discord para conectar con otros entrenadores, compartir consejos y recibir las últimas novedades.',
};

const fr: TrialConvertedMessages = {
  preview: 'Bienvenue sur Tracked : tu es maintenant abonné',
  heading: 'Bienvenue sur Tracked',
  intro: (userName) =>
    `Salut ${userName}, merci de t'être abonné à Tracked. Tu as désormais un accès complet à toutes les fonctionnalités de coaching, sans limite de temps.`,
  whatsNextTitle: 'La suite :',
  whatsNext: [
    'Continue à gérer tes clients depuis le tableau de bord',
    'Ta facturation est basée sur le nombre de clients actifs',
    'Gère ton abonnement à tout moment depuis les paramètres de facturation',
    "Contacte-nous si tu as besoin d'aide pour démarrer",
  ],
  community:
    "Nous sommes ravis de t'accueillir dans la communauté Tracked. Si tu as des questions sur ton abonnement ou la plateforme, nous sommes là pour t'aider.",
  cta: 'Accéder au tableau de bord',
  discordInvite:
    "Rejoins notre communauté Discord pour échanger avec d'autres coachs, partager des astuces et recevoir les dernières actualités.",
};

const de: TrialConvertedMessages = {
  preview: 'Willkommen bei Tracked – du bist jetzt Abonnent',
  heading: 'Willkommen bei Tracked',
  intro: (userName) =>
    `Hallo ${userName}, danke, dass du Tracked abonniert hast. Du hast jetzt vollen Zugriff auf alle Coaching-Funktionen – ohne zeitliche Begrenzung.`,
  whatsNextTitle: 'Wie es weitergeht:',
  whatsNext: [
    'Verwalte deine Klienten weiterhin über das Dashboard',
    'Deine Abrechnung basiert auf der Anzahl deiner aktiven Klienten',
    'Verwalte dein Abo jederzeit in den Abrechnungseinstellungen',
    'Melde dich, wenn du Hilfe beim Einstieg brauchst',
  ],
  community:
    'Wir freuen uns, dich in der Tracked-Community zu haben. Wenn du Fragen zu deinem Abo oder der Plattform hast, sind wir für dich da.',
  cta: 'Zum Dashboard',
  discordInvite:
    'Tritt unserer Discord-Community bei, um dich mit anderen Coaches zu vernetzen, Tipps zu teilen und die neuesten Updates zu erhalten.',
};

const it: TrialConvertedMessages = {
  preview: 'Benvenuto su Tracked: ora sei un abbonato',
  heading: 'Benvenuto su Tracked',
  intro: (userName) =>
    `Ciao ${userName}, grazie per esserti abbonato a Tracked. Ora hai accesso completo a tutte le funzioni di coaching senza limiti di tempo.`,
  whatsNextTitle: 'Cosa fare ora:',
  whatsNext: [
    'Continua a gestire i tuoi clienti dalla dashboard',
    'La tua fatturazione si basa sul numero di clienti attivi',
    'Gestisci il tuo abbonamento in qualsiasi momento dalle impostazioni di fatturazione',
    'Contattaci se hai bisogno di aiuto per iniziare',
  ],
  community:
    'Siamo felici di averti nella community di Tracked. Se hai domande sul tuo abbonamento o sulla piattaforma, siamo qui per aiutarti.',
  cta: 'Vai alla dashboard',
  discordInvite:
    'Unisciti alla nostra community Discord per connetterti con altri coach, condividere consigli e ricevere gli ultimi aggiornamenti.',
};

const pt: TrialConvertedMessages = {
  preview: 'Boas-vindas ao Tracked: agora você é assinante',
  heading: 'Boas-vindas ao Tracked',
  intro: (userName) =>
    `Olá ${userName}, obrigado por assinar o Tracked. Agora você tem acesso completo a todos os recursos de coaching, sem limites de tempo.`,
  whatsNextTitle: 'Próximos passos:',
  whatsNext: [
    'Continue gerenciando seus clientes pelo painel',
    'Sua cobrança é baseada no número de clientes ativos',
    'Gerencie sua assinatura quando quiser nas configurações de cobrança',
    'Fale com a gente se precisar de ajuda para começar',
  ],
  community:
    'Estamos muito felizes em ter você como parte da comunidade do Tracked. Se você tiver dúvidas sobre sua assinatura ou a plataforma, estamos aqui para ajudar.',
  cta: 'Ir para o painel',
  discordInvite:
    'Entre na nossa comunidade do Discord para se conectar com outros treinadores, compartilhar dicas e receber as últimas novidades.',
};

export const trialConvertedMessages: Record<Locale, TrialConvertedMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
