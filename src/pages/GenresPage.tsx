import { DataLink } from '../components/DataGenreLink';
import { useNewGenre } from '../hooks/useNewGenre';

const Genres = () => {
  const { data, isLoading, isError, isSuccess } = useNewGenre();

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
