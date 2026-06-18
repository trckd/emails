import type { Locale } from '../i18n/locales.js';

export interface TrialExpiredMessages {
  preview: string;
  heading: string;
  intro: (userName: string) => string;
  dataPreservedTitle: string;
  dataPreserved: string[];
  reactivateTitle: string;
  reactivateBody: string;
  cta: string;
  feedback: string;
}

const en: TrialExpiredMessages = {
  preview: 'Your Tracked trial has ended',
  heading: 'Your Trial Has Ended',
  intro: (userName) =>
    `Hi ${userName}, your free trial of Tracked has expired. Your access to the coaching dashboard has been paused, but don't worry — your data is safe.`,
  dataPreservedTitle: 'Your data is preserved:',
  dataPreserved: [
    'All client profiles and workout history are saved',
    'Your workout templates and programs are intact',
    'Client progress data remains accessible when you return',
    'Subscribe anytime to regain full access',
  ],
  reactivateTitle: 'Ready to continue?',
  reactivateBody:
    'Reactivate your account to pick up right where you left off. Your clients are waiting.',
  cta: 'Reactivate Now',
  feedback:
    "If you decided Tracked isn't for you right now, we'd love to hear why. Your feedback helps us build a better product for coaches like you.",
};

const es: TrialExpiredMessages = {
  preview: 'Tu prueba gratuita de Tracked ha terminado',
  heading: 'Tu prueba gratuita ha terminado',
  intro: (userName) =>
    `Hola ${userName}, tu prueba gratuita de Tracked ha caducado. Tu acceso al panel de coaching se ha pausado, pero no te preocupes: tus datos están a salvo.`,
  dataPreservedTitle: 'Tus datos están a salvo:',
  dataPreserved: [
    'Todos los perfiles de clientes y el historial de entrenamientos están guardados',
    'Tus plantillas y programas de entrenamiento están intactos',
    'Los datos de progreso de los clientes seguirán accesibles cuando vuelvas',
    'Suscríbete cuando quieras para recuperar el acceso completo',
  ],
  reactivateTitle: '¿Listo para continuar?',
  reactivateBody:
    'Reactiva tu cuenta para retomarlo justo donde lo dejaste. Tus clientes te están esperando.',
  cta: 'Reactivar ahora',
  feedback:
    'Si decidiste que Tracked no es para ti por ahora, nos encantaría saber por qué. Tus comentarios nos ayudan a crear un mejor producto para entrenadores como tú.',
};

const fr: TrialExpiredMessages = {
  preview: 'Ton essai gratuit Tracked est terminé',
  heading: 'Ton essai gratuit est terminé',
  intro: (userName) =>
    `Salut ${userName}, ton essai gratuit de Tracked a expiré. Ton accès au tableau de bord de coaching a été suspendu, mais ne t'inquiète pas : tes données sont en sécurité.`,
  dataPreservedTitle: 'Tes données sont conservées :',
  dataPreserved: [
    "Tous les profils clients et l'historique des entraînements sont enregistrés",
    "Tes modèles et programmes d'entraînement sont intacts",
    'Les données de progression des clients restent accessibles à ton retour',
    'Abonne-toi à tout moment pour retrouver un accès complet',
  ],
  reactivateTitle: 'Prêt à continuer ?',
  reactivateBody:
    "Réactive ton compte pour reprendre exactement là où tu t'étais arrêté. Tes clients t'attendent.",
  cta: 'Réactiver maintenant',
  feedback:
    "Si tu as décidé que Tracked n'est pas fait pour toi pour le moment, nous aimerions en connaître la raison. Tes retours nous aident à créer un meilleur produit pour les coachs comme toi.",
};

const de: TrialExpiredMessages = {
  preview: 'Deine Tracked-Testphase ist beendet',
  heading: 'Deine Testphase ist beendet',
  intro: (userName) =>
    `Hallo ${userName}, deine kostenlose Testphase von Tracked ist abgelaufen. Dein Zugriff auf das Coaching-Dashboard wurde pausiert, aber keine Sorge – deine Daten sind sicher.`,
  dataPreservedTitle: 'Deine Daten bleiben erhalten:',
  dataPreserved: [
    'Alle Klientenprofile und der Trainingsverlauf sind gespeichert',
    'Deine Trainingsvorlagen und Programme bleiben unverändert',
    'Die Fortschrittsdaten deiner Klienten bleiben bei deiner Rückkehr zugänglich',
    'Abonniere jederzeit, um wieder vollen Zugriff zu erhalten',
  ],
  reactivateTitle: 'Bereit weiterzumachen?',
  reactivateBody:
    'Reaktiviere dein Konto, um genau dort weiterzumachen, wo du aufgehört hast. Deine Klienten warten auf dich.',
  cta: 'Jetzt reaktivieren',
  feedback:
    'Falls du entschieden hast, dass Tracked gerade nichts für dich ist, würden wir gern erfahren, warum. Dein Feedback hilft uns, ein besseres Produkt für Coaches wie dich zu entwickeln.',
};

const it: TrialExpiredMessages = {
  preview: 'La tua prova gratuita di Tracked è terminata',
  heading: 'La tua prova gratuita è terminata',
  intro: (userName) =>
    `Ciao ${userName}, la tua prova gratuita di Tracked è scaduta. Il tuo accesso alla dashboard di coaching è stato sospeso, ma non preoccuparti: i tuoi dati sono al sicuro.`,
  dataPreservedTitle: 'I tuoi dati sono al sicuro:',
  dataPreserved: [
    'Tutti i profili dei clienti e lo storico degli allenamenti sono salvati',
    'I tuoi modelli e programmi di allenamento sono intatti',
    'I dati sui progressi dei clienti restano accessibili al tuo ritorno',
    "Abbonati in qualsiasi momento per riottenere l'accesso completo",
  ],
  reactivateTitle: 'Pronto a continuare?',
  reactivateBody:
    'Riattiva il tuo account per riprendere esattamente da dove avevi lasciato. I tuoi clienti ti aspettano.',
  cta: 'Riattiva ora',
  feedback:
    'Se hai deciso che Tracked non fa per te in questo momento, ci piacerebbe sapere perché. Il tuo feedback ci aiuta a creare un prodotto migliore per coach come te.',
};

const pt: TrialExpiredMessages = {
  preview: 'Seu teste gratuito do Tracked terminou',
  heading: 'Seu teste gratuito terminou',
  intro: (userName) =>
    `Olá ${userName}, seu teste gratuito do Tracked expirou. Seu acesso ao painel de coaching foi pausado, mas não se preocupe: seus dados estão seguros.`,
  dataPreservedTitle: 'Seus dados estão preservados:',
  dataPreserved: [
    'Todos os perfis de clientes e o histórico de treinos estão salvos',
    'Seus modelos e programas de treino estão intactos',
    'Os dados de progresso dos clientes continuam acessíveis quando você voltar',
    'Assine quando quiser para recuperar o acesso completo',
  ],
  reactivateTitle: 'Pronto para continuar?',
  reactivateBody:
    'Reative sua conta para continuar exatamente de onde parou. Seus clientes estão esperando.',
  cta: 'Reativar agora',
  feedback:
    'Se você decidiu que o Tracked não é para você no momento, adoraríamos saber o motivo. Seu feedback nos ajuda a construir um produto melhor para treinadores como você.',
};

export const trialExpiredMessages: Record<Locale, TrialExpiredMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
