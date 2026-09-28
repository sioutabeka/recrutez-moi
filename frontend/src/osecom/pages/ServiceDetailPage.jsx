import { Link, Navigate, useParams } from "react-router-dom";
import IconArrow from "../components/IconArrow";
import Placeholder from "../components/Placeholder";
import { SERVICES } from "../data/services";
import { ROUTES } from "../config/routes";
import { SITE } from "../config/site";

// Palette de tons pour les tuiles galerie placeholders
const GALLERY_TONES = ["rose", "olive", "sky", "cream", "yellow", "brown"];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const index = SERVICES.findIndex((s) => s.slug === slug);
  if (index < 0) return <Navigate to={ROUTES.services} replace />;

  const service = SERVICES[index];
  const next = SERVICES[(index + 1) % SERVICES.length];

  return (
    <main className={`page page--service page--service-${service.tone}`}>
      <ServiceHero service={service} />
      {service.problem && <ProblemSection problem={service.problem} />}
      {service.solution && <SolutionSection solution={service.solution} />}
      {service.offer && <OfferSection offer={service.offer} />}
      <SymptomsSection service={service} />
      {service.gallery && service.gallery.length > 0 && (
        <GallerySection service={service} />
      )}
      {service.tools && service.tools.length > 0 && (
        <ToolsSection tools={service.tools} />
      )}
      {service.results && <ResultsSection results={service.results} />}
      <FinalCta service={service} />
      <NextService next={next} />
    </main>
  );
}

function ServiceHero({ service }) {
  return (
    <section className="srvd-hero">
      <Link to={ROUTES.services} className="srvd-back">
        <BackArrow />
        <span>Retour à mes expériences</span>
      </Link>
      <span className="mono srvd-hero__tag">{service.tag}</span>
      <h1>{service.titleEN || service.title + "."}</h1>
      <p className="srvd-hero__intro">{service.intro}</p>
      <div className="srvd-hero__cta">
        <a href={SITE.cvUrl} target="_blank" rel="noreferrer" className="btn btn--brown">
          {service.primaryCta || "Télécharger mon CV"}
        </a>
        <Link to={ROUTES.contact} className="btn btn--ghost">
          Me contacter
        </Link>
      </div>
      <div className="srvd-hero__meta">
        <MetaCell label="EXPÉRIENCE" value={service.duration} />
        <MetaCell label="TERRAIN" value={service.rythm} />
        <MetaCell label="CONTEXTE" value={service.format} />
      </div>
    </section>
  );
}

