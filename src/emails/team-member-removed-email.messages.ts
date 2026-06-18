import type { Locale } from '../i18n/locales.js';

export interface TeamMemberRemovedMessages {
  preview: (teamName: string) => string;
  heading: (teamName: string) => string;
  intro: (teamName: string) => string;
  /** Sentence preceding the "website" link. */
  ignoreNoticePrefix: string;
  websiteLink: string;
  /** Copy after the "website" link (trailing punctuation). */
  ignoreNoticeSuffix: string;
}

const en: TeamMemberRemovedMessages = {
  preview: (teamName) => `Removed from ${teamName}`,
  heading: (teamName) => `Your membership in ${teamName} was revoked`,
  intro: (teamName) =>
    `The owner of ${teamName} has removed you from the team. If you believe this was a mistake, please contact the team owner.`,
  ignoreNoticePrefix:
    'If this email was not expected, please ignore it. You can learn more about the Tracked Training Platform by visiting our ',
  websiteLink: 'website',
  ignoreNoticeSuffix: '.',
};

const es: TeamMemberRemovedMessages = {
  preview: (teamName) => `Te han eliminado de ${teamName}`,
  heading: (teamName) => `Se ha revocado tu pertenencia a ${teamName}`,
  intro: (teamName) =>
    `El propietario de ${teamName} te ha eliminado del equipo. Si crees que ha sido un error, ponte en contacto con el propietario del equipo.`,
  ignoreNoticePrefix:
    'Si no esperabas este correo, ignóralo. Puedes conocer más sobre la Tracked Training Platform visitando nuestro ',
  websiteLink: 'sitio web',
  ignoreNoticeSuffix: '.',
};

const fr: TeamMemberRemovedMessages = {
  preview: (teamName) => `Retiré de ${teamName}`,
  heading: (teamName) => `Ton adhésion à ${teamName} a été révoquée`,
  intro: (teamName) =>
    `Le propriétaire de ${teamName} t'a retiré de l'équipe. Si tu penses qu'il s'agit d'une erreur, contacte le propriétaire de l'équipe.`,
  ignoreNoticePrefix:
    "Si tu n'attendais pas cet e-mail, ignore-le. Tu peux en savoir plus sur la Tracked Training Platform en visitant notre ",
  websiteLink: 'site web',
  ignoreNoticeSuffix: '.',
};

const de: TeamMemberRemovedMessages = {
  preview: (teamName) => `Aus ${teamName} entfernt`,
  heading: (teamName) => `Deine Mitgliedschaft in ${teamName} wurde widerrufen`,
  intro: (teamName) =>
    `Der Eigentümer von ${teamName} hat dich aus dem Team entfernt. Falls du glaubst, dass dies ein Fehler war, wende dich an den Team-Eigentümer.`,
  ignoreNoticePrefix:
    'Falls du diese E-Mail nicht erwartet hast, ignoriere sie einfach. Mehr über die Tracked Training Platform erfährst du auf unserer ',
  websiteLink: 'Website',
  ignoreNoticeSuffix: '.',
};

const it: TeamMemberRemovedMessages = {
  preview: (teamName) => `Rimosso da ${teamName}`,
  heading: (teamName) => `La tua iscrizione a ${teamName} è stata revocata`,
  intro: (teamName) =>
    `Il proprietario di ${teamName} ti ha rimosso dal team. Se ritieni che si tratti di un errore, contatta il proprietario del team.`,
  ignoreNoticePrefix:
    'Se non ti aspettavi questa email, ignorala. Puoi scoprire di più sulla Tracked Training Platform visitando il nostro ',
  websiteLink: 'sito web',
  ignoreNoticeSuffix: '.',
};

const pt: TeamMemberRemovedMessages = {
  preview: (teamName) => `Removido do ${teamName}`,
  heading: (teamName) => `Sua participação no ${teamName} foi revogada`,
  intro: (teamName) =>
    `O proprietário do ${teamName} removeu você do time. Se você acredita que isso foi um engano, entre em contato com o proprietário do time.`,
  ignoreNoticePrefix:
    'Se você não esperava este e-mail, ignore-o. Você pode saber mais sobre a Tracked Training Platform visitando nosso ',
  websiteLink: 'site',
  ignoreNoticeSuffix: '.',
};

export const teamMemberRemovedMessages: Record<
  Locale,
  TeamMemberRemovedMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
