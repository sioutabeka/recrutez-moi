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
      {
        srcs: [
          "/portfolio/legratin-webinar-1.png",
          "/portfolio/legratin-webinar-2.png",
          "/portfolio/legratin-webinar-3.png",
          "/portfolio/legratin-webinar-4.png",
        ],
        alt: "Visuels de webinars LeGratin.io diffusés en LinkedIn Live en 2023",
        caption: "30+ webinars en LinkedIn Live · avec Le Wagon, Jump, Agence Bienfait.co",
        wide: true,
      },
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
        text: "Mise en place HubSpot et parcours automatisés, stratégie SEO + content (blog, interviews d'experts, case studies), 30+ webinars produits et animés en LinkedIn Live comme dispositif de lead gen (no-code, SEO, statut d'auto-entrepreneur…), avec des intervenants partenaires comme Le Wagon, Jump ou l'Agence Bienfait.co, événements B2B (VivaTech, Station F), refonte du site, direction artistique, relations presse, encadrement de 2 juniors.",
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
    tag: "OUTIL MAISON · JAVASCRIPT & IA · 2025 · MULTI-CLIENTS",
    title: "Carrousel Studio · générateur de carrousels assisté par IA",
    pitch: "Une app que j'ai construite en JavaScript, assistée par Claude, sous forme de template que j'adapte à chaque client : direction artistique, ton, patterns narratifs, langues. En amont, je rédige les articles de blog dont l'outil se nourrit. Résultat : une chaîne de contenu complète, de l'article au carrousel publié.",
    heroImage: {
      src: "/portfolio/carrousel-studio-article.png",
      alt: "Interface de Carrousel Studio : choix du pattern narratif et de la langue avant génération",
      caption: "Un article, un pattern narratif, une langue · génération en 25 secondes environ",
    },
    gallery: [
      {
        src: "/portfolio/carrousel-studio-patterns.png",
        alt: "Page des patterns narratifs de Carrousel Studio",
        caption: "Les patterns narratifs que j'écris pour guider Claude",
      },
      {
        src: "/portfolio/carrousel-studio-themes.png",
        alt: "Sélection des thèmes visuels et export PNG dans Carrousel Studio",
        caption: "Thèmes visuels à la DA du client · mode édition · export PNG",
      },
      {
        src: "/portfolio/carrousel-studio-slide.png",
        alt: "Slide de couverture d'un carrousel généré pour le pressing Bel & Blanc",
        caption: "Slide de couverture générée pour Bel & Blanc, pressing artisanal",
      },
    ],
    chapters: [
      {
        title: "Le problème",
        text: "Les TPE/PME n'ont ni le budget pour recruter un social media manager, ni le temps pour transformer leurs contenus en formats natifs. Résultat : des blogs qui ne tournent pas sur les réseaux, et des pages sociales vides.",
      },
      {
        title: "La solution",
        text: "Je rédige d'abord les articles de blog experts de la marque. L'app les transforme ensuite en carrousels LinkedIn/Instagram en suivant des patterns narratifs que j'écris moi-même (le diagnostic, le geste-par-geste, les causes, les pièges), au ton et à la direction artistique du client (couleurs, typo, thèmes visuels), dans sa langue : chez Bel & Blanc, en français et en tounsi. Un mode édition permet de retoucher chaque slide avant l'export PNG. L'app tourne en local, sur l'abonnement Claude du client, qui en reste propriétaire.",
      },
      {
        title: "La différence",
        text: "Un template unique, décliné client par client : chaque nouvelle marque récupère l'outil avec sa propre DA, sa voix et ses formats. C'est ma manière d'intégrer l'IA aux process marketing, avec une utilité concrète. Formation Full-Stack JavaScript GOMYCODE mise à profit pour prototyper vite, dialoguer avec les équipes produit et construire sans dépendre d'un tiers.",
      },
    ],
    results: [
      "Déployé chez plusieurs clients, chacun avec sa DA et sa voix",
      "Un carrousel de 6 slides généré en 25 secondes environ, puis relu et ajusté",
      "Bel & Blanc : 62 articles rédigés et classés, prêts à devenir des carrousels",
      "Contenu bilingue français / tounsi pour une clientèle locale",
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
      {
        video: "/portfolio/maison-farida.mp4",
        poster: "/portfolio/maison-farida-poster.jpg",
        alt: "Vidéo produite pour Maison Farida, pâtisserie à Paris",
        caption: "Maison Farida · vidéo produite en freelance",
      },
      {
        video: "/portfolio/nuxe-blissim-1.mp4",
        poster: "/portfolio/nuxe-blissim-1-poster.jpg",
        alt: "Vidéo produite pour la box Nuxe × Blissim",
        caption: "Nuxe × Blissim · vidéo produite en freelance",
      },
      {
        video: "/portfolio/nuxe-blissim-2.mp4",
        poster: "/portfolio/nuxe-blissim-2-poster.jpg",
        alt: "Vidéo produite pour la box Nuxe × Blissim, application d'un soin",
        caption: "Nuxe × Blissim · vidéo produite en freelance",
      },
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
      src: "/portfolio/flatlab-site.jpg",
      alt: "Page d'accueil du site FlatLab, conciergerie premium à Dubaï, Nice, Paris et en Tunisie",
      caption: "Site FlatLab · conciergerie premium · Dubaï, Nice, Paris, Tunisie · FR / EN",
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
        acquis en organique, levée 1,5 M€), mon app IA de carrousels, et deux
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

// Les visuels et chiffres pas encore fournis (todo / [TODO …]) restent masqués.
const hasImage = (img) => Boolean(img && (img.src || img.srcs || img.video));
const isFilled = (text) => !text.includes("[TODO");

function CaseStudy({ cs }) {
  const gallery = cs.gallery.filter(hasImage);
  const results = cs.results.filter(isFilled);
  return (
    <section id={cs.slug} className={`pf-case pf-case--${cs.tone}`} data-reveal>
      <div className="pf-case__head">
        <span className="mono">{cs.tag}</span>
        <h2>{cs.title}</h2>
        <p className="pf-case__pitch">{cs.pitch}</p>
      </div>

      {hasImage(cs.heroImage) && (
        <figure className="pf-case__hero">
          <div className="pf-case__media pf-case__media--hero pf-case__media--img">
            <CaseImage src={cs.heroImage.src} alt={cs.heroImage.alt} />
          </div>
          <figcaption className="pf-case__caption mono">{cs.heroImage.caption}</figcaption>
        </figure>
      )}

      <div className="pf-case__body">
        <div className="pf-case__chapters">
          {cs.chapters.map((ch) => (
            <article key={ch.title} className="pf-case__chapter">
              <h3>{ch.title}</h3>
              <p>{ch.text}</p>
            </article>
          ))}
        </div>

        {results.length > 0 && (
          <aside className="pf-case__results">
            <span className="mono">RÉSULTATS</span>
            <ul>
              {results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      {gallery.length > 0 && (
        <div className="pf-case__gallery">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`pf-case__gallery-item${g.wide ? " pf-case__gallery-item--wide" : ""}${g.video ? " pf-case__gallery-item--video" : ""}`}
            >
              <div className="pf-case__media pf-case__media--img">
                {g.video ? (
                  <video src={g.video} poster={g.poster} aria-label={g.alt} controls playsInline preload="none" />
                ) : g.srcs ? (
                  <div className="pf-case__strip">
                    {g.srcs.map((s) => (
                      <a key={s} href={s} target="_blank" rel="noreferrer">
                        <img src={s} alt={g.alt} loading="lazy" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <CaseImage src={g.src} alt={g.alt} />
                )}
              </div>
              <figcaption className="pf-case__caption mono">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

function CaseImage({ src, alt }) {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} loading="lazy" />
    </a>
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
