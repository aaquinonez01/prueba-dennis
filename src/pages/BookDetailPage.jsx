import { useBookDetail } from '../hooks/useBookDetail';
import { ShoppingCart } from 'lucide-react';
import { MainLayout } from '../layout/MainLayout';
import {useCartStore} from '../store/cartStore'

export const BookDetailPage = () => {
  const addItem = useCartStore(state => state.addToCart )
  const cartItems = useCartStore(state => state.cartItems)
  const { book } = useBookDetail();

  if (!book) {
    return <div className="text-center py-8 text-lg text-gray-600">Libro no encontrado.</div>;
  }

  return (
    <MainLayout>
      <div className="book-detail">
        <div className="book-detail__grid">
          {/* Imagen del libro */}
          <div className="book-detail__image-container">
            <img
              src={book.photo_url || '/placeholder.svg'}
              alt={`Portada de ${book.title}`}
              className="book-detail__image"
            />
          </div>

          {/* Información del libro */}
          <div className="book-detail__content">
            <h1 className="book-detail__title">{book.title}</h1>
            <p className="book-detail__author">por {book.author}</p>
            
            {/* Precio */}
            <p className="book-detail__price">
              ${book.price.toFixed(2)}
            </p>

            {/* Botón de añadir al carrito */}
            <button
              onClick={() => addItem(book)}
              disabled={cartItems.some(item => item.id === book.id)}
              className="book-detail__add-to-cart"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> {cartItems.some(item => item.id === book.id) ? 'Añadido' : 'Añadir al carrito'}
            </button>

            {/* Descripción */}
            <p className="book-detail__description">
              {book.description}
            </p>

            {/* Información adicional */}
            <div className="book-detail__meta">
              <div>
                <h2 className="book-detail__meta-title">Género</h2>
                <p className="book-detail__meta-content">{book.genre}</p>
              </div>
              <div>
                <h2 className="book-detail__meta-title">Fecha de publicación</h2>
                <p className="book-detail__meta-content">
                  {new Date(book.published_date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h2 className="book-detail__meta-title">Stock</h2>
                <p className="book-detail__meta-content">{book.stock} disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
