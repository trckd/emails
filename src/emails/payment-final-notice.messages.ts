import type { Locale } from '../i18n/locales.js';

export interface PaymentFinalNoticeMessages {
  preview: string;
  heading: string;
  intro: (userName: string, amountDue: string) => string;
  todoTitle: string;
  todoAccessEnds: (accessEndsDate: string) => string;
  todoUpdate: string;
  cta: string;
  reassurance: string;
}

const en: PaymentFinalNoticeMessages = {
  preview: 'Final notice: update your card to keep your Tracked subscription',
  heading: 'Final notice: your subscription is about to be canceled',
  intro: (userName, amountDue) =>
    `Hi ${userName}, we've tried several times to charge ${amountDue} for your Tracked subscription, but the payment keeps failing.`,
  todoTitle: 'Act now to keep your account:',
  todoAccessEnds: (accessEndsDate) =>
    `• Without a successful payment, your coaching dashboard access ends on ${accessEndsDate}`,
  todoUpdate:
    '• Update your payment method now to avoid losing access and your client setup',
  cta: 'Update payment method',
  reassurance:
    'Your data stays safe and you can reactivate anytime — but updating now avoids any interruption to you and your clients.',
};

const es: PaymentFinalNoticeMessages = {
  preview:
    'Aviso final: actualiza tu tarjeta para conservar tu suscripción de Tracked',
  heading: 'Aviso final: tu suscripción está a punto de cancelarse',
  intro: (userName, amountDue) =>
    `Hola ${userName}, hemos intentado varias veces cobrar ${amountDue} por tu suscripción de Tracked, pero el pago sigue fallando.`,
  todoTitle: 'Actúa ahora para conservar tu cuenta:',
  todoAccessEnds: (accessEndsDate) =>
    `• Sin un pago correcto, tu acceso al panel de entrenador finaliza el ${accessEndsDate}`,
  todoUpdate:
    '• Actualiza tu método de pago ahora para no perder el acceso ni la configuración de tus clientes',
  cta: 'Actualizar método de pago',
  reassurance:
    'Tus datos están a salvo y puedes reactivarla cuando quieras, pero actualizar ahora evita cualquier interrupción para ti y tus clientes.',
};

const fr: PaymentFinalNoticeMessages = {
  preview:
    'Dernier avis : mets ta carte à jour pour conserver ton abonnement Tracked',
  heading: "Dernier avis : ton abonnement est sur le point d'être annulé",
  intro: (userName, amountDue) =>
    `Salut ${userName}, nous avons essayé plusieurs fois de débiter ${amountDue} pour ton abonnement Tracked, mais le paiement échoue toujours.`,
  todoTitle: 'Agis maintenant pour conserver ton compte :',
  todoAccessEnds: (accessEndsDate) =>
    `• Sans paiement réussi, ton accès au tableau de bord de coach prend fin le ${accessEndsDate}`,
  todoUpdate:
    "• Mets ton moyen de paiement à jour dès maintenant pour ne pas perdre l'accès ni la configuration de tes clients",
  cta: 'Mettre à jour le moyen de paiement',
  reassurance:
    'Tes données restent en sécurité et tu peux réactiver à tout moment — mais une mise à jour maintenant évite toute interruption pour toi et tes clients.',
};

const de: PaymentFinalNoticeMessages = {
  preview:
    'Letzte Mahnung: Aktualisiere deine Karte, um dein Tracked-Abo zu behalten',
  heading: 'Letzte Mahnung: Dein Abo wird gleich gekündigt',
  intro: (userName, amountDue) =>
    `Hallo ${userName}, wir haben mehrfach versucht, ${amountDue} für dein Tracked-Abo abzubuchen, aber die Zahlung schlägt weiterhin fehl.`,
  todoTitle: 'Handle jetzt, um dein Konto zu behalten:',
  todoAccessEnds: (accessEndsDate) =>
    `• Ohne erfolgreiche Zahlung endet dein Zugang zum Coaching-Dashboard am ${accessEndsDate}`,
  todoUpdate:
    '• Aktualisiere jetzt deine Zahlungsmethode, um den Zugang und deine Klienten-Einrichtung nicht zu verlieren',
  cta: 'Zahlungsmethode aktualisieren',
  reassurance:
    'Deine Daten bleiben sicher und du kannst jederzeit reaktivieren – aber eine Aktualisierung jetzt vermeidet jede Unterbrechung für dich und deine Klienten.',
};

const it: PaymentFinalNoticeMessages = {
  preview:
    'Avviso finale: aggiorna la carta per mantenere il tuo abbonamento Tracked',
  heading: 'Avviso finale: il tuo abbonamento sta per essere annullato',
  intro: (userName, amountDue) =>
    `Ciao ${userName}, abbiamo provato più volte ad addebitare ${amountDue} per il tuo abbonamento Tracked, ma il pagamento continua a fallire.`,
  todoTitle: 'Agisci subito per mantenere il tuo account:',
  todoAccessEnds: (accessEndsDate) =>
    `• Senza un pagamento riuscito, il tuo accesso alla dashboard da coach termina il ${accessEndsDate}`,
  todoUpdate:
    "• Aggiorna ora il tuo metodo di pagamento per non perdere l'accesso e la configurazione dei tuoi clienti",
  cta: 'Aggiorna metodo di pagamento',
  reassurance:
    'I tuoi dati restano al sicuro e puoi riattivare in qualsiasi momento, ma aggiornare ora evita qualsiasi interruzione per te e i tuoi clienti.',
};

const pt: PaymentFinalNoticeMessages = {
  preview:
    'Aviso final: atualize seu cartão para manter sua assinatura do Tracked',
  heading: 'Aviso final: sua assinatura está prestes a ser cancelada',
  intro: (userName, amountDue) =>
    `Olá ${userName}, tentamos várias vezes cobrar ${amountDue} pela sua assinatura do Tracked, mas o pagamento continua falhando.`,
  todoTitle: 'Aja agora para manter sua conta:',
  todoAccessEnds: (accessEndsDate) =>
    `• Sem um pagamento concluído, seu acesso ao painel de treinador termina em ${accessEndsDate}`,
  todoUpdate:
    '• Atualize sua forma de pagamento agora para não perder o acesso nem a configuração dos seus clientes',
  cta: 'Atualizar forma de pagamento',
  reassurance:
    'Seus dados ficam seguros e você pode reativar quando quiser — mas atualizar agora evita qualquer interrupção para você e seus clientes.',
};

export const paymentFinalNoticeMessages: Record<
  Locale,
  PaymentFinalNoticeMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
