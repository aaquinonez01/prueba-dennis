import API from './config';

export const getBooks = async () => {
    try {
        const response = await API.get('/books');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}