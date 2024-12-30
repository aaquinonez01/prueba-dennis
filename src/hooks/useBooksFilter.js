import { useState, useMemo } from 'react';

export const useBookFilters = (books) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = useMemo(() => {
    return books.filter(book =>
      (selectedCategory === 'All' || book.genre_id === selectedCategory) &&
      book.price <= priceRange
    );
  }, [books, selectedCategory, priceRange]);

  return {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    showFilters,
    setShowFilters,
    filteredBooks,
  };
};
