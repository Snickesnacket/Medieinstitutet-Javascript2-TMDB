import DataHandeling from '../components/DataMovieCard';
import { useWeeksPopularMovies } from '../hooks/usePopularWeekHook'

const PopularWeek = () => {
  const { data, isError, isLoading, isSuccess } = useWeeksPopularMovies();
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

export default PopularWeek;