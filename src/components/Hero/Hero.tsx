import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Letreiro decorativo (a foto original do layout não foi exportada) */}
      <div className="hero__neon" aria-hidden="true">
        <span>Black</span>
        <span>Friday</span>
      </div>

      <div className="container hero__content">
        <h1 id="hero-title" className="hero__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="hero__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className="hero__cta">
          Ver produto
        </a>
      </div>
    </section>
  )
}
