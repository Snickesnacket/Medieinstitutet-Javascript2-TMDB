import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../services/TMDB';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, createSearchParams, useNavigate, } from 'react-router-dom';
import { IGenres } from '../types/Genres.types';


const GenrePage = () => {
   const navigate = useNavigate();
   const params = {  page: ' 1' };
  const goToGenre = () =>
    navigate({
      pathname: '/GenrePage/:id',
      search: `?${createSearchParams(params)}`,
    });
  
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
             to={{
        pathname: `/GenrePage/${genre.id}`,
        search: `=${genre.name}?page=1`,
      }}
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
