import axios from 'axios';
import { IDataResult, IDataResultGenre } from '../types/DataResult.types';
import { IMovie } from '../types/Movie.types';
import { IGenresResponse } from '../types/Genres.types';


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

export const getGenres = async () => {
  const data = await get<IGenresResponse>(
    `genre/movie/list?api_key=${API_KEY}${adultCont}&language=en-USpage=1`
  );
  return data.genres;
};

export const getGenre = async (id: string) => {
  const data = await get<IDataResult>(
    `discover/movie?api_key=${API_KEY}&language=en-US&region=US&$${adultCont}&page=1&with_genres=${id}`
  );
  return data.results;
};
/*  const discoverMovies = async (
  page?: number | string,
  genre_id?: number | string,
): Promise<IDataResult> => {
  const res = await axios.get(
    `discover/movie?api_key=${API_KEY}&language=en-US&region=US&${sort}${adultCont}&page=${page}&with_genres=${genre_id}`
  );

  return res.data;
};  */