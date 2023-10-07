import { useQuery } from '@tanstack/react-query';
import { getPopularWeek } from '../services/TMDB';

export const useWeeksPopularMovies = () => {
  return useQuery(['TopWeekPage'], () => getPopularWeek());
};