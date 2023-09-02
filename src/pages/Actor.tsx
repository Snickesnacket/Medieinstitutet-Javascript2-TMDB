import { Alert, Container, Row, Spinner } from "react-bootstrap";
import { ActorCard } from "../components/ActorCard";
import { getActor } from "../services/TMDB";
import { useParams } from "react-router-dom";
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
                </>
            )}
        </>
    );
}
