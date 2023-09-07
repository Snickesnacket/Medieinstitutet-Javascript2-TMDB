import { ReactNode, createContext, useEffect, useState } from 'react';
import { IMovies } from '../types/Movies.types';

interface IProps {
  children: ReactNode;
}

export type StoreDataType = {
  viewed: IMovies[];
  storeViewed: any;
};
export const LSContext = createContext<StoreDataType[] | any>(null);

export const LocalStorageContext = ({ children }: IProps) => {
  const [viewed, setViewed] = useState<IMovies[]>(() => {
    //set the value using the key 'visited-movies'
    const storedData = window.localStorage.getItem('viewed-movies');
    return storedData ? JSON.parse(storedData) : [];
  });

  const storedValue = (title: string, id: number, poster_path: string) => {
    if (!viewed.some((movie: IMovies) => movie.id === id))
      if (viewed.length >= 10) {
        viewed.shift();
      }
    setViewed([...viewed, { title, id, poster_path }]);
  };

  useEffect(() => {
    window.localStorage.setItem('viewed-movies', JSON.stringify(viewed));
  }, [viewed]);
  return (
    <LSContext.Provider value={{ viewed, storedValue }}>
      {children}
    </LSContext.Provider>
  );
};
