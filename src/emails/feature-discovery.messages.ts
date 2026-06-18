import type { Locale } from '../i18n/locales.js';

export interface FeatureDiscoveryMessages {
  preview: (featureName: string) => string;
  heading: string;
  intro: (userName: string, featureName: string) => string;
  benefitsTitle: string;
  cta: (featureName: string) => string;
  closing: string;
}

const en: FeatureDiscoveryMessages = {
  preview: (featureName) => `Discover ${featureName} on Tracked`,
  heading: 'Unlock More with Tracked',
  intro: (userName, featureName) =>
    `Hi ${userName}, we noticed you haven't tried ${featureName} yet - a powerful feature that could take your training to the next level.`,
  benefitsTitle: "Why you'll love it:",
  cta: (featureName) => `Try ${featureName}`,
  closing:
    "We're constantly adding new features to help you reach your fitness goals. Stay tuned for more updates!",
};

const es: FeatureDiscoveryMessages = {
  preview: (featureName) => `Descubre ${featureName} en Tracked`,
  heading: 'Saca más partido a Tracked',
  intro: (userName, featureName) =>
    `Hola ${userName}, vimos que aún no has probado ${featureName}, una potente función que podría llevar tu entrenamiento al siguiente nivel.`,
  benefitsTitle: 'Por qué te va a encantar:',
  cta: (featureName) => `Probar ${featureName}`,
  closing:
    'Añadimos nuevas funciones constantemente para ayudarte a alcanzar tus objetivos fitness. ¡Atento a las próximas novedades!',
};

const fr: FeatureDiscoveryMessages = {
  preview: (featureName) => `Découvre ${featureName} sur Tracked`,
  heading: 'Profite encore plus de Tracked',
  intro: (userName, featureName) =>
    `Salut ${userName}, nous avons remarqué que tu n'as pas encore essayé ${featureName}, une fonctionnalité puissante qui pourrait faire passer ton entraînement au niveau supérieur.`,
  benefitsTitle: "Pourquoi tu vas l'adorer :",
  cta: (featureName) => `Essayer ${featureName}`,
  closing:
    "Nous ajoutons sans cesse de nouvelles fonctionnalités pour t'aider à atteindre tes objectifs fitness. Reste à l'affût des prochaines nouveautés !",
};

const de: FeatureDiscoveryMessages = {
  preview: (featureName) => `Entdecke ${featureName} auf Tracked`,
  heading: 'Hol mehr aus Tracked heraus',
  intro: (userName, featureName) =>
    `Hallo ${userName}, uns ist aufgefallen, dass du ${featureName} noch nicht ausprobiert hast – eine starke Funktion, die dein Training auf das nächste Level bringen könnte.`,
  benefitsTitle: 'Warum du sie lieben wirst:',
  cta: (featureName) => `${featureName} ausprobieren`,
  closing:
    'Wir fügen ständig neue Funktionen hinzu, die dir helfen, deine Fitnessziele zu erreichen. Bleib dran für weitere Updates!',
};

const it: FeatureDiscoveryMessages = {
  preview: (featureName) => `Scopri ${featureName} su Tracked`,
  heading: 'Ottieni di più da Tracked',
  intro: (userName, featureName) =>
    `Ciao ${userName}, abbiamo notato che non hai ancora provato ${featureName}, una potente funzione che potrebbe portare il tuo allenamento a un livello superiore.`,
  benefitsTitle: 'Perché ti piacerà:',
  cta: (featureName) => `Prova ${featureName}`,
  closing:
    'Aggiungiamo costantemente nuove funzioni per aiutarti a raggiungere i tuoi obiettivi fitness. Resta sintonizzato per altri aggiornamenti!',
};

const pt: FeatureDiscoveryMessages = {
  preview: (featureName) => `Conheça ${featureName} no Tracked`,
  heading: 'Aproveite mais o Tracked',
  intro: (userName, featureName) =>
    `Olá ${userName}, percebemos que você ainda não experimentou ${featureName}, um recurso poderoso que pode levar seu treino para o próximo nível.`,
  benefitsTitle: 'Por que você vai adorar:',
  cta: (featureName) => `Experimentar ${featureName}`,
  closing:
    'Estamos sempre adicionando novos recursos para ajudar você a alcançar suas metas fitness. Fique de olho nas próximas novidades!',
};

export const featureDiscoveryMessages: Record<
  Locale,
  FeatureDiscoveryMessages
> = {
  en,
  es,
  fr,
  de,
  it,
  pt,
};
