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
    const storedData = window.localStorage.getItem('key');

    return storedData ? JSON.parse(storedData) : [];
  });

  const storedValue = (title: string, id: number, poster_path: string) => {
    if (!viewed.some((movie: IMovies) => movie.id === id))
      setViewed([...viewed, { title, id, poster_path }]);
  };

  useEffect(() => {
    if (viewed.length <= 10) {
      window.localStorage.setItem('key', JSON.stringify(viewed));
    } else {
      viewed.shift();
      window.localStorage.setItem('key', JSON.stringify(viewed));
    }
  }, [viewed]);

  return (
    <LSContext.Provider value={{ viewed, storedValue }}>
      {children}
    </LSContext.Provider>
  );
};
