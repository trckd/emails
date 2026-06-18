import type { Locale } from '../i18n/locales.js';

export interface BodyweightGoalReachedMessages {
  preview: string;
  heading: string;
  goalMessageGain: string;
  goalMessageLoss: string;
  goalMessageMaintain: string;
  goalMessageDefault: string;
  achievementTitle: string;
  labelStartingWeight: string;
  labelCurrentWeight: string;
  labelGoalWeight: string;
  // gained: direction flag; weight/unit are formatted in the template;
  // timeToGoal is a caller-provided duration string (passed through).
  changeLine: (
    gained: boolean,
    weight: string,
    unit: string,
    timeToGoal?: string
  ) => string;
  congrats: (userName: string) => string;
  cta: string;
  whatsNextTitle: string;
  whatsNextItems: { title: string }[];
  quote: string;
  quoteClosing: string;
}

const en: BodyweightGoalReachedMessages = {
  preview: "Congratulations! You've reached your bodyweight goal on Tracked",
  heading: 'Goal Achieved!',
  goalMessageGain: "You've reached your weight gain goal!",
  goalMessageLoss: "You've reached your weight loss goal!",
  goalMessageMaintain: "You've successfully maintained your goal weight!",
  goalMessageDefault: "You've reached your goal!",
  achievementTitle: 'Your Achievement:',
  labelStartingWeight: 'Starting Weight',
  labelCurrentWeight: 'Current Weight',
  labelGoalWeight: 'Goal Weight',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'gained' : 'lost';
    const time = timeToGoal ? ` in ${timeToGoal}` : '';
    return `You've ${verb} ${weight} ${unit}${time}!`;
  },
  congrats: (userName) =>
    `Congratulations, ${userName}! This is a huge accomplishment that took dedication, consistency, and hard work. You set a goal and achieved it - that's something to be proud of!`,
  cta: 'View Your Progress',
  whatsNextTitle: "What's Next?",
  whatsNextItems: [
    { title: 'Maintain your progress with consistent training' },
    { title: 'Set a new goal to continue your journey' },
    { title: 'Share your success with the Tracked community' },
    { title: 'Reflect on what worked and keep building on it' },
  ],
  quote: '"Success is the sum of small efforts repeated day in and day out."',
  quoteClosing: 'You proved it - congratulations! 💪',
};

const es: BodyweightGoalReachedMessages = {
  preview:
    '¡Felicidades! Has alcanzado tu objetivo de peso corporal en Tracked',
  heading: '¡Objetivo alcanzado!',
  goalMessageGain: '¡Has alcanzado tu objetivo de aumento de peso!',
  goalMessageLoss: '¡Has alcanzado tu objetivo de pérdida de peso!',
  goalMessageMaintain: '¡Has mantenido con éxito tu peso objetivo!',
  goalMessageDefault: '¡Has alcanzado tu objetivo!',
  achievementTitle: 'Tu logro:',
  labelStartingWeight: 'Peso inicial',
  labelCurrentWeight: 'Peso actual',
  labelGoalWeight: 'Peso objetivo',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'ganado' : 'perdido';
    const time = timeToGoal ? ` en ${timeToGoal}` : '';
    return `¡Has ${verb} ${weight} ${unit}${time}!`;
  },
  congrats: (userName) =>
    `¡Felicidades, ${userName}! Este es un logro enorme que requirió dedicación, constancia y mucho esfuerzo. Te propusiste un objetivo y lo conseguiste: ¡eso es algo de lo que estar orgulloso!`,
  cta: 'Ver tu progreso',
  whatsNextTitle: '¿Y ahora qué?',
  whatsNextItems: [
    { title: 'Mantén tu progreso con un entrenamiento constante' },
    { title: 'Fíjate un nuevo objetivo para continuar tu camino' },
    { title: 'Comparte tu éxito con la comunidad de Tracked' },
    {
      title: 'Reflexiona sobre lo que funcionó y sigue construyendo sobre ello',
    },
  ],
  quote: '"El éxito es la suma de pequeños esfuerzos repetidos día tras día."',
  quoteClosing: 'Lo demostraste: ¡felicidades! 💪',
};

const fr: BodyweightGoalReachedMessages = {
  preview: 'Félicitations ! Tu as atteint ton objectif de poids sur Tracked',
  heading: 'Objectif atteint !',
  goalMessageGain: 'Tu as atteint ton objectif de prise de poids !',
  goalMessageLoss: 'Tu as atteint ton objectif de perte de poids !',
  goalMessageMaintain: 'Tu as maintenu ton poids cible avec succès !',
  goalMessageDefault: 'Tu as atteint ton objectif !',
  achievementTitle: 'Ta réussite :',
  labelStartingWeight: 'Poids de départ',
  labelCurrentWeight: 'Poids actuel',
  labelGoalWeight: 'Poids cible',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'pris' : 'perdu';
    const time = timeToGoal ? ` en ${timeToGoal}` : '';
    return `Tu as ${verb} ${weight} ${unit}${time} !`;
  },
  congrats: (userName) =>
    `Félicitations, ${userName} ! C'est un accomplissement énorme qui a demandé de la détermination, de la régularité et beaucoup de travail. Tu t'es fixé un objectif et tu l'as atteint : il y a de quoi être fier !`,
  cta: 'Voir ta progression',
  whatsNextTitle: 'Et maintenant ?',
  whatsNextItems: [
    { title: 'Maintiens ta progression avec un entraînement régulier' },
    { title: 'Fixe-toi un nouvel objectif pour continuer ton parcours' },
    { title: 'Partage ta réussite avec la communauté Tracked' },
    { title: 'Réfléchis à ce qui a marché et continue sur ta lancée' },
  ],
  quote: '"Le succès est la somme de petits efforts répétés jour après jour."',
  quoteClosing: "Tu l'as prouvé : félicitations ! 💪",
};

