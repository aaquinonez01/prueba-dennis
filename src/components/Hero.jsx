import { Link } from "react-router-dom"
import '../styles/hero.css'
export const Hero = () => {
  return (
    
        <section className="hero">
      {/* Imagen de fondo */}
      <img
        src="https://www.mrbooks.com/intranet/assets/admin/uploads/banners/Banner_diciembre_Banner_Superior.jpg.webp"
        alt="Books banner"

        className="hero__image"
      />
      <div className="hero__content">
        
        
        <Link
          to="/books"
          className="hero__cta"
        >
          Explorar Catálogo
        </Link>

        <div className="hero__search">

        <input type="text" placeholder="Buscar..." className="hero__search-input" />
        <button className="hero__search-button">
          Buscar
        </button>
        </div>

      </div>
    </section>
    )
  
}
