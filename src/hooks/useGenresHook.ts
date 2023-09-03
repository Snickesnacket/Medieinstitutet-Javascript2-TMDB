import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../services/TMDB';

const useGenres = () => {
  const { data: genres = [] } = useQuery(['GenrePage/:id'], () => getGenres());
  return genres;
};
export default useGenres;
