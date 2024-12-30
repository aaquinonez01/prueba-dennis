import { FilterBook } from '../components/FilterBook';
import { useGenres } from '../hooks/useGenres';
import { MainLayout } from '../layout/MainLayout';
import { useBooks } from '../hooks/useBooks';
import { useBookFilters } from '../hooks/useBooksFilter';
import { ListBooks } from '../components/ListBooks';
import { Loading } from '../components/Loading';

export const BooksPage = () => {
  const { books, loading: booksLoading, error: booksError } = useBooks();
  const { genres, loading: genresLoading, error: genresError } = useGenres();

  const {
    selectedCategory,
    setSelectedCategory,
    showFilters,
    setShowFilters,
    filteredBooks,
  } = useBookFilters(books, genres);

  if (booksLoading || genresLoading) {
    return <Loading />;
  }

  if (booksError || genresError) {
    return <div className="books-page__error">Error al cargar los datos.</div>;
  }

  return (
    <MainLayout>
      <div className="books-page container">
        <h1 className="books-page__title">Todos los Libros</h1>
        <div className="books-page__content">
          <FilterBook
            genres={genres}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          <ListBooks books={filteredBooks} />
        </div>
      </div>
    </MainLayout>
  );
};
