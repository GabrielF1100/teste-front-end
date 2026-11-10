import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { formatCurrency } from '../../utils/format'
import { CloseIcon, MinusIcon, PlusIcon } from '../Icons'
import './ProductModal.scss'

const MIN_QUANTITY = 1
const MAX_QUANTITY = 99

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null
  // key: reinicia a quantidade sempre que outro produto é aberto
  return <ModalContent key={product.id} product={product} onClose={onClose} />
}

function ModalContent({ product, onClose }: { product: Product; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(MIN_QUANTITY)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()

    // Impede a rolagem da página enquanto o modal está aberto
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const close = () => dialogRef.current?.close()

  // Clique no backdrop (fora da caixa branca) fecha o modal
  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) close()
  }

  function changeQuantity(delta: number) {
    setAdded(false)
    setQuantity((current) => Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, current + delta)))
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className="product-modal__box">
        <button type="button" className="product-modal__close" onClick={close} aria-label="Fechar">
          <CloseIcon size={22} />
        </button>

        <div className="product-modal__media">
          <img src={product.photo} alt={product.productName} width={247} height={228} />
        </div>

        <div className="product-modal__info">
          <h2 className="product-modal__title" id="product-modal-title">
            {product.productName}
          </h2>
          <p className="product-modal__price">{formatCurrency(product.price)}</p>

          <p className="product-modal__description" id="product-modal-description">
            {product.descriptionShort}
          </p>
          <a href="#" className="product-modal__details" onClick={(e) => e.preventDefault()}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity" role="group" aria-label="Quantidade">
              <button
                type="button"
                onClick={() => changeQuantity(-1)}
                disabled={quantity <= MIN_QUANTITY}
                aria-label="Diminuir quantidade"
              >
                <MinusIcon size={20} />
              </button>
              <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
              <button
                type="button"
                onClick={() => changeQuantity(1)}
                disabled={quantity >= MAX_QUANTITY}
                aria-label="Aumentar quantidade"
              >
                <PlusIcon size={20} />
              </button>
            </div>

            <button type="button" className="product-modal__buy" onClick={() => setAdded(true)}>
              Comprar
            </button>
          </div>

          <p className="product-modal__feedback" role="status">
            {added && `${quantity} un. adicionada${quantity > 1 ? 's' : ''} ao carrinho`}
          </p>
        </div>
      </div>
    </dialog>
  )
}
