import axios from 'axios';

const API_KEY = 'ae753c68df4cb9e07bb6d20d2ed4d4c2';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchMovies = (type, page = 1) => {
  return axios.get(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
};

export const fetchMovieCast = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
};

export const searchMovies = (query, page = 1) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
