import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { IMovies } from '../types/Movies.types';
import MovieCard from './MoviesCard';

type IProps = {
  isError: boolean;
  isLoading: boolean;
  data: IMovies[] | undefined;
  isSuccess: boolean;
};

const DataHandeling: React.FC<IProps> = ({
  isError,
  isLoading,
  data,
  isSuccess
}) => {
  return (
    <>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {data && data.length === 0 && (
        <Alert variant="info">No data available</Alert>
      )}

      {data && isSuccess && (
        <ListGroup className="mb-6">
          <Container>
            <Row>
              {data?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  poster_path={movie?.poster_path}
                  title={movie?.title}
                  overview={movie?.overview}
                  release_date={movie?.release_date}
                  vote_average={movie?.vote_average}
                  id={movie?.id}
                />
              ))}
            </Row>
          </Container>
        </ListGroup>
      )}
    </>
  );
};

export default DataHandeling;
