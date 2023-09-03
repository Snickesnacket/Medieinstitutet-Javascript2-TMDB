import { useQuery } from '@tanstack/react-query';
import { getGenre } from '../services/TMDB';

const useGenre = (idValue: string, page: number) => {
  return useQuery(['Movie/'], () => getGenre(idValue, page), {
    enabled: !!idValue,
    keepPreviousData: true
  });
};

export default useGenre;
