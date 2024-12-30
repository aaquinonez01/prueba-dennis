import API from './config';

export const getGenres = async () => {
    try {
        const response = await API.get('/genres');
        return response.data;
    } catch (error) {
        console.error('Error fetching genres', error);
    }
    }