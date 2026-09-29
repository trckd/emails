import type { Locale } from '../i18n/locales.js';

export interface TrialEndingSoonMessages {
  subjectSaved: (trialEndDate: string) => string;
  subjectUnconfirmed: string;
  preview: (trialEndDate: string) => string;
  headingSaved: string;
  headingUnconfirmed: string;
  introSaved: (userName: string, trialEndDate: string) => string;
  introUnconfirmed: (userName: string, trialEndDate: string) => string;
  chargeAmountCard: (amountDue: string, last4: string) => string;
  chargeAmount: (amountDue: string) => string;
  chargeCard: (last4: string) => string;
  chargeGeneric: string;
  nothingToDo: string;
  expectTitle: string;
  expectContinuity: string;
  expectPricing: string;
  expectReceipt: string;
  expectCancel: (trialEndDate: string) => string;
  ctaSaved: string;
  ctaUnconfirmed: string;
  questions: string;
}

const en: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Your Tracked subscription starts on ${date}`,
  subjectUnconfirmed: 'Your Tracked trial ends soon: check your payment method',
  preview: (date) => `Your free trial ends on ${date}`,
  headingSaved: 'Your subscription starts soon',
  headingUnconfirmed: 'Your free trial ends soon',
  introSaved: (name, date) =>
    `Hi ${name}, your free trial of Tracked ends on ${date}, and your subscription will start automatically.`,
  introUnconfirmed: (name, date) =>
    `Hi ${name}, your free trial of Tracked ends on ${date}. To keep your coaching dashboard, make sure a payment method is saved on your subscription before then.`,
  chargeAmountCard: (amount, last4) =>
    `We'll charge ${amount} to your card ending in ${last4}.`,
  chargeAmount: (amount) =>
    `We'll charge ${amount} to your saved payment method.`,
  chargeCard: (last4) =>
    `We'll charge your first payment to your card ending in ${last4}.`,
  chargeGeneric:
    "We'll charge your first payment to your saved payment method.",
  nothingToDo:
    "You don't need to do anything to keep your coaching dashboard and client data.",
  expectTitle: 'What happens next:',
  expectContinuity:
    'Your dashboard, clients and data carry on without interruption',
  expectPricing: 'Your price is based on your active client count',
  expectReceipt: "You'll get a receipt by email after each payment",
  expectCancel: (date) =>
    `Cancel any time before ${date} and you won't be charged`,
  ctaSaved: 'Manage subscription',
  ctaUnconfirmed: 'Check payment method',
  questions:
    "Questions about your plan? Reply to this email or reach out on Discord. We're happy to help.",
};

