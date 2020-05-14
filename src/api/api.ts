import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=';

const serviceInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

export async function getMovies(query: string): Promise<any> {
    try {
        const response = await serviceInstance.get(`${BASE_URL}${query}`);
        return response.data.results;
    } catch (error) {
        const err = (error.response && error.response.data) || error;
        delete err.config;
        throw err;
    }
}
