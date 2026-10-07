import { useRef } from "react";
import { Link } from "react-router-dom";
import essiaHome from "../../assets/essia-hero.png";
import aboutStory from "../../assets/about-story.jpg";
import logoGomycode from "../../assets/logo-gomycode.png";
import logoEsg from "../../assets/logo-esg-paris.png";
import logoEcs from "../../assets/logo-ecs-toulouse.png";
import logoUcaNice from "../../assets/logo-universite-nice.png";
import logoKaplan from "../../assets/logo-kaplan.png";
import logoPmf from "../../assets/logo-pmf-tunis.jpeg";
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
  "La vision stratégique,",
  "les mains dans l'exécution.",
];

const SIGNATURE_PILLARS = [
  {
    title: "Marketing",
    tagline: "Définir la direction, structurer et piloter.",
    skills:
      "Positionnement, ICP et go-to-market jusqu'au plan marketing, budget et KPIs. Pilotage du funnel et du CRM, alignement sales-produit, reporting et management d'équipe.",
    proof: null,
  },
  {
    title: "Communication & Content",
    tagline: "Construire une marque forte et la faire vivre.",
    skills:
      "De l'identité à la stratégie éditoriale : site, SEO, contenus, newsletters, social media, RP et événements. Stratégie, production et coordination des partenaires externes.",
    proof: null,
  },
  {
    title: "Growth & Community",
    tagline: "Acquérir, convertir et engager.",
    skills:
      "Construction et optimisation des mécaniques d'acquisition B2B & B2C : inbound, outbound, paid, landing pages, CRO et automation. Développement de communautés, partenariats, créateurs et ambassadeurs.",
    proof: null,
  },
  {
    title: "Digital, IA & Tech",
    tagline: "Intégrer les nouveaux outils aux usages marketing.",
    skills:
      "IA générative, automatisation, SEO/GEO, analytics et stack marketing intégrés aux process. Une pratique du code pour prototyper, collaborer avec les équipes tech et développer mes propres outils.",
    proof: null,
  },
];

const FACTS = [
  ["BASÉE À PARIS 🇫🇷", "CDI · Disponible immédiatement"],
  ["MARKETING & CONTENUS ✨", "De la stratégie au montage · et au code"],
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
    company: "OseCom · Indépendante",
    place: "Paris · En direct avec les marques, sans agence",
    bullets: [
      "Une dizaine de clients accompagnés · Forfaits 1-5 K€",
      "Production audiovisuelle : Nuxe (5-6 vidéos 2025), Pierre Fabre, Blissim, Maison Farida, Capsul",
      "Digital complet TPE/PME : MKL Energy (site + supports d'aide à la vente), FlatLab, un pressing",
      "Outil de carrousels construit en JavaScript, assisté par IA · fonctionne en local",
    ],
  },
  {
    slug: "legratin",
    period: "2021 → 2024",
    role: "Head of Community puis Head of Marketing & Growth · CODIR · Actionnaire",
    company: "LeGratin.io · Plateforme tech de freelances IT",
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
    period: "2019 → 2021",
    role: "Cheffe de projet & Business Developer",
    company: "Agence KaliKado",
    place: "Paris · Cycle complet",
    bullets: [
      "Prospection → vente → exécution → bilan : je ramenais mes propres clients",
      "Clients : Andros (Bonne Maman, Mamie Nova), L'Or Espresso, L'Arbre Vert, FDJ",
      "Spécialité : sampling contextuel · grille-pain déclenche confiture, machine à laver déclenche thé",
      "Canaux : box hôtelières, partenariats e-commerce, jeux-concours",
    ],
  },
  {
    slug: "bergamotte",
    period: "2018 → 2019",
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
    period: "2017 → 2018",
    role: "Chargée de communication & développement",
    company: "Pigier",
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
    period: "2016 → 2017",
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
    company: "Groupe Nice-Matin · Régie publicitaire",
    place: "Nice · Premier poste",
    bullets: [
      "Analyse stratégique, veille médias, data",
      "Coordination de projets au sein de la régie",
      "Le point de départ · Comprendre comment se distribue l'attention · d'abord dans un média régional, aujourd'hui dans les LLM",
    ],
  },
];

