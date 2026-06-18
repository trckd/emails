import type { Locale } from '../i18n/locales.js';

export interface ProspectConvertedClientMessages {
  preview: (coachName: string) => string;
  heading: string;
  intro: (clientName: string, coachName: string) => string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  cta: string;
}

const en: ProspectConvertedClientMessages = {
  preview: (coachName) => `You've been accepted by ${coachName} on Tracked!`,
  heading: 'Welcome to the Team!',
  intro: (clientName, coachName) =>
    `Hi ${clientName}, great news — ${coachName} has accepted you as a client on Tracked. You're all set to start your coaching journey.`,
  featuresTitle: 'What happens next:',
  features: [
    {
      title: 'Open the app',
      description:
        'Your coach is now connected to your account and ready to go.',
    },
    {
      title: 'Check your workouts',
      description:
        'Your coach can assign personalized programs directly to you.',
    },
    {
      title: 'Stay in touch',
      description:
        'Message your coach anytime through the app for guidance and support.',
    },
  ],
  cta: 'Open Tracked',
};

const es: ProspectConvertedClientMessages = {
  preview: (coachName) => `¡${coachName} te ha aceptado en Tracked!`,
  heading: '¡Bienvenido al equipo!',
  intro: (clientName, coachName) =>
    `Hola ${clientName}, buenas noticias: ${coachName} te ha aceptado como cliente en Tracked. Ya está todo listo para empezar tu camino con tu entrenador.`,
  featuresTitle: 'Qué pasa ahora:',
  features: [
    {
      title: 'Abre la app',
      description:
        'Tu entrenador ya está conectado a tu cuenta y listo para empezar.',
    },
    {
      title: 'Revisa tus entrenamientos',
      description:
        'Tu entrenador puede asignarte programas personalizados directamente.',
    },
    {
      title: 'Mantén el contacto',
      description:
        'Escríbele a tu entrenador en cualquier momento desde la app para recibir orientación y apoyo.',
    },
  ],
  cta: 'Abrir Tracked',
};

const fr: ProspectConvertedClientMessages = {
  preview: (coachName) => `${coachName} t'a accepté sur Tracked !`,
  heading: "Bienvenue dans l'équipe !",
  intro: (clientName, coachName) =>
    `Salut ${clientName}, bonne nouvelle — ${coachName} t'a accepté comme client sur Tracked. Tu es prêt à démarrer ton parcours avec ton coach.`,
  featuresTitle: 'Et maintenant :',
  features: [
    {
      title: "Ouvre l'application",
      description:
        'Ton coach est maintenant connecté à ton compte et prêt à démarrer.',
    },
    {
      title: 'Consulte tes entraînements',
      description:
        "Ton coach peut t'attribuer des programmes personnalisés directement.",
    },
    {
      title: 'Reste en contact',
      description:
        "Écris à ton coach à tout moment depuis l'application pour être guidé et soutenu.",
    },
  ],
  cta: 'Ouvrir Tracked',
};

const de: ProspectConvertedClientMessages = {
  preview: (coachName) => `${coachName} hat dich auf Tracked angenommen!`,
  heading: 'Willkommen im Team!',
  intro: (clientName, coachName) =>
    `Hallo ${clientName}, gute Nachrichten – ${coachName} hat dich als Klient auf Tracked angenommen. Du bist bereit, deinen Weg mit deinem Coach zu starten.`,
  featuresTitle: 'Wie es jetzt weitergeht:',
  features: [
    {
      title: 'Öffne die App',
      description:
        'Dein Coach ist jetzt mit deinem Konto verbunden und startklar.',
    },
    {
      title: 'Sieh dir deine Workouts an',
      description:
        'Dein Coach kann dir personalisierte Programme direkt zuweisen.',
    },
    {
      title: 'Bleib in Kontakt',
      description:
        'Schreibe deinem Coach jederzeit über die App für Anleitung und Unterstützung.',
    },
  ],
  cta: 'Tracked öffnen',
};

const it: ProspectConvertedClientMessages = {
  preview: (coachName) => `${coachName} ti ha accettato su Tracked!`,
  heading: 'Benvenuto nel team!',
  intro: (clientName, coachName) =>
    `Ciao ${clientName}, ottime notizie: ${coachName} ti ha accettato come cliente su Tracked. Sei pronto per iniziare il tuo percorso con il tuo coach.`,
  featuresTitle: 'Cosa succede ora:',
  features: [
    {
      title: "Apri l'app",
      description:
        'Il tuo coach è ora collegato al tuo account e pronto a iniziare.',
    },
    {
      title: 'Controlla i tuoi allenamenti',
      description:
        'Il tuo coach può assegnarti programmi personalizzati direttamente.',
    },
    {
      title: 'Resta in contatto',
      description:
        "Scrivi al tuo coach in qualsiasi momento dall'app per ricevere guida e supporto.",
    },
  ],
  cta: 'Apri Tracked',
};

const pt: ProspectConvertedClientMessages = {
  preview: (coachName) => `Você foi aceito por ${coachName} no Tracked!`,
  heading: 'Bem-vindo ao time!',
  intro: (clientName, coachName) =>
    `Olá ${clientName}, ótima notícia — ${coachName} aceitou você como cliente no Tracked. Está tudo pronto para você começar sua jornada com seu treinador.`,
  featuresTitle: 'O que acontece agora:',
  features: [
    {
      title: 'Abra o app',
      description:
        'Seu treinador já está conectado à sua conta e pronto para começar.',
    },
    {
      title: 'Confira seus treinos',
      description:
        'Seu treinador pode atribuir programas personalizados diretamente para você.',
    },
    {
      title: 'Mantenha contato',
      description:
        'Fale com seu treinador a qualquer momento pelo app para receber orientação e apoio.',
    },
  ],
  cta: 'Abrir Tracked',
};

export const prospectConvertedClientMessages: Record<
  Locale,
  ProspectConvertedClientMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
