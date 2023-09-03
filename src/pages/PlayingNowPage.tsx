import { useQuery } from '@tanstack/react-query';
import { getNow } from '../services/TMDB';
import DataHandeling from '../components/DataMovieCard';
import { usePlayingNow } from '../hooks/usePlayingNowHook';

const PlayingNow = () => {
  const { data, isError, isLoading, isSuccess } = usePlayingNow();
  return (
    <>
      <h1>IN THEATRES NOW</h1>
      <DataHandeling
        isError={isError}
        isLoading={isLoading}
        data={data?.results}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default PlayingNow;
