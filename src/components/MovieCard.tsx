import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

interface IMovieCardProp {
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  id: number;
}

const MovieCard: React.FC<IMovieCardProp> = ({
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  id
}) => {
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Date: {release_date}</ListGroup.Item>
        <ListGroup.Item>Rating: {vote_average}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link as={Link} to={`/films/${id}`}>
          Learn More
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
