import { useQuery } from '@tanstack/react-query';
import { getGenre } from '../services/TMDB';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IGenres } from '../types/Genres.types';

const GenrePage = () => {
  const { data, isError, isFetching } = useQuery(['GenrePage'], () =>
    getGenre()
  );

  return (
    <>
      <h1>Genres</h1>

      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}

      {isFetching ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        data?.map((genre: IGenres) => (
          <Link
            key={genre.id}
            className="btn btn-outline-light btn-lg m-2"
            role="button"
            to={`/genres/${genre.id}/${genre.name}`}
            style={{ backgroundColor: 'darkgrey' }}
          >
            {genre.name}
          </Link>
        ))
      )}
    </>
  );
};

export default GenrePage;
