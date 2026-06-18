import type { Locale } from '../i18n/locales.js';

export interface NewFollowerMessages {
  preview: (followerName: string) => string;
  heading: string;
  intro: (userName: string, displayName: string) => string;
  /** Trailing copy after the bold follower name in the highlight box. */
  featureBoxSuffix: string;
  cta: string;
  closing: string;
  avatarAlt: (followerName: string) => string;
}

const en: NewFollowerMessages = {
  preview: (followerName) => `${followerName} started following you on Tracked`,
  heading: 'You Have a New Follower!',
  intro: (userName, displayName) =>
    `Hi ${userName}, ${displayName} started following you on Tracked.`,
  featureBoxSuffix:
    ' is now following your fitness journey and will see your public workouts and achievements.',
  cta: 'View Profile',
  closing:
    'Check out their profile to see their workouts and consider following them back!',
  avatarAlt: (followerName) => followerName,
};

const es: NewFollowerMessages = {
  preview: (followerName) => `${followerName} empezó a seguirte en Tracked`,
  heading: '¡Tienes un nuevo seguidor!',
  intro: (userName, displayName) =>
    `Hola ${userName}, ${displayName} empezó a seguirte en Tracked.`,
  featureBoxSuffix:
    ' ahora sigue tu camino fitness y verá tus entrenamientos y logros públicos.',
  cta: 'Ver perfil',
  closing:
    '¡Echa un vistazo a su perfil para ver sus entrenamientos y plantéate seguirlo también!',
  avatarAlt: (followerName) => followerName,
};

const fr: NewFollowerMessages = {
  preview: (followerName) =>
    `${followerName} a commencé à te suivre sur Tracked`,
  heading: 'Tu as un nouvel abonné !',
  intro: (userName, displayName) =>
    `Salut ${userName}, ${displayName} a commencé à te suivre sur Tracked.`,
  featureBoxSuffix:
    ' suit désormais ton parcours fitness et verra tes entraînements et tes réussites publics.',
  cta: 'Voir le profil',
  closing:
    'Va voir son profil pour découvrir ses entraînements et pense à le suivre en retour !',
  avatarAlt: (followerName) => followerName,
};

const de: NewFollowerMessages = {
  preview: (followerName) => `${followerName} folgt dir jetzt auf Tracked`,
  heading: 'Du hast einen neuen Follower!',
  intro: (userName, displayName) =>
    `Hallo ${userName}, ${displayName} folgt dir jetzt auf Tracked.`,
  featureBoxSuffix:
    ' folgt jetzt deiner Fitnessreise und sieht deine öffentlichen Workouts und Erfolge.',
  cta: 'Profil ansehen',
  closing:
    'Sieh dir das Profil an, um die Workouts zu entdecken, und überlege, ob du zurückfolgen möchtest!',
  avatarAlt: (followerName) => followerName,
};

const it: NewFollowerMessages = {
  preview: (followerName) =>
    `${followerName} ha iniziato a seguirti su Tracked`,
  heading: 'Hai un nuovo follower!',
  intro: (userName, displayName) =>
    `Ciao ${userName}, ${displayName} ha iniziato a seguirti su Tracked.`,
  featureBoxSuffix:
    ' ora segue il tuo percorso fitness e vedrà i tuoi allenamenti e i tuoi traguardi pubblici.',
  cta: 'Vedi profilo',
  closing:
    "Dai un'occhiata al suo profilo per vedere i suoi allenamenti e valuta di seguirlo a tua volta!",
  avatarAlt: (followerName) => followerName,
};

const pt: NewFollowerMessages = {
  preview: (followerName) => `${followerName} começou a seguir você no Tracked`,
  heading: 'Você tem um novo seguidor!',
  intro: (userName, displayName) =>
    `Olá ${userName}, ${displayName} começou a seguir você no Tracked.`,
  featureBoxSuffix:
    ' agora está seguindo sua jornada fitness e verá seus treinos e conquistas públicos.',
  cta: 'Ver perfil',
  closing: 'Confira o perfil para ver os treinos e considere seguir de volta!',
  avatarAlt: (followerName) => followerName,
};

export const newFollowerMessages: Record<Locale, NewFollowerMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
