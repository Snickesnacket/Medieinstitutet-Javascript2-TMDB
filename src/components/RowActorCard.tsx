import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  id?: number;
  poster_path?: string;
  title?: string;
  character?: string;
};

export const RowCard: React.FC<IProps> = ({
  id,
  poster_path,
  title,
  character
}) => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col key={id}>
        <Card as={Link} key={id} to={`/Movie/${id}`}>
          <Card.Img
            variant="top"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                : 'https://cinemaone.net/images/movie_placeholder.png'
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <ListGroup className="list-group-flush">
              Character: {character}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
