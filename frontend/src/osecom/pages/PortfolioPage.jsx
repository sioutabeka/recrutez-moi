import { Link } from "react-router-dom";
import Placeholder from "../components/Placeholder";
import { PORTFOLIO } from "../data/portfolio";
import { ROUTES } from "../config/routes";

export default function PortfolioPage() {
  return (
    <main className="page page--portfolio">
      <PortfolioHero />
      {PORTFOLIO.map((project) => (
        <CaseStudy key={project.slug} project={project} />
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
        Cinq projets qui racontent
        <br />
        ma façon de bosser.
      </h1>
      <p>
        LeGratin.io en pilier (mission in-house, +20 000 utilisateurs acquis en
        1 an), et quatre projets qui montrent le reste du spectre : freelance,
        agence, B2B régulé, beauté, plateforme. Chaque case répond à la même
        question : quelle preuve j'apporte ici ?
      </p>
      <div className="pf-hero__nav">
        {PORTFOLIO.map((p) => (
          <a key={p.slug} href={`#${p.slug}`} className="chip">
            {p.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project }) {
  return (
    <section id={project.slug} className="pf-case" data-reveal>
      <div className="pf-case__head">
        <span className="mono">{project.tag}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="pf-case__grid">
        {project.images.map((img, j) => (
          <div
            key={j}
            className="pf-case__tile"
            data-reveal
            style={{ "--delay": j * 0.05 + "s" }}
          >
            <Placeholder
              ratio="4/5"
              src={img}
              alt={`${project.title} — visuel ${j + 1}`}
            />
          </div>
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
        <Link to={ROUTES.contact} className="btn btn--rose">
          Me contacter
        </Link>
      </div>
    </section>
  );
}
