import { useState, useEffect } from "react";
import { getGenres } from "../services/genres";

export const useGenres = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                setLoading(true);
                const genres = await getGenres();
                setGenres(genres);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchGenres();
    }
    , []);
    
    return { genres, loading, error };
    }