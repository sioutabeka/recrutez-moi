const JOBS = [
  ["Responsable Marketing & Communication", "rose"],
  ["Responsable Marketing", "olive"],
  ["Responsable Communication", "sky"],
  ["Marketing & Communication Manager", "cream"],
  ["Chargée Marketing & Communication", "yellow"],
];

/**
 * Large flowing list of target jobs with colored flower separators.
 * Used on Home and About. Style matches the legacy site's "SERVICES I OFFER"
 * section: big serif text wrapping across multiple lines, each item followed
 * by a small "✿" in a unique pastel.
 */
export default function ServicesOffer() {
  return (
    <section className="services-offer" data-reveal>
      <span className="mono">LES POSTES QUE JE VISE</span>
      <div className="services-offer__row">
        {JOBS.map(([label, tone]) => (
          <span key={label} className="services-offer__item">
            <span>{label}</span>
            <span
              className={`services-offer__flower services-offer__flower--${tone}`}
              aria-hidden="true"
            >
              ✿
            </span>
          </span>
        ))}
        <span className="services-offer__more">CDI · Paris</span>
      </div>
    </section>
  );
}
