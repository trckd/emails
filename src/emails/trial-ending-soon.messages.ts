import type { Locale } from '../i18n/locales.js';

export interface TrialEndingSoonMessages {
  preview: (daysRemaining: number) => string;
  banner: (daysRemaining: number) => string;
  heading: string;
  intro: (userName: string, trialEndDate: string) => string;
  whatHappensTitle: string;
  whatHappens: string[];
  ctaBoxTitle: string;
  ctaBoxBody: string;
  cta: string;
  questions: string;
}

const en: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Only ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} left in your Tracked trial`,
  banner: (daysRemaining) =>
    `Your trial ends in ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'}`,
  heading: 'Your Trial is Almost Over',
  intro: (userName, trialEndDate) =>
    `Hi ${userName}, your free trial of Tracked ends on ${trialEndDate}. To keep your client data and continue using the coaching dashboard, subscribe before your trial expires.`,
  whatHappensTitle: 'What happens when your trial ends:',
  whatHappens: [
    "You'll lose access to the coaching dashboard",
    'Your client data will be safely preserved',
    'Clients will still have access to their workouts',
    'You can reactivate at any time to regain access',
  ],
  ctaBoxTitle: "Don't lose access",
  ctaBoxBody:
    'Subscribe now to keep managing your clients without interruption. Pricing starts at just a few dollars per month based on your client count.',
  cta: 'Subscribe Now',
  questions:
    "Have questions about pricing or need more time? Reply to this email or reach out on Discord. We're happy to help.",
};

const es: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Solo ${daysRemaining} ${daysRemaining === 1 ? 'día' : 'días'} para que termine tu prueba gratuita de Tracked`,
  banner: (daysRemaining) =>
    `Tu prueba gratuita termina en ${daysRemaining} ${daysRemaining === 1 ? 'día' : 'días'}`,
  heading: 'Tu prueba gratuita está a punto de terminar',
  intro: (userName, trialEndDate) =>
    `Hola ${userName}, tu prueba gratuita de Tracked termina el ${trialEndDate}. Para conservar los datos de tus clientes y seguir usando el panel de coaching, suscríbete antes de que caduque tu prueba gratuita.`,
  whatHappensTitle: 'Qué ocurre cuando termina tu prueba gratuita:',
  whatHappens: [
    'Perderás el acceso al panel de coaching',
    'Los datos de tus clientes se conservarán de forma segura',
    'Tus clientes seguirán teniendo acceso a sus entrenamientos',
    'Puedes reactivar en cualquier momento para recuperar el acceso',
  ],
  ctaBoxTitle: 'No pierdas el acceso',
  ctaBoxBody:
    'Suscríbete ahora para seguir gestionando a tus clientes sin interrupciones. Los precios empiezan en solo unos pocos dólares al mes según tu número de clientes.',
  cta: 'Suscribirme ahora',
  questions:
    '¿Tienes preguntas sobre los precios o necesitas más tiempo? Responde a este correo o escríbenos en Discord. Estaremos encantados de ayudarte.',
};

const fr: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Plus que ${daysRemaining} ${daysRemaining <= 1 ? 'jour' : 'jours'} dans ton essai Tracked`,
  banner: (daysRemaining) =>
    `Ton essai gratuit se termine dans ${daysRemaining} ${daysRemaining <= 1 ? 'jour' : 'jours'}`,
  heading: 'Ton essai gratuit est presque terminé',
  intro: (userName, trialEndDate) =>
    `Salut ${userName}, ton essai gratuit de Tracked se termine le ${trialEndDate}. Pour conserver les données de tes clients et continuer à utiliser le tableau de bord de coaching, abonne-toi avant la fin de ton essai gratuit.`,
  whatHappensTitle: 'Ce qui se passe à la fin de ton essai gratuit :',
  whatHappens: [
    "Tu perdras l'accès au tableau de bord de coaching",
    'Les données de tes clients seront conservées en toute sécurité',
    'Tes clients auront toujours accès à leurs entraînements',
    "Tu peux réactiver à tout moment pour retrouver l'accès",
  ],
  ctaBoxTitle: 'Ne perds pas ton accès',
  ctaBoxBody:
    'Abonne-toi maintenant pour continuer à gérer tes clients sans interruption. Les prix démarrent à seulement quelques dollars par mois selon ton nombre de clients.',
  cta: "S'abonner maintenant",
  questions:
    "Des questions sur les tarifs ou besoin de plus de temps ? Réponds à cet e-mail ou contacte-nous sur Discord. Nous serons ravis de t'aider.",
};

