import { IGenres } from './Genres.types';
import { IPerson } from './Person.types';

export interface IMovie {
  credits?: {
    cast?: IPerson[];
  };
  genres?: IGenres[];
  genres_ids?: IGenres[];
  id?: number;
  overview?: string | null;
  poster_path?: string | null;
  runtime: number;
  release_date?: string;
  title?: string;
  vote_count?: number;
  vote_average?: number;
}
