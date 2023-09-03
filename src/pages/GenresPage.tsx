import { useQuery } from '@tanstack/react-query';
import { newGenre } from '../services/TMDB';
import { DataLink } from '../components/DataGenreLink';

const Genres = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(['GenrePage'], () =>
    newGenre()
  );

  return (
    <>
      <h1>Genres</h1>
      <DataLink
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
        data={data}
      />
    </>
  );
};

export default Genres;
