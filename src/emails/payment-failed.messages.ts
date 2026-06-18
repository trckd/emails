import type { Locale } from '../i18n/locales.js';

export interface PaymentFailedMessages {
  preview: string;
  heading: string;
  intro: (userName: string, amountDue: string) => string;
  todoTitle: string;
  todoUpdate: string;
  todoGrace: (graceEndsDate: string) => string;
  todoRetry: string;
  cta: string;
  alreadyUpdated: string;
}

const en: PaymentFailedMessages = {
  preview:
    "We couldn't process your Tracked payment — update your card to keep access",
  heading: "We couldn't process your payment",
  intro: (userName, amountDue) =>
    `Hi ${userName}, your recent Tracked subscription payment of ${amountDue} didn't go through. This is usually an expired card or insufficient funds.`,
  todoTitle: 'What you need to do:',
  todoUpdate: '• Update your payment method to keep your coaching dashboard',
  todoGrace: (graceEndsDate) =>
    `• You'll keep full access until ${graceEndsDate}`,
  todoRetry: "• We'll retry the charge automatically once your card is updated",
  cta: 'Update payment method',
  alreadyUpdated:
    'Already updated your card? You can ignore this — the next retry will go through.',
};

const es: PaymentFailedMessages = {
  preview:
    'No pudimos procesar tu pago de Tracked: actualiza tu tarjeta para conservar el acceso',
  heading: 'No pudimos procesar tu pago',
  intro: (userName, amountDue) =>
    `Hola ${userName}, tu último pago de la suscripción de Tracked de ${amountDue} no se completó. Suele deberse a una tarjeta vencida o a fondos insuficientes.`,
  todoTitle: 'Lo que tienes que hacer:',
  todoUpdate:
    '• Actualiza tu método de pago para conservar tu panel de entrenador',
  todoGrace: (graceEndsDate) =>
    `• Mantendrás el acceso completo hasta el ${graceEndsDate}`,
  todoRetry:
    '• Volveremos a intentar el cobro automáticamente cuando actualices tu tarjeta',
  cta: 'Actualizar método de pago',
  alreadyUpdated:
    '¿Ya actualizaste tu tarjeta? Puedes ignorar este mensaje: el próximo intento se completará.',
};

const fr: PaymentFailedMessages = {
  preview:
    "Nous n'avons pas pu traiter ton paiement Tracked — mets ta carte à jour pour garder l'accès",
  heading: "Nous n'avons pas pu traiter ton paiement",
  intro: (userName, amountDue) =>
    `Salut ${userName}, ton dernier paiement de l'abonnement Tracked de ${amountDue} n'a pas abouti. C'est généralement dû à une carte expirée ou à des fonds insuffisants.`,
  todoTitle: 'Ce que tu dois faire :',
  todoUpdate:
    '• Mets à jour ton moyen de paiement pour conserver ton tableau de bord de coach',
  todoGrace: (graceEndsDate) =>
    `• Tu garderas un accès complet jusqu'au ${graceEndsDate}`,
  todoRetry:
    '• Nous réessaierons le paiement automatiquement dès que ta carte sera à jour',
  cta: 'Mettre à jour le moyen de paiement',
  alreadyUpdated:
    'Tu as déjà mis ta carte à jour ? Tu peux ignorer ce message — la prochaine tentative aboutira.',
};

const de: PaymentFailedMessages = {
  preview:
    'Wir konnten deine Tracked-Zahlung nicht verarbeiten – aktualisiere deine Karte, um den Zugang zu behalten',
  heading: 'Wir konnten deine Zahlung nicht verarbeiten',
  intro: (userName, amountDue) =>
    `Hallo ${userName}, deine letzte Zahlung für das Tracked-Abo über ${amountDue} ist fehlgeschlagen. Das liegt meist an einer abgelaufenen Karte oder unzureichender Deckung.`,
  todoTitle: 'Das musst du tun:',
  todoUpdate:
    '• Aktualisiere deine Zahlungsmethode, um dein Coaching-Dashboard zu behalten',
  todoGrace: (graceEndsDate) =>
    `• Du behältst vollen Zugang bis zum ${graceEndsDate}`,
  todoRetry:
    '• Wir versuchen die Abbuchung automatisch erneut, sobald deine Karte aktualisiert ist',
  cta: 'Zahlungsmethode aktualisieren',
  alreadyUpdated:
    'Karte schon aktualisiert? Dann kannst du diese Nachricht ignorieren – der nächste Versuch klappt.',
};

const it: PaymentFailedMessages = {
  preview:
    "Non siamo riusciti a elaborare il tuo pagamento Tracked: aggiorna la carta per mantenere l'accesso",
  heading: 'Non siamo riusciti a elaborare il tuo pagamento',
  intro: (userName, amountDue) =>
    `Ciao ${userName}, il tuo ultimo pagamento dell'abbonamento Tracked di ${amountDue} non è andato a buon fine. Di solito dipende da una carta scaduta o da fondi insufficienti.`,
  todoTitle: 'Cosa devi fare:',
  todoUpdate:
    '• Aggiorna il tuo metodo di pagamento per mantenere la dashboard da coach',
  todoGrace: (graceEndsDate) =>
    `• Manterrai l'accesso completo fino al ${graceEndsDate}`,
  todoRetry:
    "• Riproveremo l'addebito automaticamente non appena la carta sarà aggiornata",
  cta: 'Aggiorna metodo di pagamento',
  alreadyUpdated:
    'Hai già aggiornato la carta? Puoi ignorare questo messaggio: il prossimo tentativo andrà a buon fine.',
};

const pt: PaymentFailedMessages = {
  preview:
    'Não conseguimos processar seu pagamento do Tracked — atualize seu cartão para manter o acesso',
  heading: 'Não conseguimos processar seu pagamento',
  intro: (userName, amountDue) =>
    `Olá ${userName}, seu último pagamento da assinatura do Tracked de ${amountDue} não foi concluído. Isso geralmente acontece por um cartão vencido ou saldo insuficiente.`,
  todoTitle: 'O que você precisa fazer:',
  todoUpdate:
    '• Atualize sua forma de pagamento para manter seu painel de treinador',
  todoGrace: (graceEndsDate) =>
    `• Você mantém o acesso completo até ${graceEndsDate}`,
  todoRetry:
    '• Vamos tentar a cobrança automaticamente assim que seu cartão for atualizado',
  cta: 'Atualizar forma de pagamento',
  alreadyUpdated:
    'Já atualizou seu cartão? Pode ignorar esta mensagem — a próxima tentativa vai funcionar.',
};

export const paymentFailedMessages: Record<Locale, PaymentFailedMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
