import { useQuery } from '@tanstack/react-query';
import { newGenre } from '../services/TMDB';

export const useNewGenre = () => {
  return useQuery(['GenrePage'], () => newGenre());
};
