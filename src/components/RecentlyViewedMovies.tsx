import React from 'react';
import { useContext } from 'react';
import { LSContext } from '../contexts/localstorageContext';
import { IMovies } from '../types/Movies.types';

const RecentlyViewedMoviesFN: React.FC = () => {
  const { viewed } = useContext(LSContext);

  return (
    <div>
      <h3>Recently Viewed Movies</h3>
      <ul>
        {viewed.slice(0, 10).map((movie: IMovies) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewedMoviesFN;
