import DataHandeling from '../components/DataMovieCard';
import { usePopular } from '../hooks/usePopularHook';

const Popular = () => {
  const { data, isError, isLoading, isSuccess } = usePopular();
  return (
    <>
      <DataHandeling
        isError={isError}
        isLoading={isLoading}
        data={data?.results}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default Popular;
