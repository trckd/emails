import type { Locale } from '../i18n/locales.js';

type UrgencyLevel = 'high' | 'medium' | 'low';

export interface ClientInactiveAlertMessages {
  preview: (displayName: string, days: number) => string;
  heading: string;
  intro: (coachName: string) => string;
  /** e.g. "10 days inactive" / "1 day inactive" — grammar per locale. */
  daysInactive: (days: number) => string;
  lastWorkout: (date: string) => string;
  /** Urgency-specific nudge; branch chosen in the template. */
  urgencyMessage: Record<UrgencyLevel, string>;
  sendMessage: string;
  viewProfile: string;
}

const en: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} hasn't logged a workout in ${days} ${days === 1 ? 'day' : 'days'}`,
  heading: 'Client Activity Alert',
  intro: (coachName) =>
    `Hi ${coachName}, one of your clients needs a check-in.`,
  daysInactive: (days) => `${days} ${days === 1 ? 'day' : 'days'} inactive`,
  lastWorkout: (date) => `Last workout: ${date}`,
  urgencyMessage: {
    high: "It's been a while. Reaching out now could be what gets them back on track.",
    medium:
      "A quick message can make a big difference. Consider reaching out to see how they're doing and if there's anything blocking their progress.",
    low: 'A friendly nudge can help them stay on track. Consider sending a quick check-in.',
  },
  sendMessage: 'Send a Message',
  viewProfile: 'View Profile',
};

const es: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} no registra un entrenamiento desde hace ${days} ${days === 1 ? 'día' : 'días'}`,
  heading: 'Alerta de actividad del cliente',
  intro: (coachName) =>
    `Hola ${coachName}, uno de tus clientes necesita un seguimiento.`,
  daysInactive: (days) =>
    `${days} ${days === 1 ? 'día' : 'días'} de inactividad`,
  lastWorkout: (date) => `Último entrenamiento: ${date}`,
  urgencyMessage: {
    high: 'Ha pasado bastante tiempo. Ponerte en contacto ahora podría ser lo que necesita para retomar el rumbo.',
    medium:
      'Un mensaje rápido puede marcar una gran diferencia. Plantéate ponerte en contacto para ver cómo va y si hay algo que bloquea su progreso.',
    low: 'Un empujón amable puede ayudarle a mantener el rumbo. Plantéate enviar un mensaje rápido de seguimiento.',
  },
  sendMessage: 'Enviar un mensaje',
  viewProfile: 'Ver perfil',
};

const fr: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} n'a pas enregistré d'entraînement depuis ${days} ${days <= 1 ? 'jour' : 'jours'}`,
  heading: "Alerte d'activité du client",
  intro: (coachName) =>
    `Salut ${coachName}, l'un de tes clients a besoin d'un suivi.`,
  daysInactive: (days) =>
    `${days} ${days <= 1 ? 'jour' : 'jours'} d'inactivité`,
  lastWorkout: (date) => `Dernier entraînement : ${date}`,
  urgencyMessage: {
    high: 'Cela fait un moment. Le contacter maintenant pourrait être ce qui le remet sur les rails.',
    medium:
      "Un petit message peut faire une grande différence. Pense à le contacter pour voir comment il va et s'il y a quelque chose qui bloque sa progression.",
    low: "Un petit encouragement peut l'aider à rester sur les rails. Pense à lui envoyer un message de suivi rapide.",
  },
  sendMessage: 'Envoyer un message',
  viewProfile: 'Voir le profil',
};

const de: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} hat seit ${days} ${days === 1 ? 'Tag' : 'Tagen'} kein Workout protokolliert`,
  heading: 'Aktivitätswarnung für Klienten',
  intro: (coachName) =>
    `Hallo ${coachName}, einer deiner Klienten braucht einen Check-in.`,
  daysInactive: (days) => `${days} ${days === 1 ? 'Tag' : 'Tage'} inaktiv`,
  lastWorkout: (date) => `Letztes Workout: ${date}`,
  urgencyMessage: {
    high: 'Es ist schon eine Weile her. Jetzt Kontakt aufzunehmen könnte genau das sein, was ihn wieder auf Kurs bringt.',
    medium:
      'Eine kurze Nachricht kann viel bewirken. Überlege, dich zu melden, um zu sehen, wie es läuft und ob etwas seinen Fortschritt blockiert.',
    low: 'Ein freundlicher Anstoß kann helfen, auf Kurs zu bleiben. Überlege, eine kurze Check-in-Nachricht zu senden.',
  },
  sendMessage: 'Nachricht senden',
  viewProfile: 'Profil ansehen',
};

const it: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} non registra un allenamento da ${days} ${days === 1 ? 'giorno' : 'giorni'}`,
  heading: 'Avviso di attività del cliente',
  intro: (coachName) =>
    `Ciao ${coachName}, uno dei tuoi clienti ha bisogno di un check-in.`,
  daysInactive: (days) =>
    `${days} ${days === 1 ? 'giorno' : 'giorni'} di inattività`,
  lastWorkout: (date) => `Ultimo allenamento: ${date}`,
  urgencyMessage: {
    high: "È passato un po' di tempo. Contattarlo ora potrebbe essere ciò che lo rimette in carreggiata.",
    medium:
      "Un messaggio veloce può fare una grande differenza. Valuta di contattarlo per vedere come sta e se c'è qualcosa che blocca i suoi progressi.",
    low: 'Una spinta amichevole può aiutarlo a restare in carreggiata. Valuta di inviare un rapido messaggio di check-in.',
  },
  sendMessage: 'Invia un messaggio',
  viewProfile: 'Vedi profilo',
};

const pt: ClientInactiveAlertMessages = {
  preview: (displayName, days) =>
    `${displayName} não registra um treino há ${days} ${days === 1 ? 'dia' : 'dias'}`,
  heading: 'Alerta de atividade do cliente',
  intro: (coachName) =>
    `Olá ${coachName}, um dos seus clientes precisa de um acompanhamento.`,
  daysInactive: (days) =>
    `${days} ${days === 1 ? 'dia' : 'dias'} de inatividade`,
  lastWorkout: (date) => `Último treino: ${date}`,
  urgencyMessage: {
    high: 'Já faz um tempo. Entrar em contato agora pode ser o que ele precisa para voltar aos trilhos.',
    medium:
      'Uma mensagem rápida pode fazer uma grande diferença. Considere entrar em contato para ver como ele está e se há algo bloqueando o progresso dele.',
    low: 'Um incentivo amigável pode ajudá-lo a se manter nos trilhos. Considere enviar uma mensagem rápida de acompanhamento.',
  },
  sendMessage: 'Enviar mensagem',
  viewProfile: 'Ver perfil',
};

export const clientInactiveAlertMessages: Record<
  Locale,
  ClientInactiveAlertMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
