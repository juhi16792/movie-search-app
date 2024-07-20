import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log('Using API Key:', API_KEY);  // Debugging log
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const searchMovies = (query) => 
  tmdb.get('/search/movie', { params: { query } });