const es: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Tu suscripción a Tracked empieza el ${date}`,
  subjectUnconfirmed:
    'Tu prueba gratuita de Tracked termina pronto: revisa tu método de pago',
  preview: (date) => `Tu prueba gratuita termina el ${date}`,
  headingSaved: 'Tu suscripción empieza pronto',
  headingUnconfirmed: 'Tu prueba gratuita termina pronto',
  introSaved: (name, date) =>
    `Hola ${name}, tu prueba gratuita de Tracked termina el ${date} y tu suscripción empezará automáticamente.`,
  introUnconfirmed: (name, date) =>
    `Hola ${name}, tu prueba gratuita de Tracked termina el ${date}. Para conservar tu panel de coaching, asegúrate de tener un método de pago guardado en tu suscripción antes de esa fecha.`,
  chargeAmountCard: (amount, last4) =>
    `Cobraremos ${amount} en tu tarjeta terminada en ${last4}.`,
  chargeAmount: (amount) =>
    `Cobraremos ${amount} en tu método de pago guardado.`,
  chargeCard: (last4) =>
    `Cobraremos tu primer pago en tu tarjeta terminada en ${last4}.`,
  chargeGeneric: 'Cobraremos tu primer pago en tu método de pago guardado.',
  nothingToDo:
    'No tienes que hacer nada para conservar tu panel de coaching y los datos de tus clientes.',
  expectTitle: 'Qué ocurre a continuación:',
  expectContinuity:
    'Tu panel, tus clientes y tus datos siguen funcionando sin interrupciones',
  expectPricing: 'Tu precio depende de tu número de clientes activos',
  expectReceipt: 'Recibirás un recibo por correo después de cada pago',
  expectCancel: (date) =>
    `Cancela en cualquier momento antes del ${date} y no se te cobrará`,
  ctaSaved: 'Gestionar suscripción',
  ctaUnconfirmed: 'Revisar método de pago',
  questions:
    '¿Tienes preguntas sobre tu plan? Responde a este correo o escríbenos en Discord. Estaremos encantados de ayudarte.',
};

const fr: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Votre abonnement Tracked commence le ${date}`,
  subjectUnconfirmed:
    'Votre essai Tracked se termine bientôt : vérifiez votre moyen de paiement',
  preview: (date) => `Votre essai gratuit se termine le ${date}`,
  headingSaved: 'Votre abonnement commence bientôt',
  headingUnconfirmed: 'Votre essai gratuit se termine bientôt',
  introSaved: (name, date) =>
    `Bonjour ${name}, votre essai gratuit de Tracked se termine le ${date} et votre abonnement démarrera automatiquement.`,
  introUnconfirmed: (name, date) =>
    `Bonjour ${name}, votre essai gratuit de Tracked se termine le ${date}. Pour conserver votre tableau de bord coaching, assurez-vous qu'un moyen de paiement est enregistré sur votre abonnement avant cette date.`,
  chargeAmountCard: (amount, last4) =>
    `Nous débiterons ${amount} sur votre carte se terminant par ${last4}.`,
  chargeAmount: (amount) =>
    `Nous débiterons ${amount} sur votre moyen de paiement enregistré.`,
  chargeCard: (last4) =>
    `Nous débiterons votre premier paiement sur votre carte se terminant par ${last4}.`,
  chargeGeneric:
    'Nous débiterons votre premier paiement sur votre moyen de paiement enregistré.',
  nothingToDo:
    "Vous n'avez rien à faire pour conserver votre tableau de bord coaching et les données de vos clients.",
  expectTitle: 'Et ensuite :',
  expectContinuity:
    'Votre tableau de bord, vos clients et vos données continuent sans interruption',
  expectPricing: 'Votre tarif dépend de votre nombre de clients actifs',
  expectReceipt: 'Vous recevrez un reçu par e-mail après chaque paiement',
  expectCancel: (date) =>
    `Annulez à tout moment avant le ${date} et vous ne serez pas débité`,
  ctaSaved: "Gérer l'abonnement",
  ctaUnconfirmed: 'Vérifier le moyen de paiement',
  questions:
    'Des questions sur votre formule ? Répondez à cet e-mail ou contactez-nous sur Discord. Nous serons ravis de vous aider.',
};

