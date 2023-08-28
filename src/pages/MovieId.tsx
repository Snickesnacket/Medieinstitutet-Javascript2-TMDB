import { useQuery } from '@tanstack/react-query';
import { getMovieId } from '../services/GetMoviesAPI';
import { Alert, Container, ListGroup, Row } from 'react-bootstrap';
import MovieCard from '../components/MoviesCard';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

type IdParam = {
  id: string;
};

const TheMovie = () => {
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError } = useQuery(
    ['movie', idValue],
    () => getMovieId(idValue),
    {
      enabled: !!idValue
    }
  );

  return (
    <>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {data && (
        <ListGroup className="mb-6">
          <Container>
            <Row>
              <MovieCard
                key={data.id}
                poster_path={data.poster_path!}
                title={data.title!}
                overview={data.overview!}
                release_date={data.release_date!}
                vote_average={data.vote_average!}
                id={data.id!}
              />
            </Row>
          </Container>
          <h2>The Cast</h2>
          <ListGroup className="mb-6">
            {data.credits?.cast?.map((person) => (
              <ListGroup.Item
                action
                as={Link}
                key={person.id}
                variant="success"
                to={`/actor/${person.id}`}
              >
                <h2 className="h3">{person.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                />
                <p className="text-muted small mb-0">
                  character: {person.character}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup>
      )}
    </>
  );
};

export default TheMovie;
