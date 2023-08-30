import { IGenres } from './Genres.types';

export interface IGenreMovies {
  genre_ids: IGenres[];
  id: number;
  title: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}


