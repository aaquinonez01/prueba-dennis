
import { Link } from 'react-router-dom'

export const ListBooks = ({books}) => {
  return (
    <div className="book-list">
      <div className="book-list__grid">
        {books.map((book) => (
          <div key={book.id} className="book-list__item">
            <img
              src={book.photo_url || "/placeholder.svg"}
              alt={book.title}
              width={200}
              height={300}
              className="book-list__image"
            />
            <div className="book-list__content">
              <h3 className="book-list__title">{book.title}</h3>
              <p className="book-list__author">{book.author}</p>
              <p className="book-list__category">{book.category}</p>
              <div className="book-list__footer">
                <span className="book-list__price">${book.price}</span>
                <Link
                  to={`/books/${book.id}`}
                  className="book-list__details-link"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