const de: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Dein Tracked-Abo beginnt am ${date}`,
  subjectUnconfirmed:
    'Deine Tracked-Testphase endet bald: Prüfe deine Zahlungsmethode',
  preview: (date) => `Deine kostenlose Testphase endet am ${date}`,
  headingSaved: 'Dein Abo beginnt bald',
  headingUnconfirmed: 'Deine kostenlose Testphase endet bald',
  introSaved: (name, date) =>
    `Hallo ${name}, deine kostenlose Testphase von Tracked endet am ${date} und dein Abo startet automatisch.`,
  introUnconfirmed: (name, date) =>
    `Hallo ${name}, deine kostenlose Testphase von Tracked endet am ${date}. Damit du dein Coaching-Dashboard behältst, hinterlege bis dahin eine Zahlungsmethode für dein Abo.`,
  chargeAmountCard: (amount, last4) =>
    `Wir belasten deine Karte mit der Endung ${last4} mit ${amount}.`,
  chargeAmount: (amount) =>
    `Wir belasten deine gespeicherte Zahlungsmethode mit ${amount}.`,
  chargeCard: (last4) =>
    `Wir belasten deine Karte mit der Endung ${last4} mit deiner ersten Zahlung.`,
  chargeGeneric:
    'Wir belasten deine gespeicherte Zahlungsmethode mit deiner ersten Zahlung.',
  nothingToDo:
    'Du musst nichts tun, um dein Coaching-Dashboard und die Daten deiner Klienten zu behalten.',
  expectTitle: 'So geht es weiter:',
  expectContinuity:
    'Dein Dashboard, deine Klienten und deine Daten laufen ohne Unterbrechung weiter',
  expectPricing:
    'Dein Preis richtet sich nach der Anzahl deiner aktiven Klienten',
  expectReceipt: 'Nach jeder Zahlung bekommst du eine Quittung per E-Mail',
  expectCancel: (date) =>
    `Kündige jederzeit vor dem ${date}, dann wird dir nichts berechnet`,
  ctaSaved: 'Abo verwalten',
  ctaUnconfirmed: 'Zahlungsmethode prüfen',
  questions:
    'Fragen zu deinem Plan? Antworte auf diese E-Mail oder melde dich auf Discord. Wir helfen gern.',
};

const it: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Il tuo abbonamento Tracked inizia il ${date}`,
  subjectUnconfirmed:
    'La tua prova di Tracked sta per finire: controlla il metodo di pagamento',
  preview: (date) => `La tua prova gratuita termina il ${date}`,
  headingSaved: 'Il tuo abbonamento inizia a breve',
  headingUnconfirmed: 'La tua prova gratuita sta per finire',
  introSaved: (name, date) =>
    `Ciao ${name}, la tua prova gratuita di Tracked termina il ${date} e il tuo abbonamento partirà automaticamente.`,
  introUnconfirmed: (name, date) =>
    `Ciao ${name}, la tua prova gratuita di Tracked termina il ${date}. Per mantenere la tua dashboard di coaching, assicurati di avere un metodo di pagamento salvato sul tuo abbonamento entro quella data.`,
  chargeAmountCard: (amount, last4) =>
    `Addebiteremo ${amount} sulla tua carta che termina con ${last4}.`,
  chargeAmount: (amount) =>
    `Addebiteremo ${amount} sul tuo metodo di pagamento salvato.`,
  chargeCard: (last4) =>
    `Addebiteremo il primo pagamento sulla tua carta che termina con ${last4}.`,
  chargeGeneric:
    'Addebiteremo il primo pagamento sul tuo metodo di pagamento salvato.',
  nothingToDo:
    'Non devi fare nulla per mantenere la tua dashboard di coaching e i dati dei tuoi clienti.',
  expectTitle: 'Cosa succede ora:',
  expectContinuity:
    'La tua dashboard, i tuoi clienti e i tuoi dati continuano senza interruzioni',
  expectPricing: 'Il prezzo dipende dal numero dei tuoi clienti attivi',
  expectReceipt: 'Riceverai una ricevuta via email dopo ogni pagamento',
  expectCancel: (date) =>
    `Annulla in qualsiasi momento prima del ${date} e non ti verrà addebitato nulla`,
  ctaSaved: 'Gestisci abbonamento',
  ctaUnconfirmed: 'Controlla metodo di pagamento',
  questions:
    'Domande sul tuo piano? Rispondi a questa email o scrivici su Discord. Saremo felici di aiutarti.',
};

const pt: TrialEndingSoonMessages = {
  subjectSaved: (date) => `Sua assinatura do Tracked começa em ${date}`,
  subjectUnconfirmed:
    'Seu teste do Tracked termina em breve: confira sua forma de pagamento',
  preview: (date) => `Seu teste gratuito termina em ${date}`,
  headingSaved: 'Sua assinatura começa em breve',
  headingUnconfirmed: 'Seu teste gratuito termina em breve',
  introSaved: (name, date) =>
    `Olá ${name}, seu teste gratuito do Tracked termina em ${date} e sua assinatura começará automaticamente.`,
  introUnconfirmed: (name, date) =>
    `Olá ${name}, seu teste gratuito do Tracked termina em ${date}. Para manter seu painel de coaching, garanta que haja uma forma de pagamento salva na sua assinatura até essa data.`,
  chargeAmountCard: (amount, last4) =>
    `Vamos cobrar ${amount} no seu cartão com final ${last4}.`,
  chargeAmount: (amount) =>
    `Vamos cobrar ${amount} na sua forma de pagamento salva.`,
  chargeCard: (last4) =>
    `Vamos cobrar seu primeiro pagamento no seu cartão com final ${last4}.`,
  chargeGeneric:
    'Vamos cobrar seu primeiro pagamento na sua forma de pagamento salva.',
  nothingToDo:
    'Você não precisa fazer nada para manter seu painel de coaching e os dados dos seus clientes.',
  expectTitle: 'O que acontece agora:',
  expectContinuity:
    'Seu painel, seus clientes e seus dados continuam sem interrupção',
  expectPricing: 'Seu preço depende do número de clientes ativos',
  expectReceipt: 'Você receberá um recibo por e-mail após cada pagamento',
  expectCancel: (date) =>
    `Cancele a qualquer momento antes de ${date} e você não será cobrado`,
  ctaSaved: 'Gerenciar assinatura',
  ctaUnconfirmed: 'Conferir forma de pagamento',
  questions:
    'Dúvidas sobre seu plano? Responda a este e-mail ou fale com a gente no Discord. Teremos prazer em ajudar.',
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
