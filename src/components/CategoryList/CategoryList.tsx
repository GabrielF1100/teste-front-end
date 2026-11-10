import type { ReactNode } from 'react'
import {
  DevicesIcon,
  DressIcon,
  DrinkIcon,
  FitnessIcon,
  HealthIcon,
  StoreIcon,
  ToolsIcon,
} from '../Icons'
import './CategoryList.scss'

interface Category {
  label: string
  icon: ReactNode
}

const categories: Category[] = [
  { label: 'Tecnologia', icon: <DevicesIcon size={64} /> },
  { label: 'Supermercado', icon: <StoreIcon size={64} /> },
  { label: 'Bebidas', icon: <DrinkIcon size={64} /> },
  { label: 'Ferramentas', icon: <ToolsIcon size={64} /> },
  { label: 'Saúde', icon: <HealthIcon size={64} /> },
  { label: 'Esportes e Fitness', icon: <FitnessIcon size={64} /> },
  { label: 'Moda', icon: <DressIcon size={64} /> },
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
              <span className="categories__icon">{icon}</span>
              <span className="categories__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
