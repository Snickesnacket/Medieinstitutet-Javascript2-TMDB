import DataHandeling from '../components/DataMovieCard';
import { useTodaysPopularMovies } from '../hooks/usePopularDayHook'

const PopularDay = () => {
  const { data, isError, isLoading, isSuccess } = useTodaysPopularMovies();
  return (
    <>
      <h1>POPULAR MOVIES</h1>
      <DataHandeling
        isError={isError}
        isLoading={isLoading}
        data={data?.results}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default PopularDay;
