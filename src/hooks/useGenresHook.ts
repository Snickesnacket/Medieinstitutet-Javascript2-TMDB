import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../services/TMDB';

const useGenres = (idValue: string) => {
  const { data: genres = [] } = useQuery(['GenrePage', idValue], () =>
    getGenres()
  );
  return genres;
};
export default useGenres;
