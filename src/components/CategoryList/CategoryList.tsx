import bebidasIcon from '../../assets/categories/bebidas.png'
import esportesIcon from '../../assets/categories/esportes.png'
import ferramentasIcon from '../../assets/categories/ferramentas.png'
import modaIcon from '../../assets/categories/moda.png'
import saudeIcon from '../../assets/categories/saude.png'
import supermercadoIcon from '../../assets/categories/supermercado.png'
import tecnologiaIcon from '../../assets/categories/tecnologia.png'
import './CategoryList.scss'

interface Category {
  label: string
  icon: string
}

const categories: Category[] = [
  { label: 'Tecnologia', icon: tecnologiaIcon },
  { label: 'Supermercado', icon: supermercadoIcon },
  { label: 'Bebidas', icon: bebidasIcon },
  { label: 'Ferramentas', icon: ferramentasIcon },
  { label: 'Saúde', icon: saudeIcon },
  { label: 'Esportes e Fitness', icon: esportesIcon },
  { label: 'Moda', icon: modaIcon },
]

interface Props {
  selected?: string
}

export default function CategoryList({ selected = 'Tecnologia' }: Props) {
  return (
    <section className="categories" aria-label="Navegue por categorias">
      <ul className="container categories__list">
        {categories.map(({ label, icon }) => (
          <li key={label}>
            <a
              href="#"
              className={label === selected ? 'categories__item is-active' : 'categories__item'}
              aria-current={label === selected ? 'true' : undefined}
            >
              <span className="categories__icon">
                <img src={icon} alt="" width={84} height={84} />
              </span>
              <span className="categories__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
