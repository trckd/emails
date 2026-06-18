import type { Locale } from '../i18n/locales.js';

export interface PaymentActionRequiredMessages {
  preview: string;
  heading: string;
  intro: (userName: string, amountDue: string) => string;
  stepTitle: string;
  stepDetail: string;
  cta: string;
  pending: string;
}

const en: PaymentActionRequiredMessages = {
  preview: 'Your bank needs you to confirm your Tracked payment',
  heading: 'Confirm your payment',
  intro: (userName, amountDue) =>
    `Hi ${userName}, your bank needs you to verify your recent Tracked payment of ${amountDue} before it can go through (this is 3D Secure, a standard security check).`,
  stepTitle: 'One quick step:',
  stepDetail:
    "• Tap the button below and follow your bank's prompt to authenticate the payment",
  cta: 'Confirm payment',
  pending:
    'Until this is confirmed, your renewal stays pending — it only takes a moment, and your dashboard access continues in the meantime.',
};

const es: PaymentActionRequiredMessages = {
  preview: 'Tu banco necesita que confirmes tu pago de Tracked',
  heading: 'Confirma tu pago',
  intro: (userName, amountDue) =>
    `Hola ${userName}, tu banco necesita que verifiques tu pago reciente de Tracked de ${amountDue} antes de poder completarlo (esto es 3D Secure, una comprobación de seguridad estándar).`,
  stepTitle: 'Un paso rápido:',
  stepDetail:
    '• Toca el botón de abajo y sigue las indicaciones de tu banco para autenticar el pago',
  cta: 'Confirmar pago',
  pending:
    'Hasta que lo confirmes, tu renovación queda pendiente; solo toma un momento y mientras tanto tu acceso al panel continúa.',
};

const fr: PaymentActionRequiredMessages = {
  preview: 'Ta banque te demande de confirmer ton paiement Tracked',
  heading: 'Confirme ton paiement',
  intro: (userName, amountDue) =>
    `Salut ${userName}, ta banque doit vérifier ton récent paiement Tracked de ${amountDue} avant qu'il puisse aboutir (c'est le 3D Secure, un contrôle de sécurité standard).`,
  stepTitle: 'Une étape rapide :',
  stepDetail:
    '• Appuie sur le bouton ci-dessous et suis les instructions de ta banque pour authentifier le paiement',
  cta: 'Confirmer le paiement',
  pending:
    "Tant que ce n'est pas confirmé, ton renouvellement reste en attente — ça ne prend qu'un instant, et ton accès au tableau de bord continue entre-temps.",
};

const de: PaymentActionRequiredMessages = {
  preview: 'Deine Bank bittet dich, deine Tracked-Zahlung zu bestätigen',
  heading: 'Bestätige deine Zahlung',
  intro: (userName, amountDue) =>
    `Hallo ${userName}, deine Bank muss deine kürzliche Tracked-Zahlung über ${amountDue} überprüfen, bevor sie ausgeführt werden kann (das ist 3D Secure, eine übliche Sicherheitsprüfung).`,
  stepTitle: 'Ein schneller Schritt:',
  stepDetail:
    '• Tippe auf den Button unten und folge den Anweisungen deiner Bank, um die Zahlung zu authentifizieren',
  cta: 'Zahlung bestätigen',
  pending:
    'Bis zur Bestätigung bleibt deine Verlängerung ausstehend – es dauert nur einen Moment, und dein Dashboard-Zugang bleibt in der Zwischenzeit bestehen.',
};

const it: PaymentActionRequiredMessages = {
  preview: 'La tua banca ti chiede di confermare il tuo pagamento Tracked',
  heading: 'Conferma il tuo pagamento',
  intro: (userName, amountDue) =>
    `Ciao ${userName}, la tua banca deve verificare il tuo recente pagamento Tracked di ${amountDue} prima che possa essere completato (è il 3D Secure, un controllo di sicurezza standard).`,
  stepTitle: 'Un passaggio veloce:',
  stepDetail:
    '• Tocca il pulsante qui sotto e segui le istruzioni della tua banca per autenticare il pagamento',
  cta: 'Conferma pagamento',
  pending:
    "Finché non lo confermi, il rinnovo resta in sospeso: richiede solo un momento e nel frattempo l'accesso alla dashboard continua.",
};

const pt: PaymentActionRequiredMessages = {
  preview: 'Seu banco precisa que você confirme seu pagamento do Tracked',
  heading: 'Confirme seu pagamento',
  intro: (userName, amountDue) =>
    `Olá ${userName}, seu banco precisa verificar seu pagamento recente do Tracked de ${amountDue} antes que ele seja concluído (isso é o 3D Secure, uma verificação de segurança padrão).`,
  stepTitle: 'Um passo rápido:',
  stepDetail:
    '• Toque no botão abaixo e siga as instruções do seu banco para autenticar o pagamento',
  cta: 'Confirmar pagamento',
  pending:
    'Até a confirmação, sua renovação fica pendente — leva só um instante, e seu acesso ao painel continua nesse meio-tempo.',
};

export const paymentActionRequiredMessages: Record<
  Locale,
  PaymentActionRequiredMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
