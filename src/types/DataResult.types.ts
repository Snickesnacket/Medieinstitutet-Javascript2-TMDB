import { IGenreMovies } from './GenreMovies';
import { IMovies } from './Movies.types';

export interface IDataResult {
  page?: number | string;
  results: IMovies[];
  total_pages?: number | undefined;
}

export interface IDataResultGenre {
  page: number;
  results: IGenreMovies[];
  total_pages: number;
  total_result: number;
}
