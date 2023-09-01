/* import { useQuery } from '@tanstack/react-query';
import { getMovieId } from '../services/TMDB';
import { Alert, Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import {MovieCard} from '../components/MovieCard'
import { Link, useParams } from 'react-router-dom';

type IdParam = {
  id: string;
};

const TheMovie = () => {
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError, isFetching, isSuccess } = useQuery(
    ['movie', idValue],
    () => getMovieId(idValue!),
    {
      enabled: !!idValue
    }
  );

  return (
    <>
      {isError && ( <Alert variant="warning">Ooops, something went wrong!</Alert>)}
       {isFetching && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {isSuccess && data && (
        <>
        <h1>{data.title}</h1>
        <ListGroup className="mb-6">
          <Container>
            <Row>
              <MovieCard
                key={data.id}
                poster_path={data.poster_path}
                title={data.title}
                overview={data.overview}
                release_date={data.release_date}
                vote_average={data.vote_average}
                id={data.id}
              />
            </Row>
          </Container>
          <h2>The Cast</h2>
          <Row xs={1} md={2} className="g-4">
            {data.credits?.cast?.map((person) => (
              <Col key={person.id}>
                <Card as={Link} key={person.id} to={`/ActorPage/${person.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          ;
        </ListGroup>
        </>
      )}
    </>
  );
};

export default TheMovie;



 */