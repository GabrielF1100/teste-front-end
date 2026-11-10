import logo from '../../assets/logo.png'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons'
import './Footer.scss'

const columns = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
]

const socials = [
  { label: 'Instagram', icon: <InstagramIcon size={24} /> },
  { label: 'Facebook', icon: <FacebookIcon size={24} /> },
  { label: 'LinkedIn', icon: <LinkedinIcon size={24} /> },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="Econverse" width={164} height={48} className="footer__logo" />
            <p className="footer__about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="footer__socials" aria-label="Redes sociais">
              {socials.map(({ label, icon }) => (
                <li key={label}>
                  <a href="#" aria-label={label}>
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__nav" aria-label="Links do rodapé">
            {columns.map(({ title, links }) => (
              <div key={title} className="footer__column">
                <h3 className="footer__heading">{title}</h3>
                <ul>
                  {links.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  )
}
