import { useRef } from "react";
import { Link } from "react-router-dom";
import IconArrow from "../components/IconArrow";
import MorphHeadline from "../components/MorphHeadline";
import Placeholder from "../components/Placeholder";
import PortfolioStrip from "../components/PortfolioStrip";
import ServicesOffer from "../components/ServicesOffer";
import WordRotator from "../components/WordRotator";
import { useHeroDrift } from "../lib/hooks";
import { ROUTES } from "../config/routes";
import { SITE } from "../config/site";
import aboutHero from "../../assets/about-hero.jpg";
import aboutStory from "../../assets/about-story.jpg";

const ABOUT_HERO_WORDS = ["rachetable", "finançable", "solide", "vivante"];
const ABOUT_HERO_LINES = [
  "Le marketing",
  "n'est pas un support.",
  ["Il rend une boîte ", <WordRotator key="rot" words={ABOUT_HERO_WORDS} />, "."],
];

const FACTS = [
  ["BASÉE À PARIS 🇫🇷", "CDI · Disponible immédiatement"],
  ["MARKETING & CONTENUS ✨", "De la stratégie au montage — et au code"],
  ["9 ANS DANS LE MÉTIER 💼", "Régie, agence, plateforme tech, indépendante"],
  ["+20 000 FREELANCES INSCRITS 🚀", "LeGratin.io · En organique · CODIR · Actionnaire"],
  ["1,5 M€ LEVÉS · INTÉGRATION NEXORIS 💰", "Ma traction marketing a servi de preuve à la levée d'octobre 2022"],
  ["FR · EN · AR 🌍", "Trilingue (C2 · C1 · C1)"],
];

const EXPERIENCES = [
  {
    slug: "osecom",
    period: "2018 → Aujourd'hui",
    role: "Consultante indépendante · Marketing & Contenus",
    company: "OseCom — micro-entreprise",
    place: "Paris · En direct avec les marques, sans agence",
    bullets: [
      "Menée en parallèle des postes salariés jusqu'en 2024, à temps plein depuis",
      "Une dizaine de clients accompagnés · Forfaits 1-5 K€",
      "Production audiovisuelle : Nuxe (5-6 vidéos 2025), Pierre Fabre, Blissim, Maison Farida, Capsul",
      "Digital complet TPE/PME : MKL Energy (site + supports d'aide à la vente), FlatLab, un pressing",
      "Outil de carrousels construit en JavaScript, assisté par IA — fonctionne en local",
    ],
  },
  {
    slug: "legratin",
    period: "2021 — 2024",
    role: "Head of Community puis Head of Marketing & Growth · CODIR · Actionnaire",
    company: "LeGratin.io — Plateforme tech de freelances IT",
    place: "Paris · Station F (avec 42)",
    bullets: [
      "Arrivée quand l'équipe faisait 4 personnes · Rattachée au fondateur",
      "Head of Community 1 an, puis Head of Marketing & Growth",
      "Construit de zéro : refonte site + DA, blog, webinars, partenariats, stratégie d'acquisition",
      "Machine à contenu : +50 interviews d'experts, +30 webinars, lead magnets",
      "+20 000 freelances inscrits en organique — traction servant de preuve à la levée de 1,5 M€ (oct. 2022)",
      "LeGratin depuis intégrée au groupe Nexoris · Encadrement 2 juniors (UX/UI + marketing)",
    ],
  },
  {
    slug: "kalikado",
    period: "2019 — 2021",
    role: "Cheffe de projet & Business Developer",
    company: "Agence KaliKado",
    place: "Paris · Cycle complet",
    bullets: [
      "Prospection → vente → exécution → bilan : je ramenais mes propres clients",
      "Clients : Andros (Bonne Maman, Mamie Nova), L'Or Espresso, L'Arbre Vert, FDJ",
      "Spécialité : sampling contextuel — grille-pain déclenche confiture, machine à laver déclenche thé",
      "Canaux : box hôtelières, partenariats e-commerce, jeux-concours",
    ],
  },
  {
    slug: "bergamotte",
    period: "2018 — 2019",
    role: "Cheffe de projet Digital",
    company: "Agence Bergamotte",
    place: "Paris · Secteur régulé",
    bullets: [
      "Clients institutionnels : Axa, Macif, Matmut, Banque Populaire",
      "Print autant que digital · Je rédigeais moi-même",
      "Contenus SEO, newsletters, scripts vidéo, benchmarks, recommandations",
      "Pilotage projets de A à Z, organisation par epics",
    ],
  },
  {
    slug: "edusup",
    period: "2017 — 2018",
    role: "Chargée de communication & développement",
    company: "EduSup",
    place: "Toulouse · Seule sur périmètre",
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
    bullets: [
      "Analyse stratégique, veille médias, data",
      "Coordination de projets au sein de la régie",
      "Le point de départ · Comprendre comment se distribue l'attention — d'abord dans un média régional, aujourd'hui dans les LLM",
    ],
  },
];

const EDUCATION = [
  {
    period: "2024 — 2025",
    degree: "Développeur Full-Stack JavaScript",
    school: "GOMYCODE · Temps plein",
    text: "Stack MERN (React, Node.js, MongoDB, SQL) · méthodologie agile. Non pas pour devenir développeuse, mais pour arrêter de dépendre d'un tiers pour faire exister une idée.",
  },
  {
    period: "2018 — 2019",
    degree: "Master 2 Marketing Digital & E-business",
    school: "ESG Paris",
    text: "Stratégie digitale, SEO/SEA, e-commerce, data & automation, UX/UI, gestion de projet.",
  },
  {
    period: "2017 — 2018",
    degree: "Master 1 Communication 360°",
    school: "European Communication School · Toulouse",
    text: "Communication intégrée — un socle qui structure ma façon d'articuler stratégie et exécution.",
  },
  {
    period: "2014 — 2017",
    degree: "Licence Information-Communication",
    school: "Université Côte d'Azur · Nice",
    text: "Parcours Organisations & stratégies numériques. Fondamentaux : communication, art, anthropologie, web.",
  },
  {
    period: "2013 — 2014",
    degree: "Anglais général",
    school: "Kaplan International Languages · Londres",
    text: "Année anglophone pour ancrer un niveau opérationnel.",
  },
  {
    period: "2013",
    degree: "Baccalauréat Scientifique",
    school: "Lycée Pierre Mendès France · Tunis",
    text: "Filière scientifique. Point de départ.",
  },
];

const PILLARS = [
  ["01", "Partir des données", "Les données parlent. C'est ma première étape sur toute mission, avant même de discuter d'idées."],
  ["02", "Partir de l'objectif", "Pas du canal. Je commence par le problème et le résultat visé, pas par le tool ou la plateforme."],
  ["03", "Sortir des routines", "Je déteste \"on fait comme ça parce qu'on a toujours fait comme ça\". Le levier pertinent, on le choisit — on ne l'hérite pas."],
];

