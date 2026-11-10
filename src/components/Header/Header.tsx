import logo from '../../assets/logo.png'
import {
  BoxIcon,
  CardIcon,
  CartIcon,
  CrownIcon,
  HeartIcon,
  SearchIcon,
  ShieldIcon,
  TruckIcon,
  UserIcon,
} from '../Icons'
import './Header.scss'

const benefits = [
  { icon: <ShieldIcon size={20} />, lead: 'Compra ', strong: '100% segura', tail: '' },
  { icon: <TruckIcon size={20} />, lead: '', strong: 'Frete grátis', tail: ' acima de R$ 200' },
  { icon: <CardIcon size={20} />, lead: '', strong: 'Parcele', tail: ' suas compras' },
]

const categories = [
  { label: 'Todas categorias' },
  { label: 'Supermercado' },
  { label: 'Livros' },
  { label: 'Moda' },
  { label: 'Lançamentos' },
  { label: 'Ofertas do dia', highlight: true },
  { label: 'Assinatura', icon: <CrownIcon size={20} /> },
]

interface Props {
  cartCount?: number
}

export default function Header({ cartCount = 0 }: Props) {
  const actions = [
    { label: 'Meus pedidos', icon: <BoxIcon size={30} /> },
    { label: 'Favoritos', icon: <HeartIcon size={30} /> },
    { label: 'Minha conta', icon: <UserIcon size={30} /> },
    {
      label: cartCount > 0 ? `Carrinho (${cartCount} itens)` : 'Carrinho',
      icon: <CartIcon size={30} />,
      badge: cartCount,
    },
  ]

  return (
    <header className="header">
      <div className="container">
        <ul className="header__benefits">
          {benefits.map(({ icon, lead, strong, tail }) => (
            <li key={strong} className="header__benefit">
              {icon}
              <span>
                {lead}
                <strong>{strong}</strong>
                {tail}
              </span>
            </li>
          ))}
        </ul>

        <div className="header__main">
          <a href="/" className="header__logo" aria-label="Econverse - página inicial">
            <img src={logo} alt="Econverse" width={139} height={42} />
          </a>

          <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="sr-only">
              Buscar produtos
            </label>
            <input id="search" type="search" placeholder="O que você está buscando?" />
            <button type="submit" aria-label="Buscar">
              <SearchIcon size={26} />
            </button>
          </form>

          <ul className="header__actions">
            {actions.map(({ label, icon, badge }) => (
              <li key={label}>
                <button type="button" aria-label={label} className="header__action-btn">
                  {icon}
                  {badge !== undefined && badge > 0 && (
                    <span className="header__cart-badge" aria-live="polite">
                      {badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <nav className="header__nav" aria-label="Categorias">
          <ul>
            {categories.map(({ label, highlight, icon }) => (
              <li key={label}>
                <a href="#" className={highlight ? 'is-highlight' : undefined}>
                  {icon}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
