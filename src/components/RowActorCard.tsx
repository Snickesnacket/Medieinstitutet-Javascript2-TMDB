import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  id: number;
  poster_path: string;
  title: string;
};

export const RowCard: React.FC<IProps> = ({ id, poster_path, title }) => {
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};