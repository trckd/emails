import type { Locale } from '../i18n/locales.js';

export interface TrackedMagicLinkMessages {
  preview: string;
  welcome: string;
  instructions: string;
  cta: string;
  ignoreBefore: string;
  websiteLinkText: string;
  ignoreAfter: string;
}

const en: TrackedMagicLinkMessages = {
  preview: 'New login requested for Tracked - The gym tracking platform',
  welcome: 'Welcome to Tracked!',
  instructions:
    'To get started, press the button below to log in to your Tracked account. You will be redirected to the app.',
  cta: 'Login to Tracked',
  ignoreBefore:
    'If this email was not expected, please ignore it. You can learn more about the Tracked Training Platform by visiting our ',
  websiteLinkText: 'website',
  ignoreAfter: '.',
};

const es: TrackedMagicLinkMessages = {
  preview:
    'Nuevo inicio de sesión solicitado para Tracked: la plataforma de seguimiento de gimnasio',
  welcome: '¡Bienvenido a Tracked!',
  instructions:
    'Para empezar, pulsa el botón de abajo para iniciar sesión en tu cuenta de Tracked. Te redirigiremos a la app.',
  cta: 'Iniciar sesión en Tracked',
  ignoreBefore:
    'Si no esperabas este correo, ignóralo. Puedes saber más sobre Tracked Training Platform visitando nuestro ',
  websiteLinkText: 'sitio web',
  ignoreAfter: '.',
};

const fr: TrackedMagicLinkMessages = {
  preview:
    'Nouvelle connexion demandée pour Tracked — la plateforme de suivi de salle de sport',
  welcome: 'Bienvenue sur Tracked !',
  instructions:
    "Pour commencer, appuie sur le bouton ci-dessous pour te connecter à ton compte Tracked. Tu seras redirigé vers l'app.",
  cta: 'Se connecter à Tracked',
  ignoreBefore:
    "Si tu n'attendais pas cet e-mail, ignore-le. Tu peux en savoir plus sur Tracked Training Platform en visitant notre ",
  websiteLinkText: 'site web',
  ignoreAfter: '.',
};

const de: TrackedMagicLinkMessages = {
  preview:
    'Neue Anmeldung für Tracked angefordert – die Gym-Tracking-Plattform',
  welcome: 'Willkommen bei Tracked!',
  instructions:
    'Tippe zum Loslegen auf den Button unten, um dich bei deinem Tracked-Konto anzumelden. Du wirst zur App weitergeleitet.',
  cta: 'Bei Tracked anmelden',
  ignoreBefore:
    'Falls du diese E-Mail nicht erwartet hast, ignoriere sie einfach. Mehr über die Tracked Training Platform erfährst du auf unserer ',
  websiteLinkText: 'Website',
  ignoreAfter: '.',
};

const it: TrackedMagicLinkMessages = {
  preview:
    'Nuovo accesso richiesto per Tracked: la piattaforma di monitoraggio per la palestra',
  welcome: 'Benvenuto su Tracked!',
  instructions:
    "Per iniziare, premi il pulsante qui sotto per accedere al tuo account Tracked. Verrai reindirizzato all'app.",
  cta: 'Accedi a Tracked',
  ignoreBefore:
    'Se non ti aspettavi questa email, ignorala pure. Puoi scoprire di più sulla Tracked Training Platform visitando il nostro ',
  websiteLinkText: 'sito web',
  ignoreAfter: '.',
};

const pt: TrackedMagicLinkMessages = {
  preview:
    'Novo login solicitado para o Tracked - a plataforma de acompanhamento de academia',
  welcome: 'Bem-vindo ao Tracked!',
  instructions:
    'Para começar, toque no botão abaixo para entrar na sua conta do Tracked. Você será redirecionado para o app.',
  cta: 'Entrar no Tracked',
  ignoreBefore:
    'Se você não esperava este e-mail, é só ignorá-lo. Você pode saber mais sobre a Tracked Training Platform visitando nosso ',
  websiteLinkText: 'site',
  ignoreAfter: '.',
};

export const trackedMagicLinkMessages: Record<
  Locale,
  TrackedMagicLinkMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
