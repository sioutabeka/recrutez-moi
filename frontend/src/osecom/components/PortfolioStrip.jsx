import { Link } from "react-router-dom";
import IconArrow from "./IconArrow";
import Placeholder from "./Placeholder";
import { ROUTES } from "../config/routes";
import aboutHero from "../../assets/about-hero.jpg";
import aboutStory from "../../assets/about-story.jpg";
import epjewelsCover from "../../assets/epjewels-cover.jpg";

const TEASERS = [
  { label: "L'outil de carrousels — Marketing × Code × IA", slug: "outil-carrousels", img: aboutStory },
  { label: "LeGratin.io — Vitrine de projets", slug: "legratin", img: aboutHero },
  { label: "UGC & création de contenu", slug: "ugc-creation", img: epjewelsCover },
];

/**
 * 3-card teaser linking to the corresponding case study on /portfolio.
 * Used on Home (with the heading) and About (without — passed via props).
 */
export default function PortfolioStrip({ eyebrow = "RÉALISATIONS", title }) {
  return (
    <section className="portfolio-strip" data-reveal>
      <div className="portfolio-strip__head">
        <span className="mono">{eyebrow}</span>
        {title}
      </div>
      <div className="portfolio-strip__grid">
        {TEASERS.map((teaser, i) => (
          <Link
            key={teaser.slug}
            to={`${ROUTES.portfolio}#${teaser.slug}`}
            className="portfolio-card"
            data-reveal
            style={{ "--delay": i * 0.1 + "s" }}
          >
            <Placeholder ratio="4/5" src={teaser.img} alt={teaser.label} />
            <div className="portfolio-card__foot">
              <span>{teaser.label}</span>
              <IconArrow direction="diag-up" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
