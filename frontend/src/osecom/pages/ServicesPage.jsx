import { Link } from "react-router-dom";
import logoOsecom from "../../assets/logo-osecom-freelance.jpeg";
import logoLegratin from "../../assets/logo-legratin.jpeg";
import logoKalikado from "../../assets/logo-kalikado.png";
import logoBergamotte from "../../assets/logo-bergamotte.jpeg";
import logoPigier from "../../assets/logo-pigier.png";
import logoUniversiteNice from "../../assets/logo-universite-nice.png";
import logoNiceMatin from "../../assets/logo-nice-matin.jpeg";
import IconArrow from "../components/IconArrow";
import { SERVICES } from "../data/services";
import { ROUTES } from "../config/routes";

// Rich experience list · merge SERVICES data (has intro/tools/results) with additional Timeline metadata
const TIMELINE = [
  {
    slug: "osecom",
    period: "Sept. 2024 → Aujourd'hui",
    role: "Freelance · Marketing, Growth & Content",
    company: "OseCom · Indépendante",
    place: "Paris · Hybride · En direct avec les marques",
    monogram: "OS",
    logo: logoOsecom,
    logoFill: true,
    tone: "olive",
    sectors: ["Freelance", "Beauté", "Pharma", "TPE/PME", "Production audiovisuelle"],
    bullets: [
      "Une dizaine de clients accompagnés · Forfaits 1-5 K€",
      "Production audiovisuelle : Nuxe, Pierre Fabre, Blissim, Maison Farida, Capsul",
      "Digital complet TPE/PME : MKL Energy, FlatLab, un pressing",
      "Outil de carrousels construit en JavaScript, assisté par IA",
    ],
  },
  {
    slug: "legratin",
    period: "Sept. 2021 → Sept. 2024",
    role: "Head of Community puis Head of Marketing & Growth · CODIR · Actionnaire",
    company: "LeGratin.io · Plateforme tech de freelances IT",
    place: "Paris · Station F (avec 42)",
    monogram: "LG",
    logo: logoLegratin,
    tone: "rose",
    sectors: ["SaaS B2B", "HR Tech", "Startup", "Scale-up", "Marketplace"],
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
    company: "Agence KaliKado · Conseil & Solutions Sampling",
    place: "Neuilly-sur-Seine · Cycle complet",
    monogram: "KK",
    logo: logoKalikado,
    tone: "yellow",
    sectors: ["Agence", "Grande consommation", "Sampling B2C", "Jeux & loterie"],
    bullets: [
      "Rôle en cycle complet : je ramenais mes clients, vendais la campagne, la pilotais, présentais le bilan chiffré",
      "Portefeuille clients : Groupe Andros (Bonne Maman, Mamie Nova), L'Or Espresso, L'Arbre Vert, FDJ",
      "Résultat : [TODO Essia · ajouter 1 chiffre — nombre de campagnes vendues OU CA généré OU taux de reconduction]",
      "Preuve : capacité à transformer un besoin client en revenus mesurables, en autonomie totale",
    ],
  },
  {
    slug: "bergamotte",
    period: "Sept. 2018 → Mai 2019",
    role: "Cheffe de projet Digital",
    company: "Agence Bergamotte",
    place: "Paris 15 · Secteur régulé",
    monogram: "BG",
    logo: logoBergamotte,
    tone: "sky",
    sectors: ["Agence", "B2B", "Services financiers", "Assurance", "Secteur régulé"],
    bullets: [
      "Comptes institutionnels : Axa, Macif, Matmut, Banque Populaire",
      "Pilotage projets éditoriaux de A à Z (cadrage, planning, prestataires, budgets, qualité)",
      "Résultat : [TODO Essia · ajouter 1 chiffre — nombre de projets livrés OU volume de contenus OU satisfaction client]",
      "Preuve : capacité à opérer en secteur régulé avec exigence de conformité et de délais",
    ],
  },
  {
    slug: "edusup",
    period: "Sept. 2017 → Sept. 2018",
    role: "Chargée de communication & développement",
    company: "Pigier",
    place: "Toulouse · Seule sur périmètre",
    monogram: "PG",
    logo: logoPigier,
    tone: "cream",
    sectors: ["Édutech", "Éducation", "Formation", "Enseignement supérieur", "École de commerce"],
    bullets: [
      "Seule sur le périmètre : stratégie, exécution, événements, RP",
      "Campagnes radio et affichage conçues puis déployées",
      "Résultat : [TODO Essia · ajouter 1 chiffre — nombre d'étudiants recrutés OU retombées presse OU hausse notoriété]",
      "Preuve : capacité à construire une fonction communication en solo, de zéro",
    ],
  },
  {
    slug: "universite-nice",
    period: "2016 → 2017",
    role: "Community Manager",
    company: "Université Nice Sophia Antipolis",
    place: "Nice",
    monogram: "UN",
    logo: logoUniversiteNice,
    tone: "yellow",
    sectors: ["Éducation", "Enseignement supérieur", "Secteur public", "Bibliothèque numérique"],
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
    monogram: "NM",
    logo: logoNiceMatin,
    logoFill: true,
    tone: "brown",
    sectors: ["Média", "Régie publicitaire", "Presse régionale", "Planning stratégique"],
    bullets: [
      "Analyse stratégique, veille médias, data",
      "Coordination de projets au sein de la régie",
      "Le point de départ : comprendre comment se distribue l'attention",
    ],
  },
];

// Experiences with a proper detail page ready
const RICH_SLUGS = ["legratin", "kalikado"];

export default function ServicesPage() {
  return (
    <main className="page page--services">
      <ExperienceIntro />
      <ExperienceTimeline />
      <ExperienceFoot />
    </main>
  );
}

function ExperienceIntro() {
  return (
    <section className="srv-intro" data-reveal>
      <span className="mono">UN MOT AVANT</span>
      <p>
        Après avoir construit en interne, livré en freelance, appris à
        coder, j'ai envie d'une seule chose : m'embarquer dans une nouvelle
        aventure, en équipe, et d'éprouver à nouveau la satisfaction des
        résultats construits ensemble.
      </p>
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
              {exp.sectors && exp.sectors.length > 0 && (
                <div className="about-timeline__sectors">
                  {exp.sectors.map((s) => (
                    <span key={s} className="about-timeline__sector">{s}</span>
                  ))}
                </div>
              )}
            </div>
            <span
              className={`about-timeline__dot about-timeline__dot--logo about-timeline__dot--${exp.tone || "olive"}${exp.logo ? " about-timeline__dot--img" : ""}${exp.logoFill ? " about-timeline__dot--fill" : ""}`}
              aria-hidden="true"
            >
              {exp.logo ? <img src={exp.logo} alt="" /> : (exp.monogram || "")}
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
        <span className="mono">VOUS RECRUTEZ UN·E RESPONSABLE MARKETING & COMMUNICATION ?</span>
        <h2>Discutons de votre contexte.</h2>
        <p>
          Vous cherchez quelqu'un capable de tenir une fonction marketing &
          communication complète, de la stratégie à l'exécution, en autonomie
          ou en équipe ? Un profil transverse, opérationnel, qui connaît
          aussi bien les contextes B2B tech que la grande consommation ?
          Discutons.
        </p>
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
