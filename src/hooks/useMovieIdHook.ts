import { useQuery } from '@tanstack/react-query';
import { getMovieId } from '../services/TMDB';

export const useMovieId = (idValue: string) => {
  return useQuery(['Movie', idValue], () => getMovieId(idValue), {
    enabled: !!idValue,
    keepPreviousData: true
  });
};
