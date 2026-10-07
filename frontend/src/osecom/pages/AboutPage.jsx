import { useRef } from "react";
import { Link } from "react-router-dom";
import MorphHeadline from "../components/MorphHeadline";
import Placeholder from "../components/Placeholder";
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

const ABOUT_HERO_LINES = [
  "Comprendre les enjeux,",
  "trouver des solutions,",
  "les mettre en œuvre.",
];

const EDUCATION = [
  {
    period: "2024 → 2025",
    degree: "Formation Full-Stack JavaScript",
    school: "GOMYCODE",
    text: "Stack MERN (React, Node.js, MongoDB, SQL).",
    monogram: "GC",
    logo: logoGomycode,
    logoFill: true,
    tone: "olive",
  },
  {
    period: "2018 → 2019",
    degree: "Master 2 Marketing Digital & E-business",
    school: "ESG Paris",
    text: "Stratégie digitale, SEO/SEA, e-commerce, data & automation.",
    monogram: "EP",
    logo: logoEsg,
    tone: "rose",
  },
  {
    period: "2017 → 2018",
    degree: "Master 1 Communication 360°",
    school: "European Communication School · Toulouse",
    text: "Communication intégrée · stratégie et exécution.",
    monogram: "EC",
    logo: logoEcs,
    logoFill: true,
    tone: "sky",
  },
  {
    period: "2014 → 2017",
    degree: "Licence Information-Communication",
    school: "Université Côte d'Azur · Nice",
    text: "Parcours Organisations & stratégies numériques.",
    monogram: "UC",
    logo: logoUcaNice,
    tone: "yellow",
  },
  {
    period: "2013 → 2014",
    degree: "Anglais général",
    school: "Kaplan International Languages · Londres",
    text: "Année anglophone.",
    monogram: "KL",
    logo: logoKaplan,
    logoFill: true,
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
      { name: "Google Ads", level: 2 },
      { name: "LinkedIn Ads", level: 2 },
      { name: "Meta Ads", level: 2 },
      { name: "TikTok Ads", level: 2 },
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
      { name: "Claude Team", level: 3 },
      { name: "Claude Skills & MCP", level: 3 },
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
      <Formation />
      <Beyond />
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
          <span className="mono">HI, MOI C'EST ESSIA · MARKETING & COMMUNICATION</span>
          <MorphHeadline lines={ABOUT_HERO_LINES} accentIdx={-1} />
          <p>
            Voilà ce qui me plaît et ce pourquoi je suis motivée.
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
          <strong>Racines.</strong> Grandi à Tunis, entre l'art, Internet
          et une passion constante pour les médias et le social media.
          Études à Nice, Toulouse, Paris. Un an à Londres pour l'anglais.
        </p>
        <p>
          <strong>D'où je viens.</strong> J'ai appris le marketing en
          l'exécutant. Bergamotte pour l'édito B2B : Axa, Macif, Matmut,
          Banque Populaire. KaliKado pour le cycle complet : vendre,
          produire, livrer un chiffre.
        </p>
        <p>
          <strong>Ce que j'ai construit.</strong> LeGratin.io, Station F.
          L'équipe était à quatre quand je suis arrivée. J'y ai passé trois
          ans comme Head of Marketing & Growth, actionnaire, à construire
          toute la fonction marketing.
        </p>
        <p>
          <strong>Et puis le code.</strong> Entourée de développeurs à
          Station F, j'ai décidé de ne plus dépendre d'un tiers pour faire
          exister une idée. Bootcamp Full-Stack JavaScript, et depuis je
          construis mes propres outils marketing.
        </p>
      </div>
    </section>
  );
}

function Formation() {
  return (
    <section className="formation-detailed" data-reveal>
      <div className="formation-detailed__head">
        <span className="mono">FORMATION</span>
        <h2>Bac+5 Marketing & Communication.</h2>
      </div>
      <div className="formation-detailed__grid">
        {EDUCATION.map((ed, i) => (
          <article
            key={ed.period + ed.degree}
            className="formation-detailed__item"
            data-reveal
            style={{ "--delay": i * 0.06 + "s" }}
          >
            <div
              className={`formation-detailed__logo${ed.logoFill ? " formation-detailed__logo--fill" : ""}`}
              aria-hidden="true"
            >
              {ed.logo ? <img src={ed.logo} alt="" /> : (ed.monogram || "·")}
            </div>
            <span className="formation-detailed__period mono">{ed.period}</span>
            <h4 className="formation-detailed__degree">{ed.degree}</h4>
            {ed.school && (
              <span className="formation-detailed__school">{ed.school}</span>
            )}
            {ed.text && <p className="formation-detailed__text">{ed.text}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

const BEYOND = [
  {
    title: "🌍 Voyage",
    text: "Grandi à Tunis. Un mois au Japon, les États-Unis, un tour d'Europe. Et j'espère encore plein d'autres destinations.",
    tone: "olive",
  },
  {
    title: "🎨 Culture visuelle & artistique",
    text: "Arts plastiques au lycée, musées et expos dès que l'occasion se présente, production audiovisuelle au quotidien. Un œil nourri qui me sert autant en direction artistique qu'en jugement sur un contenu.",
    tone: "sky",
  },
  {
    title: "💻 Internet & digital culture",
    text: "Skyblog, Myspace, et tout ce qui a suivi. Les réseaux sociaux sont autant un hobby qu'un métier. Je suis les tendances, je comprends les codes, j'aime la culture internet pour ce qu'elle est.",
    tone: "rose",
  },
  {
    title: "🔎 Curieuse, surtout",
    text: "Je peux passer d'un sujet marketing à une nouvelle techno, d'un documentaire à un rabbit hole improbable sur Internet. J'aime comprendre comment les choses fonctionnent.",
    tone: "yellow",
  },
];

function Beyond() {
  return (
    <section className="beyond" data-reveal>
      <div className="beyond__head">
        <span className="mono">AU-DELÀ DU CV</span>
        <h2>Ce qui fait de moi une collègue sympa.</h2>
      </div>
      <div className="beyond__grid">
        {BEYOND.map((b, i) => (
          <article
            key={b.title}
            className={`beyond__card beyond__card--${b.tone}`}
            data-reveal
            style={{ "--delay": i * 0.06 + "s" }}
          >
            <h4>{b.title}</h4>
            <p>{b.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const TOOL_TONES = ["rose", "olive", "sky", "yellow", "cream", "rose", "olive", "sky"];

function Tools() {
  return (
    <section className="about-tools" data-reveal>
      <div className="about-tools__head">
        <span className="mono">MES OUTILS</span>
        <h2>Mon stack, par activité.</h2>
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
      <div className="about-tools__grid">
        {TOOLS.map(({ category, items }, i) => (
          <div
            key={category}
            className={`about-tools__group about-tools__group--${TOOL_TONES[i % TOOL_TONES.length]}`}
            data-reveal
            style={{ "--delay": i * 0.05 + "s" }}
          >
            <span className="mono about-tools__cat">{category}</span>
            <div className="about-tools__chips">
              {items.map(({ name, level }) => (
                <span key={name} className="about-tools__chip" aria-label={`${name} · niveau ${level} sur 3`}>
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
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="about-cta">
      <span className="mono about-cta__eyebrow">VOUS RECRUTEZ UN·E RESPONSABLE MARKETING & COMMUNICATION ?</span>
      <h2>Discutons.</h2>
      <p className="about-cta__text">
        CDI à Paris, disponible immédiatement. Je réponds vite, en direct.
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
