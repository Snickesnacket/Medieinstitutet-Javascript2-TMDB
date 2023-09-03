import { Alert, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import { ActorCard } from '../components/ActorCard';
import { useParams } from 'react-router-dom';
import { useActor } from '../hooks/useActorHook';
import { RowCard } from '../components/RowActorCard';
type IdParam = {
  id: string;
};

export const Actor = () => {
  const { id } = useParams<IdParam>();
  const idValue = id ?? '';

  const { data, isError, isLoading, isSuccess } = useActor(idValue);

  return (
    <>
      {isError && <Alert variant="warning">Oops, something went wrong!</Alert>}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {isSuccess && data && (
        <>
          <h1>{data.name}</h1>
          <ListGroup className="mb-6">
            <Container>
              <Row>
                <ActorCard
                  biography={data.biography}
                  birthday={data.birtday}
                  id={data.id}
                  known_for_department={data.known_for_department}
                  name={data.name}
                  profile_path={data.profile_path}
                />
              </Row>
            </Container>
            {isSuccess && data.credits.cast && (
              <>
                <h2>Also featured in: </h2>
                {data.credits.cast.map((credit) => (
                  <RowCard
                    id={credit.id}
                    poster_path={credit.poster_path}
                    title={credit.title}
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
