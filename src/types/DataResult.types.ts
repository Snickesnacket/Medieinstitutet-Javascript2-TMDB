import { IMovies } from './Movies.types';

export interface IDataResult {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_result: number;
}
