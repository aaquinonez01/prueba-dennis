import { useState, useEffect } from "react";
import { getBooks } from "../services/books";
export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const books = await getBooks();
                setBooks(books);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }
    , []);
    
    return { books, loading, error };
    }