import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../services/TMDB';

export const usePopular = () => {
  return useQuery(['TopDayPage'], () => getPopular());
};
