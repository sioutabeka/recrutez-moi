import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutHero from "../../assets/about-hero.jpg";
import logo from "../../assets/logo-recrutez-essia.png";
import IconArrow from "../components/IconArrow";
import MorphHeadline from "../components/MorphHeadline";
import WordRotator from "../components/WordRotator";
import { useHeroDrift } from "../lib/hooks";
import { SERVICES } from "../data/services";
import { ROUTES } from "../config/routes";

const SRV_HERO_WORDS = ["postes", "univers", "clients", "terrains"];
const SRV_HERO_LINES = [
  "9 ans dans le métier,",
  ["sept ", <WordRotator key="rot" words={SRV_HERO_WORDS} />, ","],
  "une même obsession.",
];

export default function ServicesPage() {
  return (
    <main className="page page--services">
      <ServicesHero />
      <div className="srv-list">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
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
          <span className="mono">MON EXPÉRIENCE · RÉGIE, AGENCE, PLATEFORME, INDÉPENDANTE</span>
          <MorphHeadline lines={SRV_HERO_LINES} accentIdx={-1} />
          <p>
            De la régie publicitaire d'un grand média régional en 2015 à la
            plateforme tech incubée à Station F, en passant par deux agences
            et une activité indépendante en direct avec les marques.{" "}
            <strong>Un fil rouge : comprendre comment se distribue
            l'attention.</strong>
          </p>
          <p className="srv-hero__note">
            Clique sur "En savoir plus" pour ouvrir le détail de chaque expérience.
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

function ServiceCard({ service, index }) {
  return (
    <article
      className={`srv srv--${service.tone}`}
      data-reveal
      style={{ "--i": index }}
    >
      <div className="srv__head">
        <span className="mono">{service.tag}</span>
        <h2>{service.title}</h2>
        <p>{service.copy}</p>
      </div>
      <div className="srv__cols">
        <div className="srv__col">
          <span className="mono mono--sm">CONTEXTE & MISSIONS</span>
          <ul>
            {service.symptoms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="srv__col">
          <span className="mono mono--sm">COMPÉTENCES ACTIVÉES</span>
          <div className="srv__chips">
            {service.delivers.map((d) => (
              <span key={d} className="chip">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="srv__cta">
        <Link to={ROUTES.service(service.slug)} className="link-arrow">
          En savoir plus
          <IconArrow size={16} />
        </Link>
        <Link to={ROUTES.contact} className="btn btn--olive btn--compact">
          Me contacter
        </Link>
      </div>
    </article>
  );
}

function ServicesFoot() {
  return (
    <section className="srv-foot">
      <div className="srv-foot__card">
        <img src={logo} alt="" className="srv-foot__logo" />
        <span className="mono">UN PARCOURS QUI PARLE ?</span>
        <h2>
          Sept postes, quatre univers, une même obsession — et un poste en CDI à te proposer ?
        </h2>
        <p>
          Discutons de ton besoin. Je réponds vite, en direct.
        </p>
        <Link to={ROUTES.contact} className="btn btn--olive">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
