import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';
import { RowActorCard } from '../components/RowActorCard';
import { useParams } from 'react-router-dom';
import { useMovieId } from '../hooks/useMovieIdHook';
import { RowMovieCard } from '../components/MovieCard';
import { IActorResponse } from '../types/Actor.types';
import useViewed from '../hooks/useViewedHook';
import { LSContext, StoreDataType } from '../contexts/localstorageContext';
import { useContext, useEffect } from 'react';
import { IMovies } from '../types/Movies.types';

type IdParam = {
  id: string;
};

const Movie = () => {
  const { viewed }: StoreDataType = useViewed();
  const { storedValue } = useContext(LSContext);
  console.log(viewed);
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError, isLoading, isSuccess } = useMovieId(idValue);
  useEffect(() => {
    if (data && !viewed.some((movie) => movie.id === data.id)) {
      storedValue(data.title, data.id, data.poster_path);
    }
  }, [data]);
return (
  <>
    {isError && <Alert variant="warning">Oops, something went wrong!</Alert>}
    {isLoading && (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )}

    {data  && (
      <>
        <h1>{data.title}</h1>
        <ListGroup className="mb-6">
          <Container>
          <Row className="g-4">
              <MovieCard
                key={data?.id}
                poster_path={data?.poster_path ?? 'Poster is missing'}
                title={data?.title}
                overview={data?.overview}
                release_date={data?.release_date}
                vote_average={data?.vote_average}
                id={data?.id}
              />
            </Row>
          </Container>
          <h2>The Cast</h2>

          {data.credits?.cast && (
            <>
              <h2>Also featured in: </h2>
              <Row className="g-4">
              {data?.credits.cast.map((person: IActorResponse) => (
                <RowActorCard
                  id={person.id!}
                  profile_path={person.profile_path ?? 'no profile picture '}
                  name={person.name ?? 'this field is missing'}
                />
              ))}
              </Row>
              </>

          )}
          {viewed.length > 0 && (
            <Row className="g-4">
            {viewed.map((movie: IMovies) => (
                  <RowMovieCard
                    id={movie.id!}
                    poster_path={movie.poster_path ?? 'Poster is missing'}
                    title={movie.title ?? 'title is missing'}
                  />
                ))}
              </Row>
          )}
          
          <h2>Similar Movies</h2>
          {isSuccess && data.similar?.results && (
          <Row className="g-4">
          {data.similar?.results.map((movie: IMovies) => (
            <RowMovieCard
              id={movie.id!}
              poster_path={movie.poster_path ?? 'Poster is missing'}
              title={movie.title ?? 'title is missing'}
            />
          ))}
          </Row>
          )}

          <h2>Recently viewed</h2>
          {isSuccess && viewed && (
              <Row className="g-4">
              {viewed.map((movie: IMovies) => (
                <RowMovieCard
                  id={movie.id!}
                  poster_path={movie.poster_path ?? 'Poster is missing'}
                  title={movie.title ?? 'title is missing'}
                />
              ))}
            </Row>
          )}
        </ListGroup>
      </>
    )}
  </>
);
};

export default Movie;