export default function AboutPage() {
  return (
    <main className="page page--about">
      <AboutHero />

      <section className="about-philo about-philo--with-media" data-reveal>
        <div className="about-philo__media">
          <Placeholder ratio="4/5" src={aboutStory} alt="Essia au travail" />
        </div>
        <div className="about-philo__body">
          <h2>Mon histoire.</h2>
          <p>
            <strong>D'où je viens.</strong> J'ai commencé du côté où l'on
            exécute : projets éditoriaux, print et digital, pour Axa, Macif,
            Matmut et Banque Populaire chez Bergamotte. Puis chez KaliKado,
            un rôle en cycle complet — j'allais chercher mes clients, je
            leur vendais la campagne, et je l'exécutais moi-même. C'est là
            que j'ai appris ce qu'un client attend vraiment : pas une idée
            brillante, une idée qui sort dans les temps et qui produit un
            chiffre.
          </p>
          <p>
            <strong>Ce que j'ai construit.</strong> Quand je suis arrivée
            chez LeGratin.io, plateforme de freelances incubée à Station F
            avec 42, on était quatre. J'ai commencé comme Head of Community :
            faire venir des développeurs freelance, qui sont l'une des
            audiences les plus difficiles à convaincre en marketing. Au bout
            d'un an je suis devenue Head of Marketing & Growth, rattachée au
            fondateur, avec deux personnes à encadrer. J'ai construit le
            blog, les webinars, les partenariats, les lead magnets, la
            stratégie d'acquisition — 50 interviews d'experts et de
            directeurs techniques, une trentaine de webinars, plus de
            20 000 freelances inscrits, presque entièrement en organique.
            Ces chiffres ont servi de traction pour lever 1,5 M€. J'étais
            aussi actionnaire. LeGratin a depuis rejoint le groupe Nexoris.
          </p>
          <p>
            <strong>Où je vais.</strong> À Station F, j'étais entourée de
            développeurs. Ça m'a donné envie de m'y mettre : un an de
            bootcamp full-stack JavaScript, à temps plein. Pas pour devenir
            développeuse, mais pour arrêter de dépendre de quelqu'un
            d'autre pour faire exister une idée. Depuis, je construis mes
            propres outils — dont un qui transforme les articles de blog en
            carrousels et qui permet à une petite entreprise d'exister sur
            les réseaux sans recruter. Je cherche une équipe où la personne
            qui pense la marque est aussi celle qui a les mains dans le
            cambouis.
          </p>
        </div>
      </section>

      <ServicesOffer />

      <section className="about-facts" data-reveal>
        {FACTS.map(([eyebrow, value], i) => (
          <div
            key={eyebrow}
            className="about-facts__row"
            data-reveal
            style={{ "--delay": i * 0.06 + "s" }}
          >
            <span className="mono">{eyebrow}</span>
            <span className="about-facts__val">{value}</span>
          </div>
        ))}
      </section>

      <section className="about-timeline" data-reveal>
        <h2>Expériences.</h2>
        <p className="about-timeline__intro">
          Un parcours entre régie, agence, plateforme tech et indépendante —
          sept postes, quatre univers, une même obsession.
        </p>
        <div className="about-timeline__track">
          {EXPERIENCES.map((exp, i) => (
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
              <span className="about-timeline__dot" aria-hidden="true" />
              <div className="about-timeline__side about-timeline__side--right">
                <ul className="about-timeline__bullets">
                  {(exp.bullets || []).map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {i < 3 && exp.slug && (
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

      <section className="about-pillars" data-reveal>
        <h2>Formation.</h2>
        <p className="about-pillars__intro">
          De la communication aux médias, du marketing digital au dev — chaque
          étape m'a donné une nouvelle façon de lire le métier.
        </p>
        <div className="about-pillars__grid">
          {EDUCATION.map((ed, i) => (
            <div
              key={ed.period + ed.degree}
              className="about-pillars__card"
              data-reveal
              style={{ "--delay": i * 0.1 + "s" }}
            >
              <span className="about-pillars__n">{ed.period}</span>
              <h4>{ed.degree}{ed.school && ` — ${ed.school}`}</h4>
              <p>{ed.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-pillars" data-reveal>
        <h2>Ma méthode.</h2>
        <p className="about-pillars__intro">
          Trois principes qui structurent la façon dont je prends une mission.
        </p>
        <div className="about-pillars__grid">
          {PILLARS.map(([n, title, text], i) => (
            <div
              key={n}
              className="about-pillars__card"
              data-reveal
              style={{ "--delay": i * 0.1 + "s" }}
            >
              <span className="about-pillars__n">{n}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <PortfolioStrip
        title={
          <h2>Mes réalisations</h2>
        }
      />

      <section className="about-cta">
        <h2>Un poste à me proposer ?</h2>
        <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--olive">
          Télécharger mon CV
        </a>
      </section>
    </main>
  );
}

function AboutHero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  useHeroDrift(sectionRef, textRef, mediaRef);

  return (
    <section className="about-hero" ref={sectionRef}>
      <div className="about-hero__row">
        <div className="about-hero__col-text" ref={textRef}>
          <span className="mono">HI, MOI C'EST ESSIA · RESPONSABLE MARKETING & CONTENUS</span>
          <MorphHeadline lines={ABOUT_HERO_LINES} accentIdx={-1} />
          <p>
            Marque, contenu, communauté, croissance : les quatre bouts que je
            tiens en parallèle depuis 9 ans dans le métier. Aujourd'hui en
            recherche d'un CDI à Paris — dans une équipe où le marketing n'est
            pas un support.
          </p>
          <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--olive about-hero__cta">
            Télécharger mon CV
          </a>
        </div>
        <div className="about-hero__col-media" ref={mediaRef}>
          <div className="about-hero__media">
            <img src={aboutHero} alt="Portrait d'Essia" className="about-hero__img" />
          </div>
          <div className="about-hero__chip">
            <span className="mono">meet essia · marketing & contenus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
