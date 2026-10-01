import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutHero from "../../assets/about-hero.jpg";
import IconArrow from "../components/IconArrow";
import MorphHeadline from "../components/MorphHeadline";
import { useHeroDrift } from "../lib/hooks";
import { SERVICES } from "../data/services";
import { ROUTES } from "../config/routes";

const SRV_HERO_LINES = [
  "9 ans dans le métier.",
  "Sept expériences.",
  "Une même obsession.",
];

// Rich experience list — merge SERVICES data (has intro/tools/results) with additional Timeline metadata
const TIMELINE = [
  {
    slug: "osecom",
    period: "Avr. 2026 → Aujourd'hui",
    role: "Fondatrice & Creative Director",
    company: "OseCom — société",
    place: "Paris · Hybride · En direct avec les marques",
    monogram: "OS",
    tone: "olive",
    bullets: [
      "Société fondée en avril 2026, en continuation de missions freelance menées en parallèle depuis 2018",
      "Une dizaine de clients accompagnés · Forfaits 1-5 K€",
      "Production audiovisuelle : Nuxe, Pierre Fabre, Blissim, Maison Farida, Capsul",
      "Digital complet TPE/PME : MKL Energy, FlatLab, un pressing",
      "Outil de carrousels construit en JavaScript, assisté par IA",
    ],
  },
  {
    slug: "legratin",
    period: "2021 — 2024",
    role: "Head of Community puis Head of Marketing & Growth · CODIR · Actionnaire",
    company: "LeGratin.io — Plateforme tech de freelances IT",
    place: "Paris · Station F (avec 42)",
    monogram: "LG",
    tone: "rose",
    bullets: [
      "Arrivée quand l'équipe faisait 4 personnes · Rattachée au fondateur",
      "Construction de toute la fonction marketing sur 3 ans",
      "Encadrement de 2 juniors (UX/UI + marketing)",
      "LeGratin depuis intégrée au groupe Nexoris",
    ],
  },
  {
    slug: "kalikado",
    period: "Mai 2019 → Janv. 2021",
    role: "Cheffe de projet & Business Developer",
    company: "Agence KaliKado — Conseil & Solutions Sampling",
    place: "Neuilly-sur-Seine · Cycle complet",
    monogram: "KK",
    tone: "yellow",
    bullets: [
      "Prospection → vente → exécution → bilan : je ramenais mes propres clients",
      "Clients : Groupe Andros (Bonne Maman, Mamie Nova), L'Or Espresso, L'Arbre Vert, FDJ",
      "Spécialité : sampling contextuel — grille-pain déclenche confiture",
      "Canaux : box hôtelières, partenariats e-commerce, jeux-concours",
    ],
  },
  {
    slug: "bergamotte",
    period: "2018 — 2019",
    role: "Cheffe de projet Digital",
    company: "Agence Bergamotte",
    place: "Paris · Secteur régulé",
    monogram: "BG",
    tone: "sky",
    bullets: [
      "Clients institutionnels : Axa, Macif, Matmut, Banque Populaire",
      "Print autant que digital · Je rédigeais moi-même",
      "Contenus SEO, newsletters, scripts vidéo, benchmarks",
      "Pilotage projets de A à Z, organisation par epics",
    ],
  },
  {
    slug: "edusup",
    period: "2017 — 2018",
    role: "Chargée de communication & développement",
    company: "EduSup",
    place: "Toulouse · Seule sur périmètre",
    monogram: "ES",
    tone: "cream",
    bullets: [
      "Stratégie de communication globale et digitale",
      "Campagnes radio et affichage (conception + déploiement)",
      "Relations presse avec retombées obtenues",
      "Organisation d'événements · Contenus multi-formats",
    ],
  },
  {
    slug: "universite-nice",
    period: "2016 — 2017",
    role: "Community Manager",
    company: "Université Nice Sophia Antipolis",
    place: "Nice",
    monogram: "UN",
    tone: "yellow",
    bullets: [
      "Projet de bibliothèque numérique",
      "Structuration de contenus · Rédaction web",
      "Community management",
    ],
  },
  {
    slug: "nice-matin",
    period: "2015",
    role: "Planning stratégique",
    company: "Groupe Nice-Matin — Régie publicitaire",
    place: "Nice · Premier poste",
    monogram: "NM",
    tone: "brown",
    bullets: [
      "Analyse stratégique, veille médias, data",
      "Coordination de projets au sein de la régie",
      "Le point de départ : comprendre comment se distribue l'attention",
    ],
  },
];

// Experiences with a proper detail page ready
const RICH_SLUGS = ["legratin", "osecom", "kalikado"];

export default function ServicesPage() {
  return (
    <main className="page page--services">
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceFoot />
    </main>
  );
}

function ExperienceHero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  useHeroDrift(sectionRef, textRef, mediaRef);

  return (
    <section className="srv-hero" ref={sectionRef}>
      <div className="srv-hero__row">
        <div className="srv-hero__col-text" ref={textRef}>
          <span className="mono">MON EXPÉRIENCE · RÉGIE, AGENCE, PLATEFORME, INDÉPENDANTE</span>
          <MorphHeadline lines={SRV_HERO_LINES} accentIdx={-1} />
          <p>
            De la régie publicitaire d'un grand média régional en 2015 à la
            plateforme tech incubée à Station F, en passant par deux agences
            et une activité indépendante en direct avec les marques.{" "}
            <strong>Un fil rouge : comprendre comment se distribue l'attention.</strong>
          </p>
          <p className="srv-hero__note">
            Clique sur "En savoir plus" pour ouvrir le détail d'une expérience.
          </p>
          <Link to={ROUTES.contact} className="btn btn--rose">
            Me contacter
          </Link>
        </div>

        <div className="srv-hero__col-media" ref={mediaRef}>
          <div className="srv-hero__media">
            <img src={aboutHero} alt="Essia Ben Kheder — Expériences" className="srv-hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="about-timeline" data-reveal>
      <div className="about-timeline__track">
        {TIMELINE.map((exp, i) => (
          <div
            key={exp.period + exp.company}
            className="about-timeline__item"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <div className="about-timeline__side about-timeline__side--left">
              <span className="about-timeline__period">{exp.period}</span>
              <h4 className="about-timeline__role">{exp.role}</h4>
              <span className="about-timeline__company">{exp.company}</span>
              {exp.place && (
                <span className="about-timeline__place">{exp.place}</span>
              )}
            </div>
            <span
              className={`about-timeline__dot about-timeline__dot--logo about-timeline__dot--${exp.tone || "olive"}`}
              aria-hidden="true"
            >
              {exp.monogram || ""}
            </span>
            <div className="about-timeline__side about-timeline__side--right">
              <ul className="about-timeline__bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {RICH_SLUGS.includes(exp.slug) && (
                <Link
                  to={ROUTES.service(exp.slug)}
                  className="link-arrow about-timeline__cta"
                >
                  En savoir plus
                  <IconArrow size={12} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceFoot() {
  return (
    <section className="srv-foot">
      <div className="srv-foot__card">
        <span className="mono">VOUS RECRUTEZ ?</span>
        <h2>Parlons Growth, Community & Marketing.</h2>
        <p>
          Vous cherchez quelqu'un capable de construire une communauté,
          développer des programmes créateurs et relier ces dispositifs à
          des objectifs d'acquisition et d'engagement ? Discutons.
        </p>
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
