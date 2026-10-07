import phepheCover from "../../assets/phephe-cover.jpg";
import maxmaraCover from "../../assets/maxmara-cover.jpg";
import epjewelsCover from "../../assets/epjewels-cover.jpg";
import aboutStory from "../../assets/about-story.jpg";
import aboutHero from "../../assets/about-hero.jpg";

// NOTE : les visuels ci-dessous sont des placeholders neutres.
// Essia doit fournir les vrais assets par projet.

export const PORTFOLIO = [
  {
    slug: "outil-carrousels",
    tag: "FREELANCE · MARKETING × CODE × IA · 2025",
    title: "L'outil de carrousels · Marketing + Code + IA",
    description:
      "Un outil construit en JavaScript, assisté par IA, qui transforme les articles de blog en carrousels sociaux éducatifs · au ton et à la DA de chaque marque. Fonctionne en local, sur l'abonnement Claude du client. Meilleure preuve : un pressing local qui publie du contenu régulier sans embaucher personne. La combinaison marketing + code + IA rendue tangible en trente secondes.",
    cover: aboutStory,
    images: [aboutStory, aboutStory, aboutStory],
  },
  {
    slug: "legratin",
    tag: "IN-HOUSE · PLATEFORME TECH · 2021-2024",
    title: "LeGratin.io · Vitrine de projets",
    description:
      "Head of Community puis Head of Marketing & Growth. Arrivée à 4 personnes, actionnaire. Refonte du site, refonte de la direction artistique, blog, 50+ interviews d'experts et de directeurs techniques, 30+ webinars, écosystème communautaire, funnels d'acquisition. +20 000 freelances inscrits en organique · traction ayant servi de preuve à la levée de 1,5 M€ (oct. 2022). LeGratin a depuis été intégrée au groupe Nexoris.",
    cover: aboutHero,
    images: [aboutHero, aboutHero, aboutHero, aboutHero, aboutHero, aboutHero],
  },
  {
    slug: "ugc-creation",
    tag: "FREELANCE · CONTENU & UGC · MARQUES INDÉPENDANTES",
    title: "UGC & création de contenu",
    description:
      "Vidéos courtes, UGC, Reels, TikTok, carrousels · production complète en autonomie : tournage, montage, retouche photo. Contenus créés pour Nuxe, Pierre Fabre, Blissim, Maison Farida, Capsul. Format natif, hooks courts, calibrés pour l'attention social first.",
    cover: phepheCover,
    images: [phepheCover, phepheCover, phepheCover],
  },
  {
    slug: "landing-sites",
    tag: "FREELANCE · WEB · TPE & PME",
    title: "Landing pages & sites fonctionnels",
    description:
      "Sites complets et landing pages livrés en autonomie · de la stratégie éditoriale à la conception, du code au déploiement. Pour MKL Energy, FlatLab (conciergerie) et d'autres TPE/PME. Formation full-stack JavaScript (GOMYCODE) mise à profit pour ne dépendre de personne.",
    cover: epjewelsCover,
    images: [epjewelsCover, epjewelsCover, epjewelsCover],
  },
];
