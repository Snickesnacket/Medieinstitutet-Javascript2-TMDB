import { IGenres } from './Genres.types';
import { IPerson } from './Person.types';

export interface IMovies {
  adult?: boolean;
  budget?: number;
  credits?: {
    cast?: IPerson[];
  };
  genres?: IGenres[];
  genres_ids?: IGenres[];
  id?: number;
  overview?: string | null;
  poster_path?: string | null;
  revenue?: number;
  release_date?: string;
  similar?: {
    results?: IMovies[];
  };
  title?: string;
  vote_count?: number;
  vote_average?: number;
}
