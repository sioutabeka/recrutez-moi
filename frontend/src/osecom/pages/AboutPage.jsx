import { useRef } from "react";
import { Link } from "react-router-dom";
import MorphHeadline from "../components/MorphHeadline";
import Placeholder from "../components/Placeholder";
import WordRotator from "../components/WordRotator";
import { useHeroDrift } from "../lib/hooks";
import { ROUTES } from "../config/routes";
import { SITE } from "../config/site";
import aboutHero from "../../assets/essia-portrait.jpg";
import aboutStory from "../../assets/essia-story.png";
import logoGomycode from "../../assets/logo-gomycode.png";
import logoEsg from "../../assets/logo-esg-paris.png";
import logoEcs from "../../assets/logo-ecs-toulouse.png";
import logoUcaNice from "../../assets/logo-universite-nice.png";
import logoKaplan from "../../assets/logo-kaplan.png";
import logoPmf from "../../assets/logo-pmf-tunis.jpeg";

const ABOUT_HERO_WORDS = ["marketing", "growth", "content", "community"];
const ABOUT_HERO_LINES = [
  "9 ans à l'intersection",
  "du marketing, du contenu",
  ["et de la ", <WordRotator key="rot" words={ABOUT_HERO_WORDS} />, "."],
];

const EDUCATION = [
  {
    period: "2024 — 2025",
    degree: "Développeur Full-Stack JavaScript",
    school: "GOMYCODE",
    text: "Stack MERN (React, Node.js, MongoDB, SQL).",
    monogram: "GC",
    logo: logoGomycode,
    tone: "olive",
  },
  {
    period: "2018 — 2019",
    degree: "Master 2 Marketing Digital & E-business",
    school: "ESG Paris",
    text: "Stratégie digitale, SEO/SEA, e-commerce, data & automation.",
    monogram: "EP",
    logo: logoEsg,
    tone: "rose",
  },
  {
    period: "2017 — 2018",
    degree: "Master 1 Communication 360°",
    school: "European Communication School · Toulouse",
    text: "Communication intégrée — stratégie et exécution.",
    monogram: "EC",
    logo: logoEcs,
    tone: "sky",
  },
  {
    period: "2014 — 2017",
    degree: "Licence Information-Communication",
    school: "Université Côte d'Azur · Nice",
    text: "Parcours Organisations & stratégies numériques.",
    monogram: "UC",
    logo: logoUcaNice,
    tone: "yellow",
  },
  {
    period: "2013 — 2014",
    degree: "Anglais général",
    school: "Kaplan International Languages · Londres",
    text: "Année anglophone.",
    monogram: "KL",
    logo: logoKaplan,
    tone: "cream",
  },
  {
    period: "2013",
    degree: "Baccalauréat Scientifique",
    school: "Lycée Pierre Mendès France · Tunis",
    text: "Filière scientifique.",
    monogram: "PMF",
    logo: logoPmf,
    tone: "brown",
  },
];

