import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';
import { RowMovieCard } from '../components/RowMovieCard';
import { useParams } from 'react-router-dom';
import { useMovieId } from '../hooks/useMovieIdHook';
import { RowCard } from '../components/RowActorCard';
import { IActorResponse } from '../types/Actor.types';

import { LSContext, StoreDataType } from '../contexts/localstorageContext';
import { useContext, useEffect } from 'react';

type IdParam = {
  id: string;
};

const Movie = () => {
  const { storedValue } = useContext(LSContext);

  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError, isLoading, isSuccess } = useMovieId(idValue);
  useEffect(() => {
    storedValue(data?.title, data?.id, data?.poster_path);
  }, [data]);
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
                {data?.credits?.cast.map((person: IActorResponse) => (
                  <RowMovieCard
                    id={person.id}
                    profile_path={person.profile_path}
                    name={person.name}
                  />
                ))}
              </>
            )}

            <h2>Similar Movies</h2>
            {isSuccess && data.similar?.results && (
              <>
                {data.similar?.results.map((movie) => (
                  <RowCard
                    id={movie.id!}
                    poster_path={movie.poster_path ?? 'Poster is missing'}
                    title={movie.title ?? 'title is missing'}
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
