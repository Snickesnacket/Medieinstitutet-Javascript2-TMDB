import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  id: number;
  profile_path: string;
  name: string;
};


export const RowActorCard: React.FC<IProps> = ({ id, profile_path, name }) => {
  console.log(id)
  return (
     <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
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
  );
};

