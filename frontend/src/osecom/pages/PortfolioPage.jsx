import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { SITE } from "../config/site";

const CASE_STUDIES = [
  {
    slug: "legratin",
    tag: "LEGRATIN.IO · SAAS B2B · HR TECH · 2021 → 2024 · 3 ANS · CODIR · ACTIONNAIRE",
    title: "Construction d'une fonction marketing complète dans une startup Station F",
    pitch: "Arrivée à 4 personnes, rattachée au fondateur, encadrement de 2 juniors. J'ai construit toute la fonction marketing & communication sur 3 ans : stratégie, acquisition, contenu, CRM, événements, sales enablement. LeGratin.io a depuis été intégrée au groupe Nexoris.",
    heroImage: {
      todo: "Capture d'écran du site LeGratin.io OU photo d'équipe à Station F OU graphique de croissance utilisateurs",
      caption: "LeGratin.io · Plateforme freelances IT · Station F",
    },
    gallery: [
      { todo: "Screenshot blog LeGratin + interviews d'experts", caption: "50+ interviews d'experts et de DT" },
      { todo: "Screenshot dashboard HubSpot ou analytics", caption: "Pilotage KPIs hebdo CODIR" },
      { todo: "Screenshot d'un webinar + inscrits", caption: "30+ webinars produits" },
      { todo: "Capture annonce de levée 1,5 M€ (presse)", caption: "Levée 1,5 M€ · oct. 2022" },
    ],
    chapters: [
      {
        title: "Le contexte",
        text: "Plateforme tech bi-face : d'un côté des freelances IT à acquérir et activer, de l'autre des clients grands comptes à convertir. Audience développeurs réputée réfractaire au marketing classique. Budget contraint, équipe réduite, enjeu de communauté active pour la levée.",
      },
      {
        title: "La thèse",
        text: "Construire une fonction marketing complète : acquisition organique, contenu éditorial au service du SEO et du commercial, CRM structuré, événements, sales enablement.",
      },
      {
        title: "L'exécution",
        text: "Mise en place HubSpot et parcours automatisés, stratégie SEO + content (blog, interviews d'experts, case studies), 30+ webinars produits comme dispositif de lead gen, événements B2B (VivaTech, Station F), refonte du site, direction artistique, relations presse, encadrement de 2 juniors.",
      },
    ],
    results: [
      "+20 000 freelances inscrits en organique",
      "30+ webinars produits (plusieurs centaines d'inscrits par session)",
      "50+ interviews d'experts et de Directeurs Techniques",
      "Contribution directe à la levée de 1,5 M€ (oct. 2022 · Angelsquare, Super Capital, utilisateurs)",
      "Intégration au groupe Nexoris",
    ],
    tone: "rose",
  },
  {
    slug: "outil-carrousels",
    tag: "OUTIL MAISON · JAVASCRIPT & IA · 2025 · EN LOCAL",
    title: "Générateur de carrousels sociaux assisté par IA",
    pitch: "Un outil que j'ai construit en JavaScript, assisté par Claude. Il transforme les articles de blog en carrousels sociaux au ton et à la direction artistique de chaque marque. Déployé chez une TPE qui publie désormais régulièrement sans recruter de social media.",
    heroImage: {
      todo: "Capture d'écran de l'outil (UI) OU exemple de carrousel généré OU avant/après",
      caption: "L'outil tourne en local, sur l'abonnement Claude du client",
    },
    gallery: [
      { todo: "Screenshot interface de l'outil", caption: "Interface — collage d'article → paramètres marque → génération" },
      { todo: "Carrousel exemple généré (3-4 slides)", caption: "Carrousel généré pour un pressing" },
      { todo: "Avant/après (article brut vs carrousel social)", caption: "De l'article de blog au format social" },
    ],
    chapters: [
      {
        title: "Le problème",
        text: "Les TPE/PME n'ont ni le budget pour recruter un social media manager, ni le temps pour transformer leurs contenus en formats natifs. Résultat : des blogs qui ne tournent pas sur les réseaux, et des pages sociales vides.",
      },
      {
        title: "La solution",
        text: "Un outil en JavaScript qui lit un article, détecte les points clés, génère un carrousel LinkedIn/Instagram au ton de la marque, respecte la direction artistique (couleurs, typo, template). Fonctionne en local, sur l'abonnement Claude du client — pas de SaaS, pas d'abonnement supplémentaire, le client reste propriétaire.",
      },
      {
        title: "La différence",
        text: "C'est l'illustration de ma manière d'intégrer les nouveaux outils aux process marketing : utile, pas gadget. Formation Full-Stack JavaScript GOMYCODE mise à profit pour prototyper vite, dialoguer avec les équipes produit et construire sans dépendre d'un tiers.",
      },
    ],
    results: [
      "Déployé chez une TPE (pressing de proximité) qui publie régulièrement sans embaucher",
      "[TODO Essia · ajouter 1 chiffre : nombre de carrousels générés / temps gagné par semaine]",
      "Démontre la manière d'intégrer l'IA aux process marketing (pas en bullet point, en production)",
    ],
    tone: "olive",
  },
  {
    slug: "freelance-beauty",
    tag: "FREELANCE · PRODUCTION AUDIOVISUELLE · 2024-2025 · BEAUTÉ & PHARMA",
    title: "Nuxe · Pierre Fabre · Blissim",
    pitch: "En direct avec les équipes brand et contenu de marques exigeantes : production de vidéos courtes, UGC, Reels, TikTok, carrousels. 5-6 vidéos pour Nuxe en 2025, séries récurrentes pour Pierre Fabre, Blissim, Maison Farida, Capsul.",
    heroImage: {
      todo: "Capture d'une vidéo Nuxe que tu as produite (frame) OU grid Instagram marques OU behind-the-scenes tournage",
      caption: "Production audiovisuelle en direct avec les marques",
    },
    gallery: [
      { todo: "Screenshot Instagram/TikTok Nuxe avec vidéo visible", caption: "Vidéos Nuxe 2025" },
      { todo: "Screenshot Pierre Fabre / Blissim / Maison Farida", caption: "Séries récurrentes · Pierre Fabre, Blissim" },
      { todo: "Behind-the-scenes tournage ou setup", caption: "Direction, tournage, montage en autonomie" },
    ],
    chapters: [
      {
        title: "Le contexte",
        text: "Marques beauté et pharma qui veulent produire du contenu social régulier, de qualité, sans passer par la lourdeur d'une agence. Elles cherchent quelqu'un qui comprend le brief brand ET qui livre la production.",
      },
      {
        title: "Mon rôle",
        text: "Direction créative, tournage, montage, direction de shootings, UGC. Je passe du brief au livrable final en autonomie. Cadence industrielle, qualité native social.",
      },
    ],
    results: [
      "[TODO Essia · ajouter 1 chiffre Nuxe : vues cumulées / taux d'engagement / nombre de vidéos livrées]",
      "[TODO Essia · chiffre Pierre Fabre ou Blissim]",
      "Reconduction sur plusieurs cycles · relation directe avec les équipes brand",
    ],
    tone: "sky",
  },
  {
    slug: "flatlab",
    tag: "FREELANCE · DIGITAL COMPLET · CONCIERGERIE · 2024-2025",
    title: "FlatLab",
    pitch: "Accompagnement digital complet de bout en bout d'une conciergerie : site, réseaux sociaux, automatisation. Un dispositif pour exister en ligne sans mobiliser l'équipe au quotidien.",
    heroImage: {
      todo: "Capture d'écran du site FlatLab (home) OU grid Instagram",
      caption: "FlatLab · Conciergerie · Digital complet",
    },
    gallery: [
      { todo: "Screenshot site FlatLab desktop", caption: "Site livré en autonomie" },
      { todo: "Screenshot Instagram / réseaux sociaux FlatLab", caption: "Structuration des réseaux sociaux" },
      { todo: "Screenshot automatisation / workflow", caption: "Automatisation des process" },
    ],
    chapters: [
      {
        title: "Le besoin",
        text: "Une conciergerie qui veut exister en ligne sans mobiliser l'équipe au quotidien. Besoin de rapidité, de pragmatisme, et d'un dispositif qui tient dans la durée sans entretien lourd.",
      },
      {
        title: "Mon rôle",
        text: "Stratégie, conception, livraison. Site livré en autonomie (formation Full-Stack JavaScript GOMYCODE mise à profit), structuration des réseaux sociaux, automatisation des process.",
      },
    ],
    results: [
      "[TODO Essia · chiffre trafic / leads / followers FlatLab]",
      "Dispositif de bout en bout, sans dépendance à une agence",
    ],
    tone: "yellow",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page page--portfolio">
      <PortfolioHero />
      {CASE_STUDIES.map((cs) => (
        <CaseStudy key={cs.slug} cs={cs} />
      ))}
      <PortfolioCta />
    </main>
  );
}

