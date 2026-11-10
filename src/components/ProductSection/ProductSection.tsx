import { useState } from 'react'
import type { Product } from '../../types/product'
import Carousel from '../Carousel/Carousel'
import ProductCard from '../ProductCard/ProductCard'
import './ProductSection.scss'

interface Props {
  id?: string
  title: string
  products: Product[]
  loading: boolean
  error: string | null
  onSelectProduct: (product: Product) => void
  // Abas de categoria (opcional). Sem abas, exibe o link "Ver todos".
  tabs?: string[]
}

export default function ProductSection({
  id,
  title,
  products,
  loading,
  error,
  onSelectProduct,
  tabs,
}: Props) {
  const [activeTab, setActiveTab] = useState(0)
  const headingId = `${id ?? title}-title`.replace(/\s+/g, '-').toLowerCase()

  return (
    <section className="product-section container" id={id} aria-labelledby={headingId}>
      <h2 className="product-section__title" id={headingId}>
        {title}
      </h2>

      {tabs ? (
        <div className="product-section__tabs" role="tablist" aria-label="Categorias de produtos">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={index === activeTab}
              className={index === activeTab ? 'is-active' : undefined}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : (
        <a href="#" className="product-section__view-all">
          Ver todos
        </a>
      )}

      {loading && (
        <p className="product-section__message" role="status">
          Carregando produtos…
        </p>
      )}

      {error && (
        <p className="product-section__message" role="alert">
          Não foi possível carregar os produtos. {error}
        </p>
      )}

      {!loading && !error && (
        <Carousel label={title}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </li>
          ))}
        </Carousel>
      )}
    </section>
  )
}
