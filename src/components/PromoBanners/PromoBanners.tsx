import './PromoBanners.scss'

interface Banner {
  title: string
  text: string
  cta: string
  href: string
}

const banners: Banner[] = [
  { title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', cta: 'Confira', href: '#' },
  { title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', cta: 'Confira', href: '#' },
]

export default function PromoBanners() {
  return (
    <section className="promo-banners container" aria-label="Parceiros">
      {banners.map(({ title, text, cta, href }, index) => (
        <article key={index} className="promo-banners__item">
          <h2 className="promo-banners__title">{title}</h2>
          <p className="promo-banners__text">{text}</p>
          <a href={href} className="promo-banners__cta">
            {cta}
          </a>
        </article>
      ))}
    </section>
  )
}