const EDUCATION = [
  {
    period: "2024 → 2025",
    degree: "Développeur Full-Stack JavaScript",
    school: "GOMYCODE · Temps plein",
    text: "Stack MERN (React, Node.js, MongoDB, SQL) · méthodologie agile. Pour construire mes propres outils sans dépendre d'un tiers.",
  },
  {
    period: "2018 → 2019",
    degree: "Master 2 Marketing Digital & E-business",
    school: "ESG Paris",
    text: "Stratégie digitale, SEO/SEA, e-commerce, data & automation, UX/UI, gestion de projet.",
  },
  {
    period: "2017 → 2018",
    degree: "Master 1 Communication 360°",
    school: "European Communication School · Toulouse",
    text: "Communication intégrée · un socle qui structure ma façon d'articuler stratégie et exécution.",
  },
  {
    period: "2014 → 2017",
    degree: "Licence Information-Communication",
    school: "Université Côte d'Azur · Nice",
    text: "Parcours Organisations & stratégies numériques. Fondamentaux : communication, art, anthropologie, web.",
  },
  {
    period: "2013 → 2014",
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
  ["03", "Sortir des routines", "Je déteste \"on fait comme ça parce qu'on a toujours fait comme ça\". Le levier pertinent, on le choisit · on ne l'hérite pas."],
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
      {/* <VideoCV /> · masqué tant que la vidéo n'est pas prête */}
      <Signature />
      <WhyMe />
      <Realisations />
      <FormationStrip />
      <ToolsStrip />
      <ServicesOffer />
      <FinalCta />
    </main>
  );
}

const WHY_ME = [
  {
    title: "Marketing × Code × IA",
    text: "Je code en JavaScript, j'intègre l'IA à mes process, et j'ai construit mes propres outils (dont un générateur de carrousels assisté par Claude). Rare dans un profil marketing.",
    tone: "rose",
  },
  {
    title: "Production hands-on",
    text: "Je ne pilote pas la production, je la fais. Tournage, montage, DA, carrousels, newsletters, landing pages. Autonome de A à Z pour aller vite sans équipe pléthorique.",
    tone: "olive",
  },
  {
    title: "Business mindset",
    text: "CODIR et actionnaire chez LeGratin.io, dialogue direct avec le fondateur, contribution à la levée de 1,5 M€. Je pense marketing comme une fonction business, pas comme un centre de coûts.",
    tone: "sky",
  },
  {
    title: "Culture internationale",
    text: "Trilingue FR/EN/AR (C2 · C1 · C1). Née à Tunis, formée à Nice, Toulouse, Paris et Londres. Habituée à travailler avec des équipes et des audiences de cultures différentes.",
    tone: "yellow",
  },
];