const de: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Nur noch ${daysRemaining} ${daysRemaining === 1 ? 'Tag' : 'Tage'} in deiner Tracked-Testphase`,
  banner: (daysRemaining) =>
    `Deine Testphase endet in ${daysRemaining} ${daysRemaining === 1 ? 'Tag' : 'Tagen'}`,
  heading: 'Deine Testphase ist fast vorbei',
  intro: (userName, trialEndDate) =>
    `Hallo ${userName}, deine kostenlose Testphase von Tracked endet am ${trialEndDate}. Um die Daten deiner Klienten zu behalten und das Coaching-Dashboard weiter zu nutzen, abonniere, bevor deine Testphase abläuft.`,
  whatHappensTitle: 'Was passiert, wenn deine Testphase endet:',
  whatHappens: [
    'Du verlierst den Zugriff auf das Coaching-Dashboard',
    'Die Daten deiner Klienten bleiben sicher erhalten',
    'Deine Klienten haben weiterhin Zugriff auf ihre Workouts',
    'Du kannst jederzeit reaktivieren, um den Zugriff zurückzubekommen',
  ],
  ctaBoxTitle: 'Verliere nicht deinen Zugriff',
  ctaBoxBody:
    'Abonniere jetzt, um deine Klienten ohne Unterbrechung weiter zu verwalten. Die Preise beginnen bei nur wenigen Dollar pro Monat, abhängig von deiner Klientenzahl.',
  cta: 'Jetzt abonnieren',
  questions:
    'Hast du Fragen zu den Preisen oder brauchst du mehr Zeit? Antworte auf diese E-Mail oder melde dich auf Discord. Wir helfen dir gern.',
};

const it: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Solo ${daysRemaining} ${daysRemaining === 1 ? 'giorno' : 'giorni'} alla fine della tua prova di Tracked`,
  banner: (daysRemaining) =>
    `La tua prova gratuita termina tra ${daysRemaining} ${daysRemaining === 1 ? 'giorno' : 'giorni'}`,
  heading: 'La tua prova gratuita sta per finire',
  intro: (userName, trialEndDate) =>
    `Ciao ${userName}, la tua prova gratuita di Tracked termina il ${trialEndDate}. Per conservare i dati dei tuoi clienti e continuare a usare la dashboard di coaching, abbonati prima che la tua prova gratuita scada.`,
  whatHappensTitle: 'Cosa succede quando la tua prova gratuita termina:',
  whatHappens: [
    "Perderai l'accesso alla dashboard di coaching",
    'I dati dei tuoi clienti saranno conservati in modo sicuro',
    'I tuoi clienti avranno comunque accesso ai loro allenamenti',
    "Puoi riattivare in qualsiasi momento per riottenere l'accesso",
  ],
  ctaBoxTitle: "Non perdere l'accesso",
  ctaBoxBody:
    'Abbonati ora per continuare a gestire i tuoi clienti senza interruzioni. I prezzi partono da pochi dollari al mese in base al numero dei tuoi clienti.',
  cta: 'Abbonati ora',
  questions:
    'Hai domande sui prezzi o ti serve più tempo? Rispondi a questa email o scrivici su Discord. Saremo felici di aiutarti.',
};

const pt: TrialEndingSoonMessages = {
  preview: (daysRemaining) =>
    `Faltam apenas ${daysRemaining} ${daysRemaining === 1 ? 'dia' : 'dias'} no seu teste do Tracked`,
  banner: (daysRemaining) =>
    `Seu teste gratuito termina em ${daysRemaining} ${daysRemaining === 1 ? 'dia' : 'dias'}`,
  heading: 'Seu teste gratuito está quase no fim',
  intro: (userName, trialEndDate) =>
    `Olá ${userName}, seu teste gratuito do Tracked termina em ${trialEndDate}. Para manter os dados dos seus clientes e continuar usando o painel de coaching, assine antes que seu teste gratuito expire.`,
  whatHappensTitle: 'O que acontece quando seu teste gratuito termina:',
  whatHappens: [
    'Você perderá o acesso ao painel de coaching',
    'Os dados dos seus clientes serão preservados com segurança',
    'Seus clientes continuarão tendo acesso aos treinos deles',
    'Você pode reativar a qualquer momento para recuperar o acesso',
  ],
  ctaBoxTitle: 'Não perca o acesso',
  ctaBoxBody:
    'Assine agora para continuar gerenciando seus clientes sem interrupções. Os preços começam em apenas alguns dólares por mês, com base no seu número de clientes.',
  cta: 'Assinar agora',
  questions:
    'Tem dúvidas sobre os preços ou precisa de mais tempo? Responda a este e-mail ou fale com a gente no Discord. Teremos prazer em ajudar.',
};

export const trialEndingSoonMessages: Record<Locale, TrialEndingSoonMessages> =
  {
    en,
    es,
    fr,
    de,
    it,
    pt,
  };
