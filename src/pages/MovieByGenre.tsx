import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getGenre } from '../services/TMDB';
import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';

const MovieByGenre = () => {
  const { id } = useParams() ?? '';
  const idValue = id ?? '';
  console.log('the id', idValue);
  const data = useQuery(['GenrePage/:id', idValue], () => getGenre(idValue), {
    enabled: !!idValue
  });

  console.log('the data', data.data);
  console.log('id', idValue);
  return (
    <>
      {data.isError && (
        <Alert variant="warning">Ooops, something went wrong!</Alert>
      )}
      {data.isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {data && (
          <ListGroup className="mb-6">
            <Container>
              <Row>
        {data.data?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  poster_path={movie.poster_path!}
                  title={movie.title!}
                  overview={movie.overview!}
                  release_date={movie.release_date!}
                  vote_average={movie.vote_average!}
                  id={movie.id!}
                />
        ))}
             </Row>
            </Container>
          </ListGroup>
      )}
    </>
  );
};

export default MovieByGenre;

