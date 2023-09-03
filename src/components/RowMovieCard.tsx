import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  id: number;
  profile_path: string;
  name: string;
};

export const RowMovieCard: React.FC<IProps> = ({ id, profile_path, name }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col key={id}>
        <Card as={Link} key={id} to={`/ActorPage/${id}`}>
          <Card.Img
            variant="top"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : 'https://cinemaone.net/images/movie_placeholder.png'
            }
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
