import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Bloque: Acerca de nosotros */}
          <div className="footer__section">
            <h3 className="footer__title ">Acerca de nosotros</h3>
            <ul className="footer__list">
              <li>
                <Link href="/about" className="footer__link">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/terms" className="footer__link">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="/privacy" className="footer__link">Política de privacidad</Link>
              </li>
            </ul>
          </div>
          {/* Bloque: Ayuda */}
          <div className="footer__section">
            <h3 className="footer__title">Ayuda</h3>
            <ul className="footer__list">
              <li>
                <Link href="/support" className="footer__link">Soporte</Link>
              </li>
              <li>
                <Link href="/faq" className="footer__link">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link href="/contact" className="footer__link">Contáctanos</Link>
              </li>
            </ul>
          </div>
          {/* Bloque: Redes sociales */}
          <div className="footer__section">
            <h3 className="footer__title">Redes sociales</h3>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social-link">
                <Facebook className="footer__icon" />
              </a>
              <a href="#" aria-label="Twitter" className="footer__social-link">
                <Twitter className="footer__icon" />
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <Instagram className="footer__icon" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
