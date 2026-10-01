import { useRef } from "react";
import { Link } from "react-router-dom";
import essiaHome from "../../assets/essia-hero.png";
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

const HERO_LINES = [
  "Je transforme le marketing",
  "en moteur de croissance.",
];

const SIGNATURE_PILLARS = [
  {
    title: "Stratégie & Growth",
    tagline: "Transformer les enjeux business en leviers de croissance.",
    skills:
      "Positionnement, acquisition, activation, parcours, SEO, paid, outbound, CRM, analytics, automatisation : je réfléchis aux canaux, aux audiences et aux mécaniques qui permettent de générer de la croissance.",
    proof: null,
  },
  {
    title: "Content & Social",
    tagline: "Faire exister une marque dans le réel.",
    skills:
      "Stratégie éditoriale, social media, copywriting, formats courts, UGC, webinars, interviews, newsletters, supports digitaux : je conçois les contenus, mais je peux aussi les produire et les déployer.",
    proof: null,
  },
  {
    title: "Community & Activation",
    tagline: "Créer de l'engagement au-delà de l'audience.",
    skills:
      "Community building, animation, événements, partenariats, créateurs, ambassadeurs, expériences : je transforme une audience en communauté et la communauté en levier d'acquisition, d'engagement et de fidélisation.",
    proof: null,
  },
  {
    title: "Brand, Digital & AI",
    tagline: "Construire et faire évoluer l'écosystème de marque.",
    skills:
      "Branding, positionnement, identité, site, expérience digitale, coordination de prestataires et intégration de l'IA dans les process et la création : je relie la marque, les outils et les nouveaux usages pour faire évoluer le dispositif marketing.",
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
    period: "Sept. 2024 → Aujourd'hui",
    role: "Freelance · Marketing, Growth & Content",
    company: "OseCom — Indépendante",
    place: "Paris · En direct avec les marques, sans agence",
    bullets: [
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
      "Construction de toute la fonction marketing sur 3 ans",
      "Encadrement de 2 juniors (UX/UI + marketing)",
      "LeGratin depuis intégrée au groupe Nexoris",
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
      <VideoCV />
      <Signature />
      <Realisations />
      <ServicesOffer />
      <Method2 />
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
            <span className="mono">HI, MOI C'EST ESSIA · MARKETING, GROWTH & CONTENT</span>
          </div>

          <MorphHeadline lines={HERO_LINES} accentIdx={-1} />

          <div className="hero__base">
            <p className="hero__sub">
              9 ans d'expérience en marketing et communication, dont 3 ans
              chez LeGratin.io à piloter le marketing, l'acquisition et la
              communauté.
              <br />
              <br />
              En 1 an, j'ai contribué à l'acquisition et à l'activation de{" "}
              <strong>+20 000 freelances</strong>, en combinant contenu, SEO,
              outbound, paid acquisition, partenariats, événements et
              community building.
              <br />
              <br />
              Aujourd'hui, je conçois et pilote des stratégies qui font
              travailler ensemble{" "}
              <strong>contenu, social media, acquisition, communautés et IA</strong>{" "}
              — avec une obsession : transformer l'attention en croissance.
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
              <a href="/portfolio" className="btn btn--ghost">
                Voir mes réalisations
                <IconArrow />
              </a>
            </div>

            <p className="hero__meta-bottom mono">
              CDI · Paris / Île-de-France · Disponible immédiatement · FR · EN · AR
            </p>
          </div>
        </div>

        <div className="hero__col-media" ref={mediaRef}>
          <div className="hero__media">
            <img src={essiaHome} alt="Essia Ben Kheder" className="hero__img" />
          </div>
          <div className="hero__chip hero__chip--2">
            <span className="mono">Growth · Community · Creator Marketing · Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCV() {
  return (
    <section className="video-cv" data-reveal>
      <div className="video-cv__head">
        <span className="mono">MA VIDÉO DE PRÉSENTATION</span>
        <h2>Découvre qui je suis en 60 secondes.</h2>
        <p>Le plus rapide pour comprendre mon approche, mon parcours et ce que je cherche.</p>
      </div>
      <div className="video-cv__frame">
        <div className="video-cv__placeholder">
          <svg viewBox="0 0 60 60" width="60" height="60" className="video-cv__play" aria-hidden="true">
            <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 24 20 L 42 30 L 24 40 Z" fill="currentColor" />
          </svg>
          <p className="mono video-cv__label">VIDÉO À VENIR</p>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" data-reveal>
      <div className="manifesto__inner">
        <span className="mono">MON FIL ROUGE</span>
        <blockquote className="manifesto__quote">
          Née à Tunis, formée à Nice, Toulouse, Paris et Londres. Une même
          obsession depuis Skyblog jusqu'aux LLM :{" "}
          <em>comprendre comment se distribue l'attention</em> — et savoir
          la transformer en croissance.
        </blockquote>
        <p className="manifesto__sub">
          Je ne suis pas venue au marketing par la stratégie. Je suis venue
          par l'attention — celle qu'on capte, qu'on structure, qu'on
          mesure. Le reste, c'est de la méthode.
        </p>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section className="signature" data-reveal>
      <div className="signature__head">
        <span className="mono">MES QUATRE TERRAINS</span>
        <h2>Une approche transverse du marketing.</h2>
        <p>Un objectif : transformer l'attention en croissance. Quatre terrains complémentaires que je fais travailler ensemble.</p>
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

const REALISATIONS = [
  {
    tag: "FREELANCE · CONCIERGERIE · DIGITAL COMPLET",
    title: "FlatLab",
    subtitle: "Site, réseaux sociaux, automatisation",
    text: "Accompagnement digital complet d'une conciergerie : création du site, structuration de la présence sur les réseaux, automatisation des process. Un dispositif de bout en bout pour que la marque existe en ligne sans mobiliser l'équipe au quotidien.",
    href: "/services/osecom",
    tone: "rose",
  },
  {
    tag: "FREELANCE · MARKETING × CODE × IA · 2025",
    title: "L'outil de carrousels",
    subtitle: "JavaScript · Assisté par IA · En local",
    text: "Un outil construit en JavaScript et assisté par IA qui transforme les articles de blog en carrousels sociaux au ton et à la DA de chaque marque. Fonctionne en local, sur l'abonnement Claude du client. Déployé chez un pressing de proximité qui publie régulièrement sans embaucher personne.",
    href: "/portfolio#outil-carrousels",
    tone: "olive",
  },
  {
    tag: "FREELANCE · SEPT. 2024 → AUJOURD'HUI",
    title: "OseCom — Une dizaine de clients",
    subtitle: "En direct avec les marques, sans agence",
    text: "Activité freelance lancée en septembre 2024, après trois ans en interne chez LeGratin.io. Deux offres : production audiovisuelle (Nuxe, Pierre Fabre, Blissim) et digital complet pour TPE & PME (MKL Energy, FlatLab). Forfaits 1-5 K€.",
    href: "/services/osecom",
    tone: "sky",
  },
];

function Realisations() {
  return (
    <section className="realisations" data-reveal>
      <div className="realisations__head">
        <span className="mono">QUELQUES RÉALISATIONS</span>
        <h2>Ce que j'ai construit — en un coup d'œil.</h2>
      </div>
      <div className="realisations__grid">
        {REALISATIONS.map((r, i) => (
          <article
            key={r.title}
            className={`realisations__card realisations__card--${r.tone}`}
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <span className="mono realisations__tag">{r.tag}</span>
            <h3 className="realisations__title">{r.title}</h3>
            <span className="realisations__subtitle">{r.subtitle}</span>
            <p className="realisations__text">{r.text}</p>
            <Link to={r.href} className="link-arrow realisations__cta">
              Voir en détail
              <IconArrow size={12} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function LeGratinCase() {
  return (
    <section className="legratin-case" data-reveal>
      <div className="legratin-case__inner">
        <span className="mono">LEGRATIN.IO · HEAD OF MARKETING & GROWTH · CODIR</span>
        <h2>Construire une communauté qui devient un moteur de croissance.</h2>
        <p className="legratin-case__intro">
          LeGratin.io était une plateforme de freelances. Mon rôle : développer
          l'acquisition, l'activation et l'engagement de cette communauté.
          J'ai construit et piloté plusieurs leviers en parallèle :
        </p>
        <ul className="legratin-case__levers">
          <li>Contenu & SEO</li>
          <li>Outbound & automatisation LinkedIn</li>
          <li>Webinars & newsletters</li>
          <li>Animation communautaire</li>
          <li>Partenariats B2B</li>
          <li>Acquisition & conversion</li>
        </ul>
        <div className="legratin-case__stat">
          <span className="legratin-case__num">+20 000</span>
          <span className="legratin-case__label">freelances acquis et activés en 1 an</span>
        </div>
        <p className="legratin-case__closing">
          Une expérience où j'ai appris à considérer la communauté non comme
          une audience à animer, mais comme un véritable actif de croissance.
        </p>
        <Link to={ROUTES.service("legratin")} className="link-arrow">
          Voir le case study
          <IconArrow size={14} />
        </Link>
      </div>
    </section>
  );
}

function OseComCase() {
  return (
    <section className="osecom-case" data-reveal>
      <div className="osecom-case__inner">
        <span className="mono">AUJOURD'HUI · OSECOM · INDÉPENDANTE</span>
        <h2>Marketing indépendante — une dizaine de clients, deux offres, un outil IA maison.</h2>
        <p className="osecom-case__intro">
          Depuis septembre 2024, après trois ans en interne chez
          LeGratin.io. En direct avec les marques, sans agence intermédiaire.
          Forfaits 1-5 K€.
        </p>
        <div className="osecom-case__grid">
          <div className="osecom-case__col">
            <span className="mono mono--sm">PRODUCTION AUDIOVISUELLE & CONTENU</span>
            <p>
              Nuxe, Pierre Fabre, Blissim, Maison Farida, Capsul —
              conception, tournage, montage, direction de shootings.
            </p>
          </div>
          <div className="osecom-case__col">
            <span className="mono mono--sm">DIGITAL COMPLET POUR TPE & PME</span>
            <p>
              MKL Energy (site + supports d'aide à la vente), FlatLab
              (site + réseaux + automatisation), un pressing local
              (outil de carrousels IA déployé).
            </p>
          </div>
        </div>
        <p className="osecom-case__closing">
          <strong>L'outil de carrousels</strong> — construit en JavaScript,
          assisté par IA — permet à une petite entreprise de publier
          régulièrement sans recruter. Meilleure preuve concrète de la
          combinaison marketing + code + IA.
        </p>
        <Link to={ROUTES.service("osecom")} className="link-arrow">
          Voir le détail
          <IconArrow size={14} />
        </Link>
      </div>
    </section>
  );
}

function CreatorCommunity() {
  return (
    <section className="cc-block" data-reveal>
      <div className="cc-block__head">
        <span className="mono">CREATOR · COMMUNITY · INFLUENCE</span>
        <h2>Des audiences aux écosystèmes.</h2>
      </div>
      <div className="cc-block__body">
        <p>
          Je travaille sur les dispositifs qui permettent à une marque de ne
          pas dépendre uniquement de sa propre prise de parole.
        </p>
        <p>
          Créateurs, UGC, influence, communautés, partenariats : j'identifie
          les bons profils, imagine les formats et construis les mécaniques
          d'activation.
        </p>
        <p>
          L'objectif n'est pas seulement de générer de la visibilité. C'est de
          créer des relais capables de contribuer à l'acquisition, à
          l'engagement et à la fidélisation.
        </p>
        <Link to={ROUTES.portfolio} className="link-arrow">
          Voir mes réalisations
          <IconArrow size={14} />
        </Link>
      </div>
    </section>
  );
}

const METHOD_STEPS = [
  {
    num: "01",
    title: "Penser",
    tagline: "Comprendre le problème avant de produire.",
    text: "Positionnement, stratégie marketing, acquisition, parcours, audiences, canaux, objectifs et KPI : je pars du business et construis une stratégie cohérente autour.",
  },
  {
    num: "02",
    title: "Faire",
    tagline: "Transformer la stratégie en quelque chose de concret.",
    text: "Contenus, campagnes, newsletters, webinars, événements, supports, landing pages : je peux concevoir, produire, coordonner l'exécution — et piloter les prestataires, l'équipe et le budget qui vont avec.",
  },
  {
    num: "03",
    title: "Mesurer",
    tagline: "Regarder ce qui fonctionne. Puis l'améliorer.",
    text: "Données, acquisition, engagement, conversion, SEO, paid, CRM, analytics : je mesure les résultats, identifie les leviers et ajuste la stratégie en conséquence.",
  },
];

function Method2() {
  return (
    <section className="about-pillars" data-reveal>
      <h2>Ma façon de travailler.</h2>
      <p className="about-pillars__intro">
        Un cycle simple, appliqué à chaque mission — de la stratégie éditoriale
        à un programme créateurs, d'une campagne paid à un dispositif
        communautaire.
      </p>
      <div className="about-pillars__grid">
        {METHOD_STEPS.map((step, i) => (
          <div
            key={step.num}
            className="about-pillars__card"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <span className="about-pillars__n">{step.num}</span>
            <h4>{step.title}</h4>
            <p className="about-pillars__tagline">{step.tagline}</p>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HandsOn() {
  return (
    <section className="cc-block cc-block--dark" data-reveal>
      <div className="cc-block__head">
        <span className="mono">STRATÉGIE + EXÉCUTION</span>
        <h2>Je peux penser le dispositif et le mettre en œuvre.</h2>
      </div>
      <div className="cc-block__body">
        <p>
          Stratégie, copywriting, contenu, tournage, montage, landing pages,
          automatisation : je suis à l'aise entre la réflexion et l'exécution.
        </p>
        <p>
          Cette capacité me permet de tester rapidement, d'apprendre du
          terrain et d'éviter de transformer chaque idée en projet à
          six semaines.
        </p>
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
          <strong>Ce que j'ai construit.</strong> Chez LeGratin.io,
          plateforme de freelances incubée à Station F avec 42, je suis
          arrivée quand l'équipe était à quatre. J'y ai construit toute
          la fonction marketing pendant trois ans, d'abord comme Head of
          Community puis comme Head of Marketing & Growth, rattachée au
          fondateur, avec deux personnes à encadrer. J'étais aussi
          actionnaire. Le détail des dispositifs et des résultats est
          plus haut sur la page.
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
      <span className="mono about-cta__eyebrow">VOUS RECRUTEZ ?</span>
      <h2>Parlons Growth, Community & Marketing.</h2>
      <p className="about-cta__text">
        Vous cherchez quelqu'un capable de construire une communauté,
        développer des programmes créateurs et relier ces dispositifs à des
        objectifs d'acquisition et d'engagement ? Je serais ravie d'échanger.
      </p>
      <p className="about-cta__meta mono">
        CDI · Growth · Community · Marketing · Content · Paris / Île-de-France
      </p>
      <div className="about-cta__row">
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
        <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
