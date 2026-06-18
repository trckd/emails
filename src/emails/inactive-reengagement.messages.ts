import type { Locale } from '../i18n/locales.js';
import { plural } from '../i18n/format.js';

export interface InactiveReengagementMessages {
  preview: (userName: string) => string;
  heading: string;
  intro: (userName: string, daysInactive: number) => string;
  message30: string;
  message14: string;
  messageDefault: string;
  featuresTitle: string;
  features: { title: string; description: string }[];
  cta: string;
  reminder: string;
}

const en: InactiveReengagementMessages = {
  preview: (userName) => `We miss you, ${userName}! Come back to Tracked`,
  heading: 'Come back to Tracked!',
  intro: (userName, daysInactive) => {
    const days = plural('en', daysInactive, { one: 'day', other: 'days' });
    return `Hi ${userName}, it's been ${daysInactive} ${days} since your last workout. `;
  },
  message30:
    "It's been a while! We're here ready to help you standardize your training.",
  message14:
    "We've been working on exciting new features while you've been away.",
  messageDefault: "Rest time is up, let's get back to it.",
  featuresTitle: 'Pick up where you left off:',
  features: [
    {
      title: 'Your data is safe',
      description: 'All your workout history and progress is still here',
    },
    {
      title: 'Start fresh',
      description: 'Every day is a new opportunity to build consistency',
    },
    {
      title: 'Stay accountable',
      description: 'Track even quick workouts to maintain momentum',
    },
  ],
  cta: 'Get Tracking',
  reminder:
    'Remember: consistency beats perfection. Putting even just a little effort into tracking helps you stay accountable and see progress over time.',
};

const es: InactiveReengagementMessages = {
  preview: (userName) => `¡Te echamos de menos, ${userName}! Vuelve a Tracked`,
  heading: '¡Vuelve a Tracked!',
  intro: (userName, daysInactive) => {
    const days = plural('es', daysInactive, { one: 'día', other: 'días' });
    return `Hola ${userName}, han pasado ${daysInactive} ${days} desde tu último entrenamiento. `;
  },
  message30:
    '¡Ha pasado un tiempo! Estamos aquí, listos para ayudarte a estandarizar tu entrenamiento.',
  message14:
    'Hemos estado trabajando en nuevas funciones emocionantes mientras no estabas.',
  messageDefault: 'Se acabó el descanso, volvamos a ello.',
  featuresTitle: 'Retoma donde lo dejaste:',
  features: [
    {
      title: 'Tus datos están a salvo',
      description:
        'Todo tu historial de entrenamientos y tu progreso siguen aquí',
    },
    {
      title: 'Empieza de nuevo',
      description: 'Cada día es una nueva oportunidad para crear constancia',
    },
    {
      title: 'Mantén la constancia',
      description:
        'Registra incluso los entrenamientos rápidos para mantener el impulso',
    },
  ],
  cta: 'Empezar a entrenar',
  reminder:
    'Recuerda: la constancia gana a la perfección. Dedicar aunque sea un poco de esfuerzo al seguimiento te ayuda a mantenerte constante y a ver tu progreso con el tiempo.',
};

const fr: InactiveReengagementMessages = {
  preview: (userName) => `Tu nous manques, ${userName} ! Reviens sur Tracked`,
  heading: 'Reviens sur Tracked !',
  intro: (userName, daysInactive) => {
    const days = plural('fr', daysInactive, { one: 'jour', other: 'jours' });
    return `Salut ${userName}, ça fait ${daysInactive} ${days} depuis ton dernier entraînement. `;
  },
  message30:
    "Ça fait un moment ! Nous sommes là, prêts à t'aider à structurer ton entraînement.",
  message14:
    'Nous avons travaillé sur de nouvelles fonctionnalités passionnantes pendant ton absence.',
  messageDefault: "La pause est terminée, on s'y remet.",
  featuresTitle: "Reprends là où tu t'es arrêté :",
  features: [
    {
      title: 'Tes données sont en sécurité',
      description:
        "Tout ton historique d'entraînement et ta progression sont toujours là",
    },
    {
      title: 'Reprends à zéro',
      description:
        'Chaque jour est une nouvelle occasion de bâtir ta régularité',
    },
    {
      title: 'Reste régulier',
      description:
        'Enregistre même les entraînements rapides pour garder ton élan',
    },
  ],
  cta: "Commencer à m'entraîner",
  reminder:
    "Souviens-toi : la régularité l'emporte sur la perfection. Même un petit effort de suivi t'aide à rester régulier et à voir ta progression au fil du temps.",
};

