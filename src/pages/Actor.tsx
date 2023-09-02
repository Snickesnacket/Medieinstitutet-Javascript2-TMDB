import { Alert, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { ActorCard } from "../components/ActorCard";
import { getActor } from "../services/TMDB";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type IdParam = {
  id: string;
};

export const ActorID = () => {
    const { id } = useParams<IdParam>();
    const idValue = id ?? '';

    const { data, isError, isFetching, isSuccess } = useQuery(
        ['ActorPage/: id', idValue],
        () => getActor(idValue),
        {
            enabled: !!idValue,
        }
    );

    return (
        <>
            {isError && <Alert variant="warning">Oops, something went wrong!</Alert>}
            {isFetching && (
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
                    <h2>Also featured in: </h2>
                    <Row xs={1} md={2} className="g-4">
                    {data.credits?.cast?.map((credit) => (
                    <Col key={credit.id}>
                    <Card as={Link} key={credit.id} to={`/Movie/${credit.id}`}>
                    <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200/${credit.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{credit.title}</Card.Title>
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
}
