import type { Locale } from '../i18n/locales.js';

export interface AnniversaryMessages {
  preview: (yearsLabel: string) => string;
  heading: (yearsLabel: string) => string;
  /** Localized "N year"/"N years" label, e.g. "1 Year" / "3 Years". */
  yearsLabel: (years: number) => string;
  intro: (userName: string, years: number) => string;
  journeyTitle: string;
  workoutsLogged: string;
  totalVolumeLifted: string;
  closing: string;
  cta: string;
}

const en: AnniversaryMessages = {
  preview: (yearsLabel) => `Happy ${yearsLabel} Anniversary on Tracked!`,
  heading: (yearsLabel) => `Happy ${yearsLabel} Anniversary!`,
  yearsLabel: (years) => (years === 1 ? '1 Year' : `${years} Years`),
  intro: (userName, years) =>
    `Congratulations ${userName}! Today marks ${years} ${
      years === 1 ? 'year' : 'years'
    } since you joined Tracked. Thank you for being part of our community!`,
  journeyTitle: 'Your Journey So Far',
  workoutsLogged: 'workouts logged',
  totalVolumeLifted: 'total volume lifted',
  closing:
    "Here's to another year of crushing goals and getting stronger. Keep up the amazing work!",
  cta: 'View Your Progress',
};

const es: AnniversaryMessages = {
  preview: (yearsLabel) => `¡Feliz aniversario de ${yearsLabel} en Tracked!`,
  heading: (yearsLabel) => `¡Feliz aniversario de ${yearsLabel}!`,
  yearsLabel: (years) => (years === 1 ? '1 año' : `${years} años`),
  intro: (userName, years) =>
    `¡Felicidades ${userName}! Hoy se ${
      years === 1 ? 'cumple' : 'cumplen'
    } ${years} ${
      years === 1 ? 'año' : 'años'
    } desde que te uniste a Tracked. ¡Gracias por ser parte de nuestra comunidad!`,
  journeyTitle: 'Tu camino hasta ahora',
  workoutsLogged: 'entrenamientos registrados',
  totalVolumeLifted: 'volumen total levantado',
  closing:
    'Brindemos por otro año cumpliendo objetivos y haciéndote más fuerte. ¡Sigue con ese gran trabajo!',
  cta: 'Ver tu progreso',
};

const fr: AnniversaryMessages = {
  preview: (yearsLabel) => `Joyeux anniversaire de ${yearsLabel} sur Tracked !`,
  heading: (yearsLabel) => `Joyeux anniversaire de ${yearsLabel} !`,
  yearsLabel: (years) => (years <= 1 ? '1 an' : `${years} ans`),
  intro: (userName, years) =>
    `Félicitations ${userName} ! Aujourd'hui, cela fait ${years} ${
      years <= 1 ? 'an' : 'ans'
    } que tu as rejoint Tracked. Merci de faire partie de notre communauté !`,
  journeyTitle: "Ton parcours jusqu'ici",
  workoutsLogged: 'entraînements enregistrés',
  totalVolumeLifted: 'volume total soulevé',
  closing:
    'À une nouvelle année à atteindre tes objectifs et à devenir plus fort. Continue comme ça !',
  cta: 'Voir ta progression',
};

const de: AnniversaryMessages = {
  preview: (yearsLabel) => `Alles Gute zum ${yearsLabel}-Jubiläum bei Tracked!`,
  heading: (yearsLabel) => `Alles Gute zum ${yearsLabel}-Jubiläum!`,
  yearsLabel: (years) => (years === 1 ? '1 Jahr' : `${years} Jahre`),
  intro: (userName, years) =>
    `Herzlichen Glückwunsch ${userName}! Heute ${
      years === 1 ? 'ist es 1 Jahr' : `sind es ${years} Jahre`
    } her, dass du zu Tracked gekommen bist. Danke, dass du Teil unserer Community bist!`,
  journeyTitle: 'Dein bisheriger Weg',
  workoutsLogged: 'Workouts protokolliert',
  totalVolumeLifted: 'Gesamtvolumen gehoben',
  closing:
    'Auf ein weiteres Jahr, in dem du deine Ziele knackst und stärker wirst. Mach weiter so!',
  cta: 'Deinen Fortschritt ansehen',
};

const it: AnniversaryMessages = {
  preview: (yearsLabel) => `Buon anniversario di ${yearsLabel} su Tracked!`,
  heading: (yearsLabel) => `Buon anniversario di ${yearsLabel}!`,
  yearsLabel: (years) => (years === 1 ? '1 anno' : `${years} anni`),
  intro: (userName, years) =>
    `Congratulazioni ${userName}! Oggi ${
      years === 1 ? 'è passato 1 anno' : `sono passati ${years} anni`
    } da quando ti sei unito a Tracked. Grazie per far parte della nostra community!`,
  journeyTitle: 'Il tuo percorso finora',
  workoutsLogged: 'allenamenti registrati',
  totalVolumeLifted: 'volume totale sollevato',
  closing:
    'Brindiamo a un altro anno di obiettivi raggiunti e di forza in crescita. Continua così!',
  cta: 'Vedi i tuoi progressi',
};

const pt: AnniversaryMessages = {
  preview: (yearsLabel) => `Feliz aniversário de ${yearsLabel} no Tracked!`,
  heading: (yearsLabel) => `Feliz aniversário de ${yearsLabel}!`,
  yearsLabel: (years) => (years === 1 ? '1 ano' : `${years} anos`),
  intro: (userName, years) =>
    `Parabéns ${userName}! Hoje ${
      years === 1 ? 'completa 1 ano' : `completam ${years} anos`
    } desde que você entrou no Tracked. Obrigado por fazer parte da nossa comunidade!`,
  journeyTitle: 'Sua jornada até aqui',
  workoutsLogged: 'treinos registrados',
  totalVolumeLifted: 'volume total levantado',
  closing:
    'Que venha mais um ano alcançando metas e ficando mais forte. Continue com esse ótimo trabalho!',
  cta: 'Ver seu progresso',
};

export const anniversaryMessages: Record<Locale, AnniversaryMessages> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
