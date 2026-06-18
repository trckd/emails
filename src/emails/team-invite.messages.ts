import type { Locale } from '../i18n/locales.js';

export interface TeamInviteMessages {
  preview: (teamName: string) => string;
  heading: (teamName: string) => string;
  /** Copy before the bolded role in "Join the team as a <role> ..." */
  joinAsPrefix: string;
  /** Copy after the bolded role. */
  joinAsSuffix: string;
  cta: string;
  /** Sentence preceding the "website" link. */
  ignoreNoticePrefix: string;
  websiteLink: string;
  /** Copy after the "website" link (trailing punctuation). */
  ignoreNoticeSuffix: string;
}

const en: TeamInviteMessages = {
  preview: (teamName) => `Team Invite for ${teamName}`,
  heading: (teamName) => `Invitation to join ${teamName}`,
  joinAsPrefix: 'Join the team as a ',
  joinAsSuffix: ' by pressing the button below.',
  cta: 'Join Team',
  ignoreNoticePrefix:
    'If this email was not expected, please ignore it. You can learn more about the Tracked Training Platform by visiting our ',
  websiteLink: 'website',
  ignoreNoticeSuffix: '.',
};

const es: TeamInviteMessages = {
  preview: (teamName) => `Invitación al equipo ${teamName}`,
  heading: (teamName) => `Invitación para unirte a ${teamName}`,
  joinAsPrefix: 'Únete al equipo como ',
  joinAsSuffix: ' pulsando el botón de abajo.',
  cta: 'Unirme al equipo',
  ignoreNoticePrefix:
    'Si no esperabas este correo, ignóralo. Puedes conocer más sobre la Tracked Training Platform visitando nuestro ',
  websiteLink: 'sitio web',
  ignoreNoticeSuffix: '.',
};

const fr: TeamInviteMessages = {
  preview: (teamName) => `Invitation à l'équipe ${teamName}`,
  heading: (teamName) => `Invitation à rejoindre ${teamName}`,
  joinAsPrefix: "Rejoins l'équipe en tant que ",
  joinAsSuffix: ' en appuyant sur le bouton ci-dessous.',
  cta: "Rejoindre l'équipe",
  ignoreNoticePrefix:
    "Si tu n'attendais pas cet e-mail, ignore-le. Tu peux en savoir plus sur la Tracked Training Platform en visitant notre ",
  websiteLink: 'site web',
  ignoreNoticeSuffix: '.',
};

const de: TeamInviteMessages = {
  preview: (teamName) => `Team-Einladung für ${teamName}`,
  heading: (teamName) => `Einladung, ${teamName} beizutreten`,
  joinAsPrefix: 'Tritt dem Team als ',
  joinAsSuffix: ' bei, indem du auf den Button unten klickst.',
  cta: 'Team beitreten',
  ignoreNoticePrefix:
    'Falls du diese E-Mail nicht erwartet hast, ignoriere sie einfach. Mehr über die Tracked Training Platform erfährst du auf unserer ',
  websiteLink: 'Website',
  ignoreNoticeSuffix: '.',
};

const it: TeamInviteMessages = {
  preview: (teamName) => `Invito al team ${teamName}`,
  heading: (teamName) => `Invito a unirti a ${teamName}`,
  joinAsPrefix: 'Unisciti al team come ',
  joinAsSuffix: ' premendo il pulsante qui sotto.',
  cta: 'Unisciti al team',
  ignoreNoticePrefix:
    'Se non ti aspettavi questa email, ignorala. Puoi scoprire di più sulla Tracked Training Platform visitando il nostro ',
  websiteLink: 'sito web',
  ignoreNoticeSuffix: '.',
};

const pt: TeamInviteMessages = {
  preview: (teamName) => `Convite para o time ${teamName}`,
  heading: (teamName) => `Convite para participar do ${teamName}`,
  joinAsPrefix: 'Participe do time como ',
  joinAsSuffix: ' pressionando o botão abaixo.',
  cta: 'Entrar no time',
  ignoreNoticePrefix:
    'Se você não esperava este e-mail, ignore-o. Você pode saber mais sobre a Tracked Training Platform visitando nosso ',
  websiteLink: 'site',
  ignoreNoticeSuffix: '.',
};

export const teamInviteMessages: Record<Locale, TeamInviteMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
