import type { Locale } from '../i18n/locales.js';

export interface TrackedMagicLinkActivateMessages {
  preview: string;
  welcome: string;
  instructions: string;
  cta: string;
  ignoreBefore: string;
  websiteLinkText: string;
  ignoreAfter: string;
}

const en: TrackedMagicLinkActivateMessages = {
  preview: 'New activation requested for Tracked - The gym tracking platform',
  welcome: 'Welcome to Tracked!',
  instructions:
    'Press the button below to confirm your Tracked account email. You will be redirected to the app.',
  cta: 'Confirm Email',
  ignoreBefore:
    'If this email was not expected, please ignore it. You can learn more about the Tracked Training Platform by visiting our ',
  websiteLinkText: 'website',
  ignoreAfter: '.',
};

const es: TrackedMagicLinkActivateMessages = {
  preview:
    'Nueva activación solicitada para Tracked: la plataforma de seguimiento de gimnasio',
  welcome: '¡Bienvenido a Tracked!',
  instructions:
    'Pulsa el botón de abajo para confirmar el correo de tu cuenta de Tracked. Te redirigiremos a la app.',
  cta: 'Confirmar correo',
  ignoreBefore:
    'Si no esperabas este correo, ignóralo. Puedes saber más sobre Tracked Training Platform visitando nuestro ',
  websiteLinkText: 'sitio web',
  ignoreAfter: '.',
};

const fr: TrackedMagicLinkActivateMessages = {
  preview:
    'Nouvelle activation demandée pour Tracked — la plateforme de suivi de salle de sport',
  welcome: 'Bienvenue sur Tracked !',
  instructions:
    "Appuie sur le bouton ci-dessous pour confirmer l'adresse e-mail de ton compte Tracked. Tu seras redirigé vers l'app.",
  cta: "Confirmer l'e-mail",
  ignoreBefore:
    "Si tu n'attendais pas cet e-mail, ignore-le. Tu peux en savoir plus sur Tracked Training Platform en visitant notre ",
  websiteLinkText: 'site web',
  ignoreAfter: '.',
};

const de: TrackedMagicLinkActivateMessages = {
  preview:
    'Neue Aktivierung für Tracked angefordert – die Gym-Tracking-Plattform',
  welcome: 'Willkommen bei Tracked!',
  instructions:
    'Tippe auf den Button unten, um die E-Mail-Adresse deines Tracked-Kontos zu bestätigen. Du wirst zur App weitergeleitet.',
  cta: 'E-Mail bestätigen',
  ignoreBefore:
    'Falls du diese E-Mail nicht erwartet hast, ignoriere sie einfach. Mehr über die Tracked Training Platform erfährst du auf unserer ',
  websiteLinkText: 'Website',
  ignoreAfter: '.',
};

const it: TrackedMagicLinkActivateMessages = {
  preview:
    'Nuova attivazione richiesta per Tracked: la piattaforma di monitoraggio per la palestra',
  welcome: 'Benvenuto su Tracked!',
  instructions:
    "Premi il pulsante qui sotto per confermare l'email del tuo account Tracked. Verrai reindirizzato all'app.",
  cta: 'Conferma email',
  ignoreBefore:
    'Se non ti aspettavi questa email, ignorala pure. Puoi scoprire di più sulla Tracked Training Platform visitando il nostro ',
  websiteLinkText: 'sito web',
  ignoreAfter: '.',
};

const pt: TrackedMagicLinkActivateMessages = {
  preview:
    'Nova ativação solicitada para o Tracked - a plataforma de acompanhamento de academia',
  welcome: 'Bem-vindo ao Tracked!',
  instructions:
    'Toque no botão abaixo para confirmar o e-mail da sua conta do Tracked. Você será redirecionado para o app.',
  cta: 'Confirmar e-mail',
  ignoreBefore:
    'Se você não esperava este e-mail, é só ignorá-lo. Você pode saber mais sobre a Tracked Training Platform visitando nosso ',
  websiteLinkText: 'site',
  ignoreAfter: '.',
};

export const trackedMagicLinkActivateMessages: Record<
  Locale,
  TrackedMagicLinkActivateMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
