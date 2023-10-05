import { useParams, useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pageing';
import useGenre from '../hooks/useGenreHook';
import useGenres from '../hooks/useGenresHook';
import { IGenres } from '../types/Genres.types';
import DataHandeling from '../components/DataMovieCard';

type IdParam = {
  id: string;
};

const Genre = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const page = searchParams.get('page' || '1');
  const { id } = useParams<IdParam>() ?? '';
  const idValue = id ?? '';
  const pageNumber = Number(page);

  const genres = useGenres();
  const { data, isError, isLoading, isSuccess } = useGenre(idValue, pageNumber);

  const selectedGenre = genres.find(
    (genre: IGenres) => genre.id === Number(idValue)
  );

  return (
    <>
      {selectedGenre && <h1>{selectedGenre.name}</h1>}
      <DataHandeling
        isError={isError}
        isLoading={isLoading}
        data={data?.results}
        isSuccess={isSuccess}
      />
      {data && (
        <Pagination
          totalPages={data.total_pages}
          hasPreviousPage={pageNumber > 1}
          hasNextPage={pageNumber < data.total_pages}
          onPreviousPage={() => {
            setSearchParams({ page: String(pageNumber - 1) });
          }}
          onNextPage={() => {
            setSearchParams({ page: String(pageNumber + 1) });
          }}
        />
      )}
    </>
  );
};

export default Genre;
