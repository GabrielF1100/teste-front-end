import { useRef } from 'react'
import type { ReactNode } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons'
import './Carousel.scss'

interface Props {
  label: string
  children: ReactNode
}

// Carrossel horizontal com scroll-snap nativo e botões de navegação
export default function Carousel({ label, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null)

  function scroll(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const item = track.firstElementChild as HTMLElement | null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = item ? item.offsetWidth + gap : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="carousel" role="group" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => scroll(-1)}
        aria-label="Produtos anteriores"
      >
        <ChevronLeftIcon size={16} />
      </button>

      <ul className="carousel__track" ref={trackRef}>
        {children}
      </ul>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={() => scroll(1)}
        aria-label="Próximos produtos"
      >
        <ChevronRightIcon size={16} />
      </button>
    </div>
  )
}
