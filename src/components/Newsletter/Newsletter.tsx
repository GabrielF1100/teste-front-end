import { useId } from 'react'
import './Newsletter.scss'

export default function Newsletter() {
  const headingId = useId()
  const termsId = useId()

  return (
    <section className="newsletter" aria-labelledby={headingId}>
      <div className="container newsletter__inner">
        <div className="newsletter__copy">
          <h2 id={headingId} className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__text">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <div className="newsletter__fields">
            <label htmlFor="newsletter-name" className="sr-only">
              Digite seu nome
            </label>
            <input
              id="newsletter-name"
              type="text"
              placeholder="Digite seu nome"
              autoComplete="name"
              required
            />

            <label htmlFor="newsletter-email" className="sr-only">
              Digite seu e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              required
            />

            <button type="submit" className="newsletter__submit">
              Inscrever
            </button>
          </div>

          <label htmlFor={termsId} className="newsletter__terms">
            <input id={termsId} type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}
