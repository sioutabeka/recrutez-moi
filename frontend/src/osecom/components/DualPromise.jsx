/**
 * Home · "Avant / Après" section.
 * Vertical stack: a strucked-through "sans stratégie" claim, a bouncing
 * arrow, then the "avec stratégie" statement. The strike-through animates
 * on scroll-in via the .dv1__title--strike pseudo-element.
 */
export default function DualPromise() {
  return (
    <section className="dv1" data-reveal>
      <div className="dv1__before">
        <span className="dv1__tag mono">MARKETING = FONCTION SUPPORT</span>
        <h3 className="dv1__title dv1__title--strike">
          Un centre de coût qu'on tolère.
        </h3>
        <p>
          Pour beaucoup d'équipes, le marketing sert à faire joli et à
          occuper LinkedIn. C'est aussi ce qui l'empêche d'accéder aux vrais
          leviers de la boîte.
        </p>
      </div>

      <div className="dv1__arrow" aria-hidden="true">
        <svg viewBox="0 0 40 60" width="40" height="60">
          <path
            d="M20 4 L20 48 M6 34 L20 52 L34 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="dv1__after">
        <span className="dv1__tag mono">MARKETING = CE QUI REND RACHETABLE</span>
        <h3 className="dv1__title">
          Ma thèse, <span className="dv1__title-accent">prouvée sur le terrain</span>.
        </h3>
        <p>
          À LeGratin.io, la traction que j'ai construite a servi à lever
          1,5 M€, puis a positionné l'entreprise en cible d'acquisition —
          depuis intégrée au groupe Nexoris. Le marketing, ce n'est pas ce
          qu'on saupoudre en fin d'année.
        </p>
      </div>
    </section>
  );
}
