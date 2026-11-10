import type { Product } from '../../types/product'
import { formatCurrency } from '../../utils/format'
import './ProductCard.scss'

interface Props {
  product: Product
  onSelect: (product: Product) => void
}

export default function ProductCard({ product, onSelect }: Props) {
  const { productName, descriptionShort, photo, price } = product

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__link"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${productName}`}
      >
        <img
          className="product-card__image"
          src={photo}
          alt={productName}
          width={247}
          height={228}
          loading="lazy"
        />
        <h3 className="product-card__name">{descriptionShort}</h3>
      </button>

      <p className="product-card__price">{formatCurrency(price)}</p>
      <p className="product-card__installments">ou 2x de {formatCurrency(price / 2)} sem juros</p>
      <p className="product-card__shipping">Frete grátis</p>

      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
