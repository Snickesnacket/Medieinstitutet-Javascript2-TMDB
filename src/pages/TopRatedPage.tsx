import DataHandeling from '../components/DataMovieCard';
import { useTop } from '../hooks/useTopHook';

const TopRated = () => {
  const { data, isError, isLoading, isSuccess } = useTop();
  return (
    <>
      <h1>TOP RATED MOVIES</h1>
      <DataHandeling
        isError={isError}
        isLoading={isLoading}
        data={data?.results}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default TopRated;
