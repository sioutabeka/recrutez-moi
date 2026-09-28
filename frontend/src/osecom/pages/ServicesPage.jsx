import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutHero from "../../assets/about-hero.jpg";
import logo from "../../assets/logo-recrutez-essia.png";
import MorphHeadline from "../components/MorphHeadline";
import { useHeroDrift } from "../lib/hooks";
import { ROUTES } from "../config/routes";

const SRV_HERO_LINES = [
  "Construire une audience.",
  "L'activer.",
  "La faire grandir.",
];

const EXPERTISES = [
  {
    slug: "community-creator",
    tag: "01 · COMMUNITY & CREATOR MARKETING",
    title: "Écosystèmes de créateurs, ambassadeurs & communautés",
    text: "Programmes créateurs, influence, UGC, ambassadeurs, partenariats et animation communautaire. Ce qui fait qu'une marque ne dépend pas uniquement de sa propre prise de parole.",
    skills: [
      "Programmes créateurs & ambassadeurs",
      "Activation d'influenceurs",
      "UGC & short-form",
      "Partenariats B2B & B2C",
      "Animation communautaire",
      "Community-Led Growth",
    ],
    tone: "rose",
  },
  {
    slug: "growth-acquisition",
    tag: "02 · GROWTH & ACQUISITION",
    title: "De l'audience à la croissance business",
    text: "Acquisition organique et paid, conversion, CRM, activation et optimisation des parcours. Chercher les leviers qui transforment une audience en utilisateurs — et des utilisateurs en croissance.",
    skills: [
      "Acquisition organique",
      "Paid : Meta, TikTok, Google Ads",
      "Funnels & conversion",
      "CRM & automatisation",
      "Analytics & KPI",
      "Tests & itérations",
    ],
    tone: "olive",
  },
  {
    slug: "content-editorial",
    tag: "03 · CONTENT & EDITORIAL",
    title: "Stratégie éditoriale et production de contenu",
    text: "Stratégie éditoriale, social content, copywriting, formats courts et production autonome. Concevoir les dispositifs — et pouvoir produire les contenus soi-même.",
    skills: [
      "Ligne éditoriale multi-marques",
      "Calendrier & programmation",
      "Interviews, webinars, talks",
      "Tournage & montage vidéo",
      "Copywriting & newsletters",
      "SEO éditorial",
    ],
    tone: "sky",
  },
  {
    slug: "brand-strategy",
    tag: "04 · BRAND & STRATEGY",
    title: "Positionnement et cap de marque",
    text: "Positionnement, ligne éditoriale, territoire de marque et stratégie de communication. Une communauté se construit plus facilement autour d'une marque qui sait ce qu'elle veut raconter.",
    skills: [
      "Positionnement",
      "Plateforme de marque",
      "Territoire éditorial",
      "Ton de marque",
      "Direction artistique",
      "Stratégie de communication",
    ],
    tone: "yellow",
  },
];

export default function ServicesPage() {
  return (
    <main className="page page--services">
      <ServicesHero />
      <div className="srv-list">
        {EXPERTISES.map((exp, i) => (
          <ExpertiseCard key={exp.slug} expertise={exp} index={i} />
        ))}
      </div>
      <ServicesFoot />
    </main>
  );
}

function ServicesHero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);
  useHeroDrift(sectionRef, textRef, mediaRef);

  return (
    <section className="srv-hero" ref={sectionRef}>
      <div className="srv-hero__row">
        <div className="srv-hero__col-text" ref={textRef}>
          <span className="mono">MES EXPERTISES · GROWTH & COMMUNITY</span>
          <MorphHeadline lines={SRV_HERO_LINES} accentIdx={-1} />
          <p>
            Je travaille à l'intersection du marketing, du contenu, de la
            communauté et de la croissance.{" "}
            <strong>Mon approche : comprendre l'objectif business, identifier
            les bons leviers, construire rapidement, mesurer et itérer.</strong>
          </p>
          <Link to={ROUTES.contact} className="btn btn--rose">
            Me contacter
          </Link>
        </div>

        <div className="srv-hero__col-media" ref={mediaRef}>
          <div className="srv-hero__media">
            <img src={aboutHero} alt="Essia Ben Kheder — Expertises" className="srv-hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ expertise, index }) {
  return (
    <article
      className={`srv srv--${expertise.tone}`}
      data-reveal
      style={{ "--i": index }}
    >
      <div className="srv__head">
        <span className="mono">{expertise.tag}</span>
        <h2>{expertise.title}</h2>
        <p>{expertise.text}</p>
      </div>
      <div className="srv__cols">
        <div className="srv__col srv__col--full">
          <span className="mono mono--sm">CE QUE JE FAIS</span>
          <div className="srv__chips">
            {expertise.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ServicesFoot() {
  return (
    <section className="srv-foot">
      <div className="srv-foot__card">
        <img src={logo} alt="" className="srv-foot__logo" />
        <span className="mono">VOUS RECRUTEZ ?</span>
        <h2>
          Parlons Growth, Community & Marketing.
        </h2>
        <p>
          Vous cherchez quelqu'un capable de construire une communauté,
          développer des programmes créateurs et relier ces dispositifs à des
          objectifs d'acquisition et d'engagement ? Discutons.
        </p>
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
