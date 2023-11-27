import { ReactNode, createContext, useEffect, useState } from 'react';
import { IMovies } from '../types/Movies.types';

interface IProps {
  children: ReactNode;
}

export type StoreDataType = {
  viewed: IMovies[];
  storeViewedMovie: (title: string, id: number, poster_path?: string) => void;
};
export const LSContext = createContext<StoreDataType>({
  viewed: [],
  storeViewedMovie: () => {}
});

export const LocalStorageContext = ({ children }: IProps) => {
  const [viewed, setViewed] = useState<IMovies[]>(() => {
    //set the value using the key 'visited-movies'
    const storedData = window.localStorage.getItem('viewed-movies');
    console.log('stored data', storedData);
    return storedData ? JSON.parse(storedData) : [];
  });

  const storeViewedMovieInLocalStorage = (
    title: string,
    id: number,
    poster_path?: string
  ) => {
    // check if the id exists in the array already,
    if (viewed.some((movie: IMovies) => movie.id === id)) {
      return;
    }
    // check length
    if (viewed.length >= 10) {
      viewed.shift();
    }

    setViewed([...viewed, { title, id, poster_path }]);
  };

  useEffect(() => {
    window.localStorage.setItem('viewed-movies', JSON.stringify(viewed));
  }, [viewed]);
  return (
    <LSContext.Provider
      value={{ viewed, storeViewedMovie: storeViewedMovieInLocalStorage }}
    >
      {children}
    </LSContext.Provider>
  );
};
