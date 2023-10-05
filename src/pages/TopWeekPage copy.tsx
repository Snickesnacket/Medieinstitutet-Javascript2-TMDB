import DataHandeling from '../components/DataMovieCard';
//import { usePopular } from '../hooks/usePopularHook';

const Popular = () => {
  //const { data, isError, isLoading, isSuccess } = usePopular();
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

export default Popular;