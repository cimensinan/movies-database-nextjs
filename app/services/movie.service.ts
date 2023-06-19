import axios from "axios"

const API_KEY = "60569e94bffba7dda6159dab91ddbd50"
const API_BASE_URL = "https://api.themoviedb.org/3"

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {
        api_key: API_KEY
    }
})

export const searchMovies = async (query: string) => {
    try {
        const response = await client.get(`/search/movie`, {
            params: {query}
        });
        if(response.data && response.data.results) {
            return response.data.results;
        }
        else {
            console.error("Couldn't get the data")
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}