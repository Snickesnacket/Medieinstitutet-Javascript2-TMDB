import { useQuery } from '@tanstack/react-query';
import { getNow } from '../services/TMDB';

export const usePlayingNow = () => {
  return useQuery(['InTheatersNowPage'], () => getNow());
};
