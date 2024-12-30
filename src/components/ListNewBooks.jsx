import { Link } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import '../styles/books.css';
import { Loading } from "./Loading";
export const ListNewBooks = () => {

    const { books, loading, error } = useBooks();


    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <p>Ocurrió un error: {error.message}</p>;
    }
  return (
        <div className="book-grid__grid">
          {books.slice(0,4).map((book) => (
            <div key={book.id} className="book-list__item">
              <img
                src={book.photo_url || "/placeholder.svg"}
                alt={book.title}
                width={200}
                height={300}
                className="book-list__image"
              />
              <div className="book-list__content">
                <h3 className="book-list__title">
                  {book.title}
                </h3>
                <p className="book-list__author">
                  {book.author}
                </p>
                <div className="book-list__footer">
                  <span className="book-list__price">
                    ${book.price}
                  </span>
                  <Link to={`/books/${book.id}`} className="book-list__details-link">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    
  )
}
