import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


interface IActorCardProp {
 biography: string, 
  birthday: string, 
  id: number, 
  known_for_department: string,
  name: string, 
  profile_path: string, 
}

export const ActorCard: React.FC<IActorCardProp> = ({
  biography,
  birthday,
  id,
  known_for_department,
  name,
  profile_path,
}) => {
  return (
    <Card className="m-2">
        <Card.Link as={Link} to={`/actor/${id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{biography}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Birthday: {birthday}</ListGroup.Item>
        <ListGroup.Item>known for: {known_for_department}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
  );
};
