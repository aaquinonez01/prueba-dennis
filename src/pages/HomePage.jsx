
import { Link } from "react-router-dom"
import { Hero } from "../components/Hero"
import { MainLayout } from "../layout/MainLayout"
import { Book } from "lucide-react"
import { ListNewBooks } from "../components/ListNewBooks"
import { useEffect } from "react"
import '../styles/home.css'
import { useGenres } from "../hooks/useGenres"

export const HomePage = () => {

  const {genres} = useGenres();

  const AgregarTItulo = () => {
    document.title = "Relatos de Papel - Inicio"
  }
  useEffect(() => {
    AgregarTItulo()
  }
  )

  return (
    <MainLayout>
        <Hero />
        <section className="home__catalog">
        <h2 className="home__catalog-title">Generos Destacados</h2>
        <div className="home__catalog-grid">
          {genres.length!==0 && (genres.slice(0,4)).map((genre) => (
            <div key={genre.id} className="home__catalog-item">
              <Book className="home__catalog-item-image" />
              <h3 className="home__catalog-item-title">{genre.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="book-grid ">
      <div className="book-grid__container">
        
          <h2 className="book-grid__title">
            Novedades
          </h2>
        

      <ListNewBooks title="Novedades" />
      </div>
    </section>
    </MainLayout>
  )
}