function PortfolioHero() {
  return (
    <section className="pf-hero">
      <span className="mono">RÉALISATIONS · CASE STUDIES</span>
      <h1>
        Quatre projets qui racontent
        <br />
        ma façon de travailler.
      </h1>
      <p>
        LeGratin.io en pilier (CODIR, actionnaire, +20 000 utilisateurs
        acquis en organique, levée 1,5 M€), mon outil IA maison, et deux
        angles freelance : production audiovisuelle avec les marques
        exigeantes, et digital complet pour les TPE/PME. Chaque case répond
        à la même question : quelle preuve j'apporte ici ?
      </p>
      <div className="pf-hero__nav">
        {CASE_STUDIES.map((cs) => (
          <a key={cs.slug} href={`#${cs.slug}`} className="chip">
            {cs.title.length > 40 ? cs.title.slice(0, 40) + "…" : cs.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ cs }) {
  return (
    <section id={cs.slug} className={`pf-case pf-case--${cs.tone}`} data-reveal>
      <div className="pf-case__head">
        <span className="mono">{cs.tag}</span>
        <h2>{cs.title}</h2>
        <p className="pf-case__pitch">{cs.pitch}</p>
      </div>

      <figure className="pf-case__hero">
        <div className="pf-case__media pf-case__media--hero">
          <div className="pf-case__placeholder">
            <span className="mono">IMAGE À AJOUTER</span>
            <p>{cs.heroImage.todo}</p>
          </div>
        </div>
        <figcaption className="pf-case__caption mono">{cs.heroImage.caption}</figcaption>
      </figure>

      <div className="pf-case__body">
        <div className="pf-case__chapters">
          {cs.chapters.map((ch) => (
            <article key={ch.title} className="pf-case__chapter">
              <h3>{ch.title}</h3>
              <p>{ch.text}</p>
            </article>
          ))}
        </div>

        <aside className="pf-case__results">
          <span className="mono">RÉSULTATS</span>
          <ul>
            {cs.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="pf-case__gallery">
        {cs.gallery.map((g, i) => (
          <figure key={i} className="pf-case__gallery-item">
            <div className="pf-case__media">
              <div className="pf-case__placeholder">
                <span className="mono">IMAGE {i + 1}</span>
                <p>{g.todo}</p>
              </div>
            </div>
            <figcaption className="pf-case__caption mono">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function PortfolioCta() {
  return (
    <section className="pf-cta" data-reveal>
      <div className="pf-cta__card">
        <span className="mono">CE PROFIL VOUS PARLE ?</span>
        <h2>Discutons de votre poste.</h2>
        <div className="pf-cta__row">
          <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--olive">
            Télécharger mon CV
          </a>
          <Link to={ROUTES.contact} className="btn btn--rose">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