const TOOLS = [
  {
    category: "BUREAUTIQUE & OFFICE 💼",
    items: [
      { name: "Excel", level: 3 },
      { name: "PowerPoint", level: 3 },
      { name: "Word", level: 3 },
      { name: "Google Sheets", level: 3 },
      { name: "Google Docs", level: 3 },
      { name: "Google Slides", level: 3 },
      { name: "Keynote", level: 2 },
    ],
  },
  {
    category: "STRATÉGIE & GESTION 📋",
    items: [
      { name: "Notion", level: 3 },
      { name: "Airtable", level: 2 },
      { name: "Figma", level: 2 },
      { name: "Miro", level: 2 },
    ],
  },
  {
    category: "MARKETING & CRM 📮",
    items: [
      { name: "HubSpot", level: 3 },
      { name: "Brevo", level: 3 },
      { name: "Lemlist", level: 2 },
      { name: "LinkedIn Helper", level: 2 },
      { name: "PhantomBuster", level: 2 },
    ],
  },
  {
    category: "ADS & ANALYTICS 📊",
    items: [
      { name: "Meta Ads", level: 2 },
      { name: "TikTok Ads", level: 2 },
      { name: "Google Ads", level: 2 },
      { name: "SEMrush", level: 3 },
      { name: "GA4", level: 3 },
      { name: "Meta Business Suite", level: 3 },
      { name: "Looker Studio", level: 2 },
    ],
  },
  {
    category: "CONTENU & CRÉA 🎬",
    items: [
      { name: "CapCut", level: 3 },
      { name: "Premiere Pro", level: 3 },
      { name: "After Effects", level: 2 },
      { name: "Canva", level: 3 },
      { name: "Photoshop", level: 2 },
      { name: "Illustrator", level: 2 },
    ],
  },
  {
    category: "IA · TEXTE, IMAGE & VIDÉO 🤖",
    items: [
      { name: "Claude", level: 3 },
      { name: "Skills & MCP", level: 3 },
      { name: "ChatGPT", level: 3 },
      { name: "Gemini", level: 2 },
      { name: "Midjourney", level: 3 },
      { name: "Runway", level: 2 },
      { name: "ElevenLabs", level: 2 },
      { name: "Descript", level: 2 },
      { name: "Adobe Firefly", level: 2 },
    ],
  },
  {
    category: "AUTOMATISATION & NO-CODE ⚙️",
    items: [
      { name: "Make", level: 3 },
      { name: "n8n", level: 2 },
      { name: "Zapier", level: 2 },
    ],
  },
  {
    category: "DÉVELOPPEMENT 💻",
    items: [
      { name: "JavaScript", level: 2 },
      { name: "React", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "Node.js", level: 2 },
      { name: "MongoDB", level: 2 },
      { name: "SQL", level: 2 },
      { name: "Git", level: 2 },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="page page--about">
      <AboutHero />
      <Story />
      <Formation />
      <Tools />
      <AboutCta />
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
          <span className="mono">HI, MOI C'EST ESSIA · MARKETING, GROWTH & CONTENT</span>
          <MorphHeadline lines={ABOUT_HERO_LINES} accentIdx={-1} />
          <p>
            Née à Tunis, formée à Nice, Toulouse, Paris et Londres.
            Aujourd'hui en recherche d'un CDI à Paris, avec une seule
            condition : pouvoir exécuter ce que je sais faire, et avoir
            l'espace pour apprendre le reste.
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
            <span className="mono">meet essia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="about-philo about-philo--with-media" data-reveal>
      <div className="about-philo__media">
        <Placeholder ratio="4/5" src={aboutStory} alt="Essia au travail" />
      </div>
      <div className="about-philo__body">
        <h2>Mon histoire.</h2>
        <p>
          <strong>Racines.</strong> J'ai grandi à Tunis, entre l'art (arts
          plastiques au lycée), le web (Skyblog puis tout ce qui a suivi) et
          la course à pied. Bac S au Lycée Pierre Mendès France, une année
          anglophone à Kaplan Londres, puis la France en trois villes :
          Licence Information-Communication à l'Université Côte d'Azur,
          Master 1 Communication 360° à l'ECS Toulouse, Master 2 Marketing
          Digital & E-business à l'ESG Paris.
        </p>
        <p>
          <strong>D'où je viens.</strong> J'ai commencé du côté où l'on
          exécute : projets éditoriaux, print et digital, pour Axa, Macif,
          Matmut et Banque Populaire chez Bergamotte. Puis chez KaliKado, un
          rôle en cycle complet — j'allais chercher mes clients, je leur
          vendais la campagne, et je l'exécutais moi-même. C'est là que j'ai
          appris ce qu'un client attend vraiment : pas une idée brillante,
          une idée qui sort dans les temps et qui produit un chiffre.
        </p>
        <p>
          <strong>Ce que j'ai construit.</strong> Chez LeGratin.io, plateforme
          de freelances incubée à Station F avec 42, je suis arrivée quand
          l'équipe était à quatre. J'y ai construit toute la fonction
          marketing pendant trois ans, d'abord comme Head of Community puis
          comme Head of Marketing & Growth, rattachée au fondateur, avec deux
          personnes à encadrer. J'étais aussi actionnaire.
        </p>
        <p>
          <strong>Où je vais.</strong> À Station F, j'étais entourée de
          développeurs. Ça m'a donné envie de m'y mettre : une formation
          full-stack JavaScript chez GOMYCODE, en parallèle du lancement de
          mon activité freelance. Pas pour devenir développeuse, mais pour
          arrêter de dépendre de quelqu'un d'autre pour faire exister une
          idée. Depuis, je construis mes propres outils — dont un qui
          transforme les articles de blog en carrousels et qui permet à une
          petite entreprise d'exister sur les réseaux sans recruter.
        </p>
      </div>
    </section>
  );
}

function Formation() {
  return (
    <section className="formation" data-reveal>
      <div className="formation__head">
        <h2>Formation.</h2>
        <p>
          De la communication aux médias, du marketing digital au dev — cinq
          villes, six étapes, une même curiosité.
        </p>
      </div>
      <div className="formation__list">
        {EDUCATION.map((ed, i) => (
          <article
            key={ed.period + ed.degree}
            className="formation__item"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <div
              className={`formation__logo formation__logo--${ed.tone || "olive"}${ed.logo ? " formation__logo--img" : ""}`}
              aria-hidden="true"
            >
              {ed.logo ? <img src={ed.logo} alt="" /> : (ed.monogram || "·")}
            </div>
            <div className="formation__period">
              <span>{ed.period}</span>
            </div>
            <div className="formation__body">
              <h4 className="formation__degree">{ed.degree}</h4>
              {ed.school && (
                <span className="formation__school">{ed.school}</span>
              )}
              {ed.text && <p className="formation__text">{ed.text}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="about-tools" data-reveal>
      <div className="about-tools__head">
        <span className="mono">MES OUTILS · PAR ACTIVITÉ</span>
        <h2>Ce que j'utilise vraiment.</h2>
        <p>
          Un inventaire honnête, avec un indicateur de niveau par outil.
        </p>
        <div className="about-tools__legend mono">
          <span>
            <span className="about-tools__dots">
              <i className="on" />
              <i />
              <i />
            </span>
            <span>pratique</span>
          </span>
          <span>
            <span className="about-tools__dots">
              <i className="on" />
              <i className="on" />
              <i />
            </span>
            <span>confirmé</span>
          </span>
          <span>
            <span className="about-tools__dots">
              <i className="on" />
              <i className="on" />
              <i className="on" />
            </span>
            <span>expert</span>
          </span>
        </div>
      </div>
      {TOOLS.map(({ category, items }, i) => (
        <div
          key={category}
          className="about-tools__group"
          data-reveal
          style={{ "--delay": i * 0.05 + "s" }}
        >
          <span className="mono about-tools__cat">{category}</span>
          <div className="about-tools__chips">
            {items.map(({ name, level }) => (
              <span key={name} className="about-tools__chip" aria-label={`${name} — niveau ${level} sur 3`}>
                <span>{name}</span>
                <span className="about-tools__dots" aria-hidden="true">
                  <i className={level >= 1 ? "on" : ""} />
                  <i className={level >= 2 ? "on" : ""} />
                  <i className={level >= 3 ? "on" : ""} />
                </span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function AboutCta() {
  return (
    <section className="about-cta">
      <span className="mono about-cta__eyebrow">VOUS RECRUTEZ ?</span>
      <h2>Parlons Growth, Community & Marketing.</h2>
      <p className="about-cta__text">
        Envie d'en discuter ? Je réponds vite, en direct.
      </p>
      <div className="about-cta__row">
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
        <Link to={ROUTES.services} className="btn btn--ghost">
          Voir mon expérience
        </Link>
      </div>
    </section>
  );
}
