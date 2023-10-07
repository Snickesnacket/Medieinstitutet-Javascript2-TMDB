import { Alert,  ListGroup,  Row, Spinner } from 'react-bootstrap';
import { ActorCard } from '../components/ActorCard';
import { useParams } from 'react-router-dom';
import { useActor } from '../hooks/useActorHook';
import { RowMovieCard } from '../components/MovieCard';

type IdParam = {
  id: string;
};

export const Actor = () => {
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  console.log('value ocf id',idValue)

  const { data, isError, isLoading, isSuccess } = useActor(idValue);

  return (
    <>
      {isError && <Alert variant="warning">Oops, something went wrong!</Alert>}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {data && (
        <>
          <h1>{data.name}</h1>
          <ListGroup className="mb-6">
            <Row className="g-4">
                <ActorCard
                  key={data?.id}
                  biography={data?.biography}
                  birthday={data?.birtday}
                  id={data?.id}
                  known_for_department={data.known_for_department}
                  name={data?.name}
                  profile_path={data.profile_path ?? 'no profile picture '}
                />
              </Row>
            {isSuccess && data.credits?.cast && (
              <Row className="g-4">
                <h2>Also featured in: </h2>
                {data.credits.cast.map((credit) => (
                  <RowMovieCard
                    key={credit.id}
                    id={credit.id!}
                    poster_path={credit.poster_path ?? 'no profile picture'}
                    title={credit?.title}
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
