import axios from 'axios';
import { IDataResult } from '../types/DataResult.types';
import { IMovie } from '../types/Movie.types';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const adultCont: string = '&include_adult=false';
const creditsAndSimilar: string = '&append_to_response=credits';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

/**
 * Execute a HTTP GET request to an endpoint.
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
const get = async <T>(endpoint: string) => {
  console.log('Requesting:', endpoint);
  try {
    const response = await instance.get(endpoint);
    return response.data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getPopular = () => {
  return get<IDataResult>(
    `movie/popular?api_key=${API_KEY}${adultCont}&language=en-US&page=$`
  );
};
export const getTop = () => {
  return get<IDataResult>(
    `movie/top_rated?api_key=${API_KEY}${adultCont}&language=en-US&page=$`
  );
};

export const getNow = () => {
  return get<IDataResult>(
    `movie/now_playing?api_key=${API_KEY}${adultCont}&language=en-US&page=$`
  );
};

export const getMovieId = (id: string) => {
  return get<IMovie>(
    `movie/${id}?api_key=${API_KEY}${adultCont}${creditsAndSimilar}&language=en-US`
  );
};
/* const discoverMovies = async (
  sort?: string,
  page?: number | string,
  genre_id?: number | string,
  person_id?: number
): Promise<IMovie> => {
  const res = await axios.get(
    `discover/movie?api_key=${API_KEY}&language=en-US&${sort}${adultCont}&page=${page}&with_genres=${genre_id}&with_cast=${person_id}`
  );

  return res.data;
}; */

/**
 * @param {string} query Search query to search for
 * @param {number} page Page of search results to get
 * @returns Promise
 */
// In your services/GetMoviesAPI.js

/* export const getPopular = async (page = 1) => {
  const res = await axios.get<IMovie>(
    `movie/popular?api_key=${API_KEY}${adultCont}&language=en-US&page=${page}`
  );
  return res.data;
};
 */
