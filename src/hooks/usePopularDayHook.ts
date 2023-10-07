import { useQuery } from '@tanstack/react-query';
import { getTodaysPopular } from '../services/TMDB';

export const useTodaysPopularMovies = () => {
  return useQuery(['TopDayPage'], () => getTodaysPopular());
};