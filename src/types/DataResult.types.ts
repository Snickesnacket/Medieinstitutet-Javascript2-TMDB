import { IGenreMovies } from './GenreMovies';
import { IMovies } from './Movies.types';

export interface IDataResult {
  page: number;
  results: IMovies[];
  total_pages: number;
}

export interface IDataResultGenre {
  page: number;
  results: IGenreMovies[];
  total_pages: number;
  total_result: number;
}
