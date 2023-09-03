import axios from 'axios';
import { IDataResult } from '../types/DataResult.types';
import { IActorResponse } from '../types/Actor.types';
import { IGenresResponse } from '../types/Genres.types';
import { IMovies } from '../types/Movies.types';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const adultCont: string = '&include_adult=false';
const creditsAndSimilar: string = '&append_to_response=credits,similar';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const get = async <T>(endpoint: string) => {
  try {
    const response = await instance.get<T>(endpoint);
    return response.data;
  } catch (error) {
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
  return get<IMovies>(
    `movie/${id}?api_key=${API_KEY}${adultCont}${creditsAndSimilar}&language=en-US`
  );
};

export const getGenres = async () => {
  const data = await get<IGenresResponse>(
    `genre/movie/list?api_key=${API_KEY}${adultCont}&language=en-USpage=1`
  );
  return data.genres;
};

export const newGenre = async () => {
  const data = await get<IGenresResponse>(
    `genre/movie/list?api_key=${API_KEY}${adultCont}&language=en-USpage=1`
  );
  return data;
};

export const getGenre = async (id: string, page = 1) => {
  const data = await get<IDataResult>(
    `discover/movie?api_key=${API_KEY}&language=en-US&region=US&$${adultCont}&page=${page}&with_genres=${id}`
  );
  return data
};

export const getActor = async (id: string) => {
  return get<IActorResponse>(
    `person/${id}?api_key=${API_KEY}&language=en-US&region=US&${adultCont}&append_to_response=credits`
  );

};

