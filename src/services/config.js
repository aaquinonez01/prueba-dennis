import axios from 'axios';

const config = {
    'URL_BASE': 'https://676ddfdbdf5d7dac1cc93d1f.mockapi.io/api/v1',
};

const instance = axios.create({
    baseURL: config.URL_BASE,
});

export default instance;
