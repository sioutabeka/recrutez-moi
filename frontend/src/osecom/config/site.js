import { ROUTES } from "./routes";

export const SITE = {
  name: "Essia Ben Kheder",
  founder: "Essia Ben Kheder",
  role: "Responsable Marketing & Contenus",
  targetJob: "CDI · Responsable Marketing & Contenus · Head of Marketing",
  city: "Paris",
  region: "75",
  email: "essiabenkheder@gmail.com",
  emailHref: "mailto:essiabenkheder@gmail.com?subject=Opportunité%20CDI%20—%20Marketing",
  phone: "07 77 00 12 94",
  phoneHref: "tel:+33777001294",
  cvUrl: "/cv-essia-ben-kheder.pdf",
  linkedinUrl: "https://www.linkedin.com/in/essiabenkheder/",
  copyright:
    "© 2026 ESSIA BEN KHEDER · MARKETING & CONTENUS · PARIS · EN RECHERCHE DE CDI",
};

export const SOCIALS = [
  { name: "LinkedIn", handle: "in/essiabenkheder", url: "https://www.linkedin.com/in/essiabenkheder/" },
  { name: "Email", handle: "essiabenkheder@gmail.com", url: "mailto:essiabenkheder@gmail.com" },
  { name: "Téléphone", handle: "07 77 00 12 94", url: "tel:+33777001294" },
];

export const BRANDS = [
  "LeGratin.io",
  "Nuxe",
  "Pierre Fabre",
  "Blissim",
  "Bonne Maman",
  "L'Or Espresso",
  "L'Arbre Vert",
  "MKL Energy",
];

export const NAV_ITEMS = [
  { to: ROUTES.home, label: "Home", end: true },
  { to: ROUTES.about, label: "Portrait" },
  { to: ROUTES.services, label: "Expérience" },
  { to: ROUTES.portfolio, label: "Réalisations" },
];

export const FOOTER_NAV = {
  services: [
    { label: "LeGratin.io", to: ROUTES.service("legratin") },
    { label: "OseCom (freelance)", to: ROUTES.service("osecom") },
    { label: "Agence KaliKado", to: ROUTES.service("kalikado") },
    { label: "Agence Bergamotte", to: ROUTES.service("bergamotte") },
  ],
  explore: [
    { label: "Réalisations", to: ROUTES.portfolio },
    { label: "Me contacter", to: ROUTES.contact },
  ],
  legal: [
    { label: "Mentions légales", to: ROUTES.legal.mentions },
    { label: "Confidentialité", to: ROUTES.legal.privacy },
    { label: "CGU", to: ROUTES.legal.terms },
    { label: "Cookies", to: ROUTES.legal.cookies },
  ],
};
