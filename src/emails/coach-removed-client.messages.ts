import type { Locale } from '../i18n/locales.js';

export interface CoachRemovedClientMessages {
  preview: (coachName: string) => string;
  heading: string;
  intro: (clientName: string, coachName: string) => string;
  dataNotice: string;
  closing: string;
}

const en: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Update to your coaching relationship with ${coachName}`,
  heading: 'Coaching Relationship Update',
  intro: (clientName, coachName) =>
    `Hi ${clientName}, ${coachName} has ended your coaching relationship on Tracked.`,
  dataNotice:
    'Your workout history and progress data remain available in your account. You can continue using Tracked independently or connect with a new coach.',
  closing:
    "Thank you for using Tracked. If you have any questions or concerns, please don't hesitate to reach out to our support team.",
};

const es: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Actualización de tu relación de entrenamiento con ${coachName}`,
  heading: 'Actualización de la relación de entrenamiento',
  intro: (clientName, coachName) =>
    `Hola ${clientName}, ${coachName} ha finalizado tu relación de entrenamiento en Tracked.`,
  dataNotice:
    'Tu historial de entrenamientos y tus datos de progreso siguen disponibles en tu cuenta. Puedes seguir usando Tracked por tu cuenta o conectar con un nuevo entrenador.',
  closing:
    'Gracias por usar Tracked. Si tienes alguna pregunta o inquietud, no dudes en contactar con nuestro equipo de soporte.',
};

const fr: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Mise à jour de ta relation de coaching avec ${coachName}`,
  heading: 'Mise à jour de la relation de coaching',
  intro: (clientName, coachName) =>
    `Salut ${clientName}, ${coachName} a mis fin à ta relation de coaching sur Tracked.`,
  dataNotice:
    "Ton historique d'entraînements et tes données de progression restent disponibles dans ton compte. Tu peux continuer à utiliser Tracked en autonomie ou te connecter avec un nouveau coach.",
  closing:
    "Merci d'utiliser Tracked. Si tu as des questions ou des préoccupations, n'hésite pas à contacter notre équipe d'assistance.",
};

const de: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Update zu deiner Coaching-Beziehung mit ${coachName}`,
  heading: 'Update zur Coaching-Beziehung',
  intro: (clientName, coachName) =>
    `Hallo ${clientName}, ${coachName} hat deine Coaching-Beziehung auf Tracked beendet.`,
  dataNotice:
    'Dein Trainingsverlauf und deine Fortschrittsdaten bleiben in deinem Konto verfügbar. Du kannst Tracked eigenständig weiternutzen oder dich mit einem neuen Coach verbinden.',
  closing:
    'Danke, dass du Tracked nutzt. Wenn du Fragen oder Anliegen hast, wende dich gerne an unser Support-Team.',
};

const it: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Aggiornamento sul tuo rapporto di coaching con ${coachName}`,
  heading: 'Aggiornamento sul rapporto di coaching',
  intro: (clientName, coachName) =>
    `Ciao ${clientName}, ${coachName} ha terminato il tuo rapporto di coaching su Tracked.`,
  dataNotice:
    'Lo storico dei tuoi allenamenti e i dati sui progressi restano disponibili nel tuo account. Puoi continuare a usare Tracked in autonomia o metterti in contatto con un nuovo coach.',
  closing:
    'Grazie per aver usato Tracked. Se hai domande o dubbi, non esitare a contattare il nostro team di assistenza.',
};

const pt: CoachRemovedClientMessages = {
  preview: (coachName) =>
    `Atualização da sua relação de treino com ${coachName}`,
  heading: 'Atualização da relação de treino',
  intro: (clientName, coachName) =>
    `Olá ${clientName}, ${coachName} encerrou sua relação de treino no Tracked.`,
  dataNotice:
    'Seu histórico de treinos e seus dados de progresso continuam disponíveis na sua conta. Você pode continuar usando o Tracked por conta própria ou se conectar com um novo treinador.',
  closing:
    'Obrigado por usar o Tracked. Se você tiver qualquer dúvida ou preocupação, não hesite em entrar em contato com nossa equipe de suporte.',
};

export const coachRemovedClientMessages: Record<
  Locale,
  CoachRemovedClientMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