function MetaCell({ label, value }) {
  return (
    <div>
      <span className="mono">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ProblemSection({ problem }) {
  return (
    <section className="srvd-problem" data-reveal>
      <span className="mono">{problem.title}</span>
      <div className="srvd-problem__grid">
        {problem.blocks.map((block, i) => (
          <article
            key={block.subtitle}
            className="srvd-problem__block"
            data-reveal
            style={{ "--delay": i * 0.08 + "s" }}
          >
            <h3>{block.subtitle}</h3>
            {block.text.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionSection({ solution }) {
  return (
    <section className="srvd-solution" data-reveal>
      <span className="mono">{solution.title}</span>
      <h2>{solution.text}</h2>
      <p>{solution.supporting}</p>
    </section>
  );
}

function OfferSection({ offer }) {
  return (
    <section className="srvd-offer" data-reveal>
      <div className="srvd-offer__head">
        <span className="mono">CE QUE J'AI CONSTRUIT</span>
        <h2>{offer.title}</h2>
      </div>
      <div className="srvd-offer__grid">
        {offer.cards.map((card, i) => (
          <div
            key={card.title}
            className="srvd-offer__card"
            data-reveal
            style={{ "--delay": i * 0.1 + "s" }}
          >
            <span className="mono srvd-offer__n">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
            {card.bullets && card.bullets.length > 0 && (
              <ul className="srvd-offer__bullets">
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SymptomsSection({ service }) {
  return (
    <section className="srvd-split" data-reveal>
      <div className="srvd-split__col">
        <span className="mono">CE POUR QUOI JE PEUX ÊTRE UTILE</span>
        <ul className="srvd-symptoms">
          {service.symptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="srvd-split__col srvd-split__col--alt">
        <span className="mono">CE QUE JE MAÎTRISE</span>
        <div className="srvd-delivers">
          {service.delivers.map((d) => (
            <span key={d} className="srvd-chip">
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection({ tools }) {
  return (
    <section className="srvd-tools" data-reveal>
      <span className="mono">OUTILS UTILISÉS</span>
      <div className="srvd-tools__chips">
        {tools.map((tool) => (
          <span key={tool} className="srvd-chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function ResultsSection({ results }) {
  return (
    <section className="srvd-results" data-reveal>
      <span className="mono">{results.title}</span>
      <p className="srvd-results__intro">{results.intro}</p>
      <ul className="srvd-results__list">
        {results.points.map((p, j) => (
          <li key={p} data-reveal style={{ "--delay": j * 0.08 + "s" }}>
            {p}
          </li>
        ))}
      </ul>
      {results.closing && <p className="srvd-results__closing">{results.closing}</p>}
    </section>
  );
}

function GallerySection({ service }) {
  // Nombre de tuiles selon la richesse du contenu (LeGratin/OseCom en ont plus)
  const richSlugs = ["legratin", "outil-carrousels", "osecom"];
  const tileCount = richSlugs.includes(service.slug) ? 6 : 4;
  const tiles = Array.from({ length: tileCount }, (_, i) => ({
    tone: GALLERY_TONES[(i + service.slug.length) % GALLERY_TONES.length],
    label: `${service.title.split(" ")[0].toLowerCase()} ${String(i + 1).padStart(2, "0")}`,
  }));

  return (
    <section className="srvd-gallery" data-reveal>
      <span className="mono">SUPPORTS & RÉALISATIONS</span>
      <h2>Un aperçu du travail livré.</h2>
      <p className="srvd-gallery__note">
        Visuels réels en cours d'ajout — mockups, écrans et supports produits pendant l'expérience.
      </p>
      <div className="srvd-gallery__grid">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="srvd-gallery__tile"
            data-reveal
            style={{ "--delay": i * 0.05 + "s" }}
          >
            <Placeholder ratio="4/3" label={tile.label} tone={tile.tone} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ service }) {
  const cta = service.finalCta;
  return (
    <section className="srvd-cta" data-reveal>
      <div className="srvd-cta__card">
        <span className="mono">CETTE EXPÉRIENCE T'INTÉRESSE ?</span>
        <h2>{cta?.title || "On en parle ?"}</h2>
        <p>
          {cta?.text ||
            "Un échange pour comprendre comment cette expérience peut nourrir ton besoin."}
        </p>

        {(cta?.forWho || cta?.notForWho) && (
          <div className="srvd-cta__forwho">
            {cta.forWho && (
              <div className="srvd-cta__forwho-card srvd-cta__forwho-card--for">
                <span className="mono">POUR QUI</span>
                <p>{cta.forWho}</p>
              </div>
            )}
            {cta.notForWho && (
              <div className="srvd-cta__forwho-card srvd-cta__forwho-card--not">
                <span className="mono">PAS POUR</span>
                <p>{cta.notForWho}</p>
              </div>
            )}
          </div>
        )}

        <div className="srvd-cta__row">
          <Link to={ROUTES.contact} className="btn btn--rose">
            {service.primaryCta || "Me contacter"}
          </Link>
          <Link to={ROUTES.services} className="btn btn--ghost">
            Voir toutes mes expériences
          </Link>
        </div>
      </div>
    </section>
  );
}

function NextService({ next }) {
  return (
    <section className="srvd-next" data-reveal>
      <span className="mono">EXPÉRIENCE SUIVANTE</span>
      <Link to={ROUTES.service(next.slug)} className="srvd-next__link">
        <span>{next.title}</span>
        <IconArrow size={22} />
      </Link>
    </section>
  );
}

function BackArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M13 7 L 1 7 M 6 2 L 1 7 L 6 12"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
