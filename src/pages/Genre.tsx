import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../services/TMDB';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import { IGenres } from '../types/Genres.types';


const GenrePage = () => {
  const genres = useQuery(['GenrePage'], () => getGenres());

  return (
    <>
      <h1>Genres</h1>
      {genres.isError && (
        <Alert variant="warning">Ooops, something went wrong!</Alert>
      )}
      {genres.isFetching ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        genres.data?.map((genre: IGenres) => (
          <Link
            key={genre.id}
            className="btn btn-outline-light btn-lg m-2"
            role="button"
            to={`/GenrePage/${genre.id}`} 
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
