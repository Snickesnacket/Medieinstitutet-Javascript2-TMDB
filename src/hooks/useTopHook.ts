import { useQuery } from '@tanstack/react-query';
import { getTop } from '../services/TMDB';

export const useTop = () => {
  return useQuery(['TopRatedPage'], () => getTop());
};
