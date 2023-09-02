import { useQuery } from '@tanstack/react-query';
import { getTop } from '../services/TMDB';
import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';


const TopRated = () => {
  const { data, isError, isFetching } = useQuery(['TopRatedPage'], () => getTop());
  return (
    <>
      <h1>TOP RATED MOVIES</h1>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}

        {isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

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