function WhyMe() {
  return (
    <section className="whyme" data-reveal>
      <div className="whyme__head">
        <span className="mono">POURQUOI MOI</span>
        <h2>Ce qui me distingue d'un autre profil Marketing & Communication.</h2>
      </div>
      <div className="whyme__grid">
        {WHY_ME.map((w, i) => (
          <article
            key={w.title}
            className={`whyme__card whyme__card--${w.tone}`}
            data-reveal
            style={{ "--delay": i * 0.06 + "s" }}
          >
            <h4>{w.title}</h4>
            <p>{w.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const FORMATION_STRIP = [
  { logo: logoGomycode, logoFill: true, period: "2024 → 2025", degree: "Full-Stack JavaScript", school: "GOMYCODE" },
  { logo: logoEsg, period: "2018 → 2019", degree: "Master 2 Marketing Digital & E-business", school: "ESG Paris" },
  { logo: logoEcs, logoFill: true, period: "2017 → 2018", degree: "Master 1 Communication 360°", school: "ECS Toulouse" },
  { logo: logoUcaNice, period: "2014 → 2017", degree: "Licence Information-Communication", school: "Université Côte d'Azur" },
  { logo: logoKaplan, logoFill: true, period: "2013 → 2014", degree: "Anglais général", school: "Kaplan Londres" },
  { logo: logoPmf, period: "2013", degree: "Baccalauréat Scientifique", school: "Lycée Pierre Mendès France" },
];

function FormationStrip() {
  return (
    <section className="formation-strip" data-reveal>
      <div className="formation-strip__head">
        <span className="mono">FORMATION</span>
        <h2>Bac+5 Marketing & Communication.</h2>
      </div>
      <div className="formation-strip__grid">
        {FORMATION_STRIP.map((ed, i) => (
          <article
            key={ed.school + ed.period}
            className="formation-strip__item"
            data-reveal
            style={{ "--delay": i * 0.05 + "s" }}
          >
            <div className={`formation-strip__logo${ed.logoFill ? " formation-strip__logo--fill" : ""}`} aria-hidden="true">
              <img src={ed.logo} alt="" />
            </div>
            <div className="formation-strip__meta">
              <span className="formation-strip__degree">{ed.degree}</span>
              <span className="formation-strip__school">{ed.school}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="formation-strip__cta">
        <Link to={ROUTES.about} className="link-arrow">
          Voir tout le profil
          <IconArrow size={12} />
        </Link>
      </div>
    </section>
  );
}

const HOME_TOOLS = [
  {
    category: "CRM & AUTOMATION 📮",
    tools: ["HubSpot", "Brevo", "Make", "Lemlist"],
    tone: "rose",
  },
  {
    category: "ADS & ANALYTICS 📊",
    tools: ["Google Ads", "LinkedIn Ads", "Meta Ads", "GA4", "SEMrush"],
    tone: "sky",
  },
  {
    category: "CONTENU & CRÉA 🎬",
    tools: ["CapCut", "Premiere Pro", "After Effects", "Canva", "Figma"],
    tone: "olive",
  },
  {
    category: "IA & DEV 🤖",
    tools: ["Claude Team", "Claude Skills & MCP", "ChatGPT", "Midjourney", "JavaScript / React"],
    tone: "yellow",
  },
];

function ToolsStrip() {
  return (
    <section className="tools-strip" data-reveal>
      <div className="tools-strip__head">
        <span className="mono">STACK</span>
        <h2>Les outils que j'utilise au quotidien.</h2>
      </div>
      <div className="tools-strip__grid">
        {HOME_TOOLS.map((group, i) => (
          <article
            key={group.category}
            className={`tools-strip__group tools-strip__group--${group.tone}`}
            data-reveal
            style={{ "--delay": i * 0.06 + "s" }}
          >
            <span className="tools-strip__cat mono">{group.category}</span>
            <div className="tools-strip__chips">
              {group.tools.map((t) => (
                <span key={t} className="tools-strip__chip">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="tools-strip__cta">
        <Link to={ROUTES.about} className="link-arrow">
          Voir tous les outils (niveau détaillé)
          <IconArrow size={12} />
        </Link>
      </div>
    </section>
  );
}

const FOCUS = [
  {
    title: "SaaS B2B & HR Tech",
    proof: "3 ans chez LeGratin.io",
    text: "SaaS B2B marketplace talents IT, incubée à Station F avec 42. Je connais le cycle de vente SaaS, l'ICP DSI/CTO, les enjeux d'un fondateur qui lève, l'écosystème HR tech et le dialogue avec les équipes produit et développeurs.",
    tone: "rose",
  },
  {
    title: "Edtech & Formation",
    proof: "Pigier · Université Nice Sophia Antipolis",
    text: "Chargée de communication & développement chez Pigier (école de commerce, Toulouse) : stratégie de com, campagnes radio/affichage, RP, événements. Community management chez l'Université Nice sur un projet de bibliothèque numérique. Je comprends la cible RH, L&D et formation, et je sais parler aux apprenants autant qu'aux prescripteurs.",
    tone: "olive",
  },
];

function Sectors() {
  return (
    <section className="sectors" data-reveal>
      <div className="sectors__head">
        <span className="mono">MES UNIVERS DE PRÉDILECTION</span>
        <h2>SaaS B2B et Edtech : deux univers où j'ai fait mes preuves.</h2>
        <p>Mon parcours m'a amenée à travailler dans plusieurs secteurs, mais ce sont la tech B2B et l'éducation que je veux approfondir. Deux univers où je sais ce que je fais, où je comprends la cible, et où mon profil polyvalent apporte une vraie différence.</p>
      </div>
      <div className="sectors__grid sectors__grid--focus">
        {FOCUS.map((s, i) => (
          <article
            key={s.title}
            className={`sectors__card sectors__card--${s.tone}`}
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <h4>{s.title}</h4>
            <span className="sectors__proof mono">{s.proof}</span>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Essia est arrivée quand nous étions quatre. Elle a construit la fonction marketing & communication de l'entreprise de A à Z, avec autant d'autonomie que de rigueur dans le pilotage. Sa capacité à passer de la stratégie à l'exécution a été clé dans notre développement.",
    author: "[À remplir : nom + rôle du fondateur LeGratin]",
    context: "LeGratin.io · Fondateur",
    tone: "rose",
  },
  {
    quote:
      "[Ajouter une reco LinkedIn d'un pair ou d'un n+1 qui parle de ton leadership marketing et de ta capacité à embarquer les équipes transverses — ex: directeur commercial LeGratin, directeur produit, autre membre du CODIR]",
    author: "[Nom · Titre]",
    context: "[Entreprise · Contexte]",
    tone: "olive",
  },
  {
    quote:
      "[Ajouter une reco d'un client freelance ou d'un ancien employeur qui parle de ton exécution opérationnelle, de la qualité des livrables, de la fiabilité : Nuxe, Pierre Fabre, Blissim, MKL Energy, Bergamotte...]",
    author: "[Nom · Titre]",
    context: "[Entreprise · Contexte]",
    tone: "sky",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" data-reveal>
      <div className="testimonials__head">
        <span className="mono">CE QU'ON DIT DE MOI</span>
        <h2>Trois voix qui connaissent mon travail.</h2>
      </div>
      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <article
            key={i}
            className={`testimonials__card testimonials__card--${t.tone}`}
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <p className="testimonials__quote">« {t.quote} »</p>
            <div className="testimonials__author">
              <strong>{t.author}</strong>
              <span className="mono">{t.context}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
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
            <span className="mono">ESSIA BEN KHEDER · RESPONSABLE MARKETING & COMMUNICATION · CDI PARIS</span>
          </div>

          <MorphHeadline lines={HERO_LINES} accentIdx={-1} />

          <div className="hero__base">
            <p className="hero__sub">
              9 ans en marketing et communication, dans la{" "}
              <strong>startup, l'agence, l'éducation et le média</strong>.
              Profil polyvalent, rigoureux, autonome : je tiens une fonction
              marketing & communication complète, de la stratégie aux KPIs,
              du site aux salons, de la génération de leads{" "}
              <strong>B2B et B2C</strong> aux supports commerciaux.
              <br />
              <br />
              Preuve récente : 3 ans chez <strong>LeGratin.io</strong>{" "}
              (startup tech, Station F, CODIR, actionnaire) où j'ai construit
              la fonction marketing de bout en bout : +20 000 utilisateurs
              acquis en organique, 50+ interviews d'experts, 30+ webinars
              produits, contribution directe à la levée de 1,5 M€ (groupe
              Nexoris depuis).
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
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--rose"
              >
                Prendre 15 min
              </a>
              <a href={SITE.emailHref} className="btn btn--ghost">
                Me contacter
                <IconArrow />
              </a>
            </div>

            <p className="hero__meta-bottom mono">
              CDI · Paris · Disponible immédiatement · FR · EN · AR (C2 · C1 · C1)
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
          <em>comprendre comment se distribue l'attention</em> · et savoir
          la transformer en croissance.
        </blockquote>
        <p className="manifesto__sub">
          Je ne suis pas venue au marketing par la stratégie. Je suis venue
          par l'attention · celle qu'on capte, qu'on structure, qu'on
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
        <span className="mono">MES EXPERTISES</span>
        <h2>Marketing & Communication, un profil transverse.</h2>
        <p>Quatre expertises complémentaires, de la stratégie à l'exécution, avec un même objectif : faire du marketing un levier concret pour le business.</p>
      </div>

      <div className="signature__grid">
        {SIGNATURE_PILLARS.map((pillar, i) => (
          <article
            key={pillar.title}
            className="signature__card"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
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
    tag: "LEGRATIN.IO · 2021 → 2024",
    title: "Construction d'une fonction marketing complète",
    subtitle: "+20 000 utilisateurs organique · levée 1,5 M€",
    text: "SaaS B2B, Station F, CODIR, actionnaire.",
    href: "/portfolio#legratin",
    tone: "rose",
  },
  {
    tag: "FREELANCE · 2024-2025",
    title: "Nuxe · Pierre Fabre · Blissim",
    subtitle: "Production audiovisuelle en direct avec les marques",
    text: "Direction créative, tournage, montage, shooting.",
    href: "/portfolio#freelance-beauty",
    tone: "sky",
  },
  {
    tag: "OUTIL MAISON · 2025",
    title: "Générateur de carrousels sociaux",
    subtitle: "JavaScript assisté par IA",
    text: "Déployé chez un client, intégré à ses process.",
    href: "/portfolio#outil-carrousels",
    tone: "olive",
  },
];

function Realisations() {
  return (
    <section className="realisations" data-reveal>
      <div className="realisations__head">
        <span className="mono">RÉALISATIONS</span>
        <h2>Des preuves de ce que je sais livrer.</h2>
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
        <h2>Marketing indépendante · une dizaine de clients, deux offres, un outil IA maison.</h2>
        <p className="osecom-case__intro">
          Depuis septembre 2024, après trois ans en interne chez
          LeGratin.io. En direct avec les marques, sans agence intermédiaire.
          Forfaits 1-5 K€.
        </p>
        <div className="osecom-case__grid">
          <div className="osecom-case__col">
            <span className="mono mono--sm">PRODUCTION AUDIOVISUELLE & CONTENU</span>
            <p>
              Nuxe, Pierre Fabre, Blissim, Maison Farida, Capsul,
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
          <strong>L'outil de carrousels</strong> · construit en JavaScript,
          assisté par IA · permet à une petite entreprise de publier
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
    text: "Contenus, campagnes, newsletters, webinars, événements, supports, landing pages : je peux concevoir, produire, coordonner l'exécution · et piloter les prestataires, l'équipe et le budget qui vont avec.",
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
        Un cycle simple, appliqué à chaque mission · de la stratégie éditoriale
        à un programme créateurs, d'une campagne paid à un dispositif
        communautaire.
      </p>
      <div className="about-pillars__grid">
        {METHOD_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="about-pillars__card"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
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
          rôle en cycle complet · j'allais chercher mes clients, je leur
          vendais la campagne, et je l'exécutais moi-même. C'est là que j'ai
          appris ce qu'un client attend vraiment : une idée qui sort dans
          les temps et qui produit un chiffre.
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
          bootcamp full-stack JavaScript, à temps plein, pour arrêter de
          dépendre d'un tiers pour faire exister une idée. Depuis, je construis mes
          propres outils · dont un qui transforme les articles de blog en
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
        Un parcours entre régie, agence, plateforme tech et indépendante,
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
        De la communication aux médias, du marketing digital au dev · chaque
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
            <h4>{ed.degree}{ed.school && ` · ${ed.school}`}</h4>
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
          Un inventaire honnête, avec un indicateur de niveau par outil,
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
