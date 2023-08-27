import { IMovie } from './Movie.types';

export interface IDataResult {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_result: number;
}
