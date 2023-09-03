import { useQuery } from '@tanstack/react-query';
import { getMovieId } from '../services/TMDB';
import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';
import { RowMovieCard } from '../components/RowMovieCard';
import { useParams } from 'react-router-dom';

type IdParam = {
  id: string;
};

const Movie = () => {
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError, isLoading, isSuccess } = useQuery(
    ['movie', idValue],
    () => getMovieId(idValue),
    {
      enabled: !!idValue
    }
  );

  return (
    <>
      {isError && <Alert variant="warning">Oops, something went wrong!</Alert>}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {data && isSuccess && (
        <>
          <h1>{data.title}</h1>
          <ListGroup className="mb-6">
            <Container>
              <Row>
                <MovieCard
                  key={data?.id}
                  poster_path={data?.poster_path}
                  title={data?.title}
                  overview={data?.overview}
                  release_date={data?.release_date}
                  vote_average={data?.vote_average}
                  id={data?.id}
                />
              </Row>
            </Container>
            <h2>The Cast</h2>

            {isSuccess && data.credits?.cast && (
              <>
                <h2>Also featured in: </h2>
                {data?.credits?.cast.map((person) => (
                  <RowMovieCard
                    id={person.id}
                    profile_path={person.profile_path}
                    name={person.name}
                  />
                ))}
              </>
            )}
          </ListGroup>
        </>
      )}
    </>
  );
};

export default Movie;



