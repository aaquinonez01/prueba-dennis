import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from './useBooks';
import { useGenres } from './useGenres';

export const useBookDetail = () => {
  const { id } = useParams();
  const { books } = useBooks();
  const {genres} = useGenres();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      const foundBook = books.find((book) => book.id === parseInt(id, 10));

        if (foundBook) {
            const genre =genres.find((genre) => genre.id === foundBook.genre_id);
            if(genre)
                foundBook.genre = genre.name;
            setBook(foundBook || null);
        }
    }
  }, [books, id, genres]);

  return { book };
};