const de: BodyweightGoalReachedMessages = {
  preview: 'Glückwunsch! Du hast dein Körpergewichtsziel bei Tracked erreicht',
  heading: 'Ziel erreicht!',
  goalMessageGain: 'Du hast dein Ziel zur Gewichtszunahme erreicht!',
  goalMessageLoss: 'Du hast dein Ziel zur Gewichtsabnahme erreicht!',
  goalMessageMaintain: 'Du hast dein Zielgewicht erfolgreich gehalten!',
  goalMessageDefault: 'Du hast dein Ziel erreicht!',
  achievementTitle: 'Dein Erfolg:',
  labelStartingWeight: 'Startgewicht',
  labelCurrentWeight: 'Aktuelles Gewicht',
  labelGoalWeight: 'Zielgewicht',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'zugelegt' : 'verloren';
    const time = timeToGoal ? ` in ${timeToGoal}` : '';
    return `Du hast ${weight} ${unit}${time} ${verb}!`;
  },
  congrats: (userName) =>
    `Glückwunsch, ${userName}! Das ist eine großartige Leistung, die Hingabe, Beständigkeit und harte Arbeit erfordert hat. Du hast dir ein Ziel gesetzt und es erreicht - darauf kannst du stolz sein!`,
  cta: 'Deinen Fortschritt ansehen',
  whatsNextTitle: 'Was kommt als Nächstes?',
  whatsNextItems: [
    { title: 'Halte deinen Fortschritt mit beständigem Training' },
    { title: 'Setze dir ein neues Ziel, um deinen Weg fortzusetzen' },
    { title: 'Teile deinen Erfolg mit der Tracked-Community' },
    { title: 'Überlege, was funktioniert hat, und bau darauf auf' },
  ],
  quote:
    '"Erfolg ist die Summe kleiner Anstrengungen, Tag für Tag wiederholt."',
  quoteClosing: 'Du hast es bewiesen - Glückwunsch! 💪',
};

const it: BodyweightGoalReachedMessages = {
  preview:
    'Congratulazioni! Hai raggiunto il tuo obiettivo di peso corporeo su Tracked',
  heading: 'Obiettivo raggiunto!',
  goalMessageGain: 'Hai raggiunto il tuo obiettivo di aumento di peso!',
  goalMessageLoss: 'Hai raggiunto il tuo obiettivo di perdita di peso!',
  goalMessageMaintain: 'Hai mantenuto con successo il tuo peso obiettivo!',
  goalMessageDefault: 'Hai raggiunto il tuo obiettivo!',
  achievementTitle: 'Il tuo traguardo:',
  labelStartingWeight: 'Peso iniziale',
  labelCurrentWeight: 'Peso attuale',
  labelGoalWeight: 'Peso obiettivo',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'guadagnato' : 'perso';
    const time = timeToGoal ? ` in ${timeToGoal}` : '';
    return `Hai ${verb} ${weight} ${unit}${time}!`;
  },
  congrats: (userName) =>
    `Congratulazioni, ${userName}! È un traguardo enorme che ha richiesto dedizione, costanza e tanto impegno. Ti sei posto un obiettivo e l'hai raggiunto: è qualcosa di cui essere orgoglioso!`,
  cta: 'Vedi i tuoi progressi',
  whatsNextTitle: 'E adesso?',
  whatsNextItems: [
    { title: 'Mantieni i tuoi progressi con un allenamento costante' },
    { title: 'Fissa un nuovo obiettivo per continuare il tuo percorso' },
    { title: 'Condividi il tuo successo con la community di Tracked' },
    {
      title: 'Rifletti su ciò che ha funzionato e continua a costruirci sopra',
    },
  ],
  quote:
    '"Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno."',
  quoteClosing: "L'hai dimostrato: congratulazioni! 💪",
};

const pt: BodyweightGoalReachedMessages = {
  preview: 'Parabéns! Você alcançou a sua meta de peso corporal no Tracked',
  heading: 'Meta alcançada!',
  goalMessageGain: 'Você alcançou a sua meta de ganho de peso!',
  goalMessageLoss: 'Você alcançou a sua meta de perda de peso!',
  goalMessageMaintain: 'Você manteve com sucesso o seu peso-meta!',
  goalMessageDefault: 'Você alcançou a sua meta!',
  achievementTitle: 'Sua conquista:',
  labelStartingWeight: 'Peso inicial',
  labelCurrentWeight: 'Peso atual',
  labelGoalWeight: 'Peso-meta',
  changeLine: (gained, weight, unit, timeToGoal) => {
    const verb = gained ? 'ganhou' : 'perdeu';
    const time = timeToGoal ? ` em ${timeToGoal}` : '';
    return `Você ${verb} ${weight} ${unit}${time}!`;
  },
  congrats: (userName) =>
    `Parabéns, ${userName}! Esta é uma grande conquista que exigiu dedicação, constância e muito trabalho. Você definiu uma meta e a alcançou: isso é motivo de orgulho!`,
  cta: 'Ver o seu progresso',
  whatsNextTitle: 'E agora?',
  whatsNextItems: [
    { title: 'Mantenha o seu progresso com treino constante' },
    { title: 'Defina uma nova meta para continuar a sua jornada' },
    { title: 'Compartilhe o seu sucesso com a comunidade do Tracked' },
    { title: 'Reflita sobre o que funcionou e continue evoluindo' },
  ],
  quote: '"O sucesso é a soma de pequenos esforços repetidos dia após dia."',
  quoteClosing: 'Você provou isso: parabéns! 💪',
};

export const bodyweightGoalReachedMessages: Record<
  Locale,
  BodyweightGoalReachedMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
