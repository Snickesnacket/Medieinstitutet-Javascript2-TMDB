import { useQuery } from '@tanstack/react-query';
import { getNow } from '../services/GetMoviesAPI';
import { Alert, Container, ListGroup, Row } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';
import { Link } from 'react-router-dom';

const InTheatre = () => {
  const { data, isError } = useQuery(['InTheatersNowPage'], () => getNow());
  return (
    <>
      <h1>IN THEATRES NOW</h1>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {data && (
        <ListGroup className="mb-6">
          <Container>
            <Row>
              {data?.results.map((movie) => (
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <MovieCard
                    key={movie.id}
                    poster_path={movie.poster_path!}
                    title={movie.title!}
                    overview={movie.overview!}
                    release_date={movie.release_date!}
                    vote_average={movie.vote_average!}
                    id={movie.id!}
                  />
                </Link>
              ))}
            </Row>
          </Container>
        </ListGroup>
      )}
    </>
  );
};

export default InTheatre;
