import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';


interface IProps {
 biography?: string, 
  birthday?: string, 
  id?: number, 
  known_for_department?: string,
  name?: string, 
  profile_path?: string;
}

export const ActorCard: React.FC<IProps> = ({
  biography,
  birthday,
  id,
  known_for_department,
  name,
  profile_path,
}) => {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
        <Card as={Link} key={id} to={`/actor/${id}`}>
        <Card.Img
          variant="top"
          src={ profile_path && /\.(jpe?g|png|gif)$/i.test(profile_path)
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : 'https://cinemaone.net/images/movie_placeholder.png'
  }
        />
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
    </Col>
  );
};
