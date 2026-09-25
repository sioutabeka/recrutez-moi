import { useRef } from "react";
import { Link } from "react-router-dom";
import essiaHome from "../../assets/essiahome.webp";
import aboutStory from "../../assets/about-story.jpg";
import IconArrow from "../components/IconArrow";
import MorphHeadline from "../components/MorphHeadline";
import Marquee from "../components/Marquee";
import Placeholder from "../components/Placeholder";
import PortfolioStrip from "../components/PortfolioStrip";
import ServicesOffer from "../components/ServicesOffer";
import WordRotator from "../components/WordRotator";
import { useHeroDrift } from "../lib/hooks";
import { ROUTES } from "../config/routes";
import { BRANDS, SITE } from "../config/site";

const HERO_LAST_WORDS = ["capture", "rentabilité", "mécanique"];
const HERO_LINES = [
  "Marketeuse polyvalente.",
  ["Obsédée par la ", <WordRotator key="rot" words={HERO_LAST_WORDS} />, " de l'attention."],
];

const SIGNATURE_PILLARS = [
  {
    title: "Social media, contenu & programmation éditoriale",
    tagline: "Je définis ce qu'on raconte, et je produis ce qui le raconte.",
    skills:
      "Stratégie social media et ligne éditoriale multi-marques · calendrier éditorial · community management et modération · tournage, montage, retouche photo · UGC, Reels, TikTok, carrousels · programmation d'interviews, de webinars et de talks · identification et recrutement d'intervenants · production assistée par IA.",
    proof:
      "50 interviews et 30 webinars produits chez LeGratin.io, avec des directeurs techniques et des experts du secteur. Vidéos tournées et montées pour Nuxe.",
  },
  {
    title: "Supports, web & outils",
    tagline: "Tout ce qu'il faut construire autour du contenu pour qu'il serve à quelque chose.",
    skills:
      "Sites et landing pages · lead magnets · supports print — brochures, fiches produits, flyers, plaquettes · présentations et supports d'aide à la vente · documentation corporate · outils sur mesure.",
    proof:
      "Un outil de carrousels codé en JavaScript, qui permet à un commerce de proximité de publier régulièrement sans embaucher personne. Site, outil de présentation et supports commerciaux pour MKL Energy.",
  },
  {
    title: "Growth, communauté & acquisition",
    tagline: "Faire venir des gens — et savoir pourquoi ils sont venus.",
    skills:
      "Stratégie d'acquisition · croissance organique · construction et animation de communautés · influence et activation de créateurs · funnels et automatisation · CRM et emailing — HubSpot, Brevo, Lemlist · événements et partenariats · KPI et reporting.",
    proof:
      "+20 000 freelances inscrits en organique, dont une majorité de développeurs. Cette traction a financé une levée de 1,5 M€.",
  },
  {
    title: "Ce sur quoi je veux me spécialiser",
    tagline: "Ma seule condition pour un poste : pouvoir exécuter ce que je sais faire, et avoir l'espace pour apprendre le reste.",
    skills:
      "Le paid sur de plus gros volumes — Meta, TikTok, Google Ads · l'acquisition et le référencement sur les réseaux sociaux · le SEA, après des années de SEO · et le référencement dans les LLM, que presque aucune direction marketing ne sait encore adresser.",
    proof: null,
  },
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

// Niveau : 1 = Pratique · 2 = Confirmé · 3 = Expert / référente
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

const TOOLS_STRIP = [
  "HubSpot", "Brevo", "Meta Ads", "TikTok Ads", "Google Ads",
  "GA4", "SEMrush", "Looker Studio", "CapCut", "Premiere Pro", "Canva",
  "Claude", "ChatGPT", "Midjourney", "Runway", "ElevenLabs",
  "Make", "n8n", "Airtable", "Notion", "React", "Node.js",
  "JavaScript", "Next.js", "MongoDB", "SQL",
];

export default function HomePage() {
  return (
    <main className="page page--home">
      <Hero />
      <Signature />
      <ServicesOffer />
      <Story />
      <Timeline />
      <Formation />
      <Tools />
      <Method />
      <PortfolioStrip
        title={
          <h2>Mes réalisations</h2>
        }
      />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  useHeroDrift(sectionRef, textRef, mediaRef);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__row">
        <div className="hero__col-text" ref={textRef}>
          <div className="hero__meta">
            <span className="mono">HI · MOI C'EST ESSIA · MARKETING & CONTENUS</span>
            <span className="mono"> · PARIS · EN RECHERCHE DE CDI</span>
          </div>

          <MorphHeadline lines={HERO_LINES} accentIdx={-1} />

          <div className="hero__base">
            <p className="hero__sub">
              Pense la marque, produit le contenu, code l'outil, mesure
              l'impact — un seul profil pour ce que quatre feraient à moitié.
              <br />
              9 ans · CDI Paris · Trilingue FR·EN·AR · dispo immédiate.
            </p>

            <div className="hero__cta">
              <a
                href={SITE.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--olive"
              >
                Télécharger mon CV
              </a>
              <a href="#experiences" className="btn btn--ghost">
                Voir mon parcours
                <IconArrow />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__col-media" ref={mediaRef}>
          <div className="hero__media">
            <img src={essiaHome} alt="Essia Ben Kheder" className="hero__img" />
          </div>
          <div className="hero__chip hero__chip--2">
            <span className="mono">marque · contenu · communauté · croissance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="signature" data-reveal>
      <div className="signature__head">
        <span className="mono">CE QUE JE FAIS</span>
        <h2>Quatre terrains — trois que je maîtrise, un que je veux ouvrir.</h2>
        <p>Depuis 9 ans, entre régie, agence, plateforme tech et indépendante. Ce que je fais tous les jours, et ce que je veux ajouter dans mon prochain poste.</p>
      </div>

      <div className="signature__grid">
        {SIGNATURE_PILLARS.map((pillar, i) => (
          <article
            key={pillar.title}
            className="signature__card"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <span className="signature__num">{String(i + 1).padStart(2, "0")}</span>
            <h4>{pillar.title}</h4>
            <p className="signature__tagline">{pillar.tagline}</p>
            <p className="signature__skills">{pillar.skills}</p>
            {pillar.proof && <p className="signature__proof">{pillar.proof}</p>}
          </article>
        ))}
      </div>

      <div className="signature__cta">
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust" data-reveal>
      <span className="mono trust__label">MARQUES & ENTREPRISES ACCOMPAGNÉES</span>
      <div className="trust__row">
        {BRANDS.map((b) => (
          <span key={b} className="trust__brand">
            {b}
          </span>
        ))}
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
          Licence Information-Communication à Nice (Université Côte d'Azur),
          Master 1 Communication 360° à l'ECS Toulouse, Master 2 Marketing
          Digital & E-business à l'ESG Paris. Une obsession qui traverse
          tout : comprendre comment se distribue l'attention.
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
  );
}

function Facts() {
  return (
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
  );
}

function Timeline() {
  return (
    <section id="experiences" className="about-timeline" data-reveal>
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
  );
}

function Formation() {
  return (
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
  );
}

function Tools() {
  return (
    <section className="about-tools" data-reveal>
      <div className="about-tools__head">
        <span className="mono">MES OUTILS · PAR ACTIVITÉ</span>
        <h2>Ce que j'utilise vraiment.</h2>
        <p>
          Un inventaire honnête, avec un indicateur de niveau par outil —
          pour que tu saches à quoi t'attendre en entretien technique.
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

function Method() {
  return (
    <section className="about-pillars" data-reveal>
      <h2>Ma personnalité.</h2>
      <p className="about-pillars__intro">
        Trois traits qui me définissent au travail.
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
  );
}

function FinalCta() {
  return (
    <section className="about-cta">
      <h2>Un poste à me proposer ?</h2>
      <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--olive">
        Télécharger mon CV
      </a>
    </section>
  );
}
