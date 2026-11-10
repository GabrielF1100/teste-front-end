import { useId } from 'react'
import brandLogo from '../../assets/brand-logo.png'
import './BrandList.scss'

// O layout mostra 5 marcas; todas usam o logotipo da Econverse como exemplo
const brands = [1, 2, 3, 4, 5]

export default function BrandList() {
  const headingId = useId()

  return (
    <section className="brand-list container" aria-labelledby={headingId}>
      <h2 className="brand-list__title" id={headingId}>
        Navegue por marcas
      </h2>

      <ul className="brand-list__items">
        {brands.map((brand) => (
          <li key={brand}>
            <a href="#" className="brand-list__item" aria-label={`Marca Econverse ${brand}`}>
              <img src={brandLogo} alt="" width={117} height={35} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
