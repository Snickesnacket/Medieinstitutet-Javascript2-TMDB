import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  id: number;
  poster_path: string
  title: string;
};

export const RowMovieCard: React.FC<IProps> = ({ id, poster_path, title }) => {
  console.log('poster_path:', poster_path);
  return (
    
      <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
      <Card as={Link} key={id} to={`/Movie/${id}`}>
          <Card.Img
            variant="top"
            src={
              poster_path && /\.(jpe?g|png|gif)$/i.test(poster_path)
              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
              : 'https://cinemaone.net/images/movie_placeholder.png'
          }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
    </Col>
  );
};
