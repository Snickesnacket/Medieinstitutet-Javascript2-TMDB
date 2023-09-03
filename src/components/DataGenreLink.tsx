import React from 'react';
import { IGenres, IGenresResponse } from '../types/Genres.types';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type IProps = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data: IGenresResponse | undefined;
};

export const DataLink: React.FC<IProps> = ({
  isError,
  isLoading,
  isSuccess,
  data
}) => {
  return (
    <>
      {isError && <Alert variant="warning">Ooops, something went wrong!</Alert>}
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {data &&
        isSuccess &&
        data.genres.map((genre: IGenres) => (
          <Link
            key={genre.id}
            className="btn btn-outline-light btn-lg m-2"
            role="button"
            to={{
              pathname: `/GenrePage/${genre.id}`,
              search: `page=1`
            }}
            style={{ backgroundColor: 'darkgrey' }}
          >
            {genre.name}
          </Link>
        ))}
    </>
  );
};
