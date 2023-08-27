import { useQuery } from '@tanstack/react-query';
import { getTop } from '../services/GetMoviesAPI';
import { Alert, Container, ListGroup, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';

const TopRated = () => {
  const { data, isError } = useQuery(['TopRatedPage'], () => getTop());
  return (
    <>
      <h1>TOP RATED MOVIES</h1>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {data && (
        <ListGroup className="mb-6">
          <Container>
            <Row>
              {data?.results.map((movie) => (
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

export default TopRated;