const de: InactiveReengagementMessages = {
  preview: (userName) =>
    `Wir vermissen dich, ${userName}! Komm zurück zu Tracked`,
  heading: 'Komm zurück zu Tracked!',
  intro: (userName, daysInactive) => {
    const days = plural('de', daysInactive, { one: 'Tag', other: 'Tagen' });
    return `Hallo ${userName}, seit deinem letzten Workout sind ${daysInactive} ${days} vergangen. `;
  },
  message30:
    'Es ist eine Weile her! Wir sind hier und helfen dir gerne, dein Training zu strukturieren.',
  message14:
    'Während du weg warst, haben wir an spannenden neuen Funktionen gearbeitet.',
  messageDefault: 'Die Pause ist vorbei, lass uns weitermachen.',
  featuresTitle: 'Mach da weiter, wo du aufgehört hast:',
  features: [
    {
      title: 'Deine Daten sind sicher',
      description:
        'Dein gesamter Trainingsverlauf und dein Fortschritt sind noch da',
    },
    {
      title: 'Fang neu an',
      description:
        'Jeder Tag ist eine neue Gelegenheit, Beständigkeit aufzubauen',
    },
    {
      title: 'Bleib dran',
      description: 'Tracke auch kurze Workouts, um deinen Schwung zu halten',
    },
  ],
  cta: "Los geht's",
  reminder:
    'Denk daran: Beständigkeit schlägt Perfektion. Schon ein bisschen Aufwand beim Tracking hilft dir, dranzubleiben und im Lauf der Zeit Fortschritte zu sehen.',
};

const it: InactiveReengagementMessages = {
  preview: (userName) => `Ci manchi, ${userName}! Torna su Tracked`,
  heading: 'Torna su Tracked!',
  intro: (userName, daysInactive) => {
    const days = plural('it', daysInactive, { one: 'giorno', other: 'giorni' });
    return `Ciao ${userName}, sono passati ${daysInactive} ${days} dal tuo ultimo allenamento. `;
  },
  message30:
    "È passato un po' di tempo! Siamo qui, pronti ad aiutarti a dare struttura al tuo allenamento.",
  message14:
    'Mentre eri via abbiamo lavorato a nuove entusiasmanti funzionalità.',
  messageDefault: 'Il riposo è finito, rimettiamoci in moto.',
  featuresTitle: 'Riprendi da dove avevi lasciato:',
  features: [
    {
      title: 'I tuoi dati sono al sicuro',
      description:
        'Tutto lo storico dei tuoi allenamenti e i tuoi progressi sono ancora qui',
    },
    {
      title: 'Riparti da capo',
      description: 'Ogni giorno è una nuova occasione per costruire costanza',
    },
    {
      title: 'Resta costante',
      description:
        'Registra anche gli allenamenti veloci per mantenere lo slancio',
    },
  ],
  cta: 'Inizia ad allenarti',
  reminder:
    'Ricorda: la costanza batte la perfezione. Anche solo un piccolo impegno nel monitoraggio ti aiuta a restare costante e a vedere i progressi nel tempo.',
};

const pt: InactiveReengagementMessages = {
  preview: (userName) =>
    `Sentimos sua falta, ${userName}! Volte para o Tracked`,
  heading: 'Volte para o Tracked!',
  intro: (userName, daysInactive) => {
    const days = plural('pt', daysInactive, { one: 'dia', other: 'dias' });
    return `Olá ${userName}, já se passaram ${daysInactive} ${days} desde o seu último treino. `;
  },
  message30:
    'Já faz um tempo! Estamos aqui, prontos para ajudar você a estruturar o seu treino.',
  message14:
    'Estivemos trabalhando em novos recursos empolgantes enquanto você esteve fora.',
  messageDefault: 'O descanso acabou, vamos voltar ao trabalho.',
  featuresTitle: 'Continue de onde você parou:',
  features: [
    {
      title: 'Seus dados estão seguros',
      description:
        'Todo o seu histórico de treinos e o seu progresso continuam aqui',
    },
    {
      title: 'Comece de novo',
      description: 'Cada dia é uma nova oportunidade para criar constância',
    },
    {
      title: 'Mantenha a constância',
      description: 'Registre até os treinos rápidos para manter o ritmo',
    },
  ],
  cta: 'Começar a treinar',
  reminder:
    'Lembre-se: a constância vence a perfeição. Dedicar um pouco de esforço ao acompanhamento ajuda você a manter a constância e a ver o progresso ao longo do tempo.',
};

export const inactiveReengagementMessages: Record<
  Locale,
  InactiveReengagementMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
