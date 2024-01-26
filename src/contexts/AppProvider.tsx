import { useState, createContext, Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

import MovieItem from "types/MovieItem";

interface IProvider {
  children?: ReactNode;
}

interface providerValues {
  movies: MovieItem[];
  setMovies: Dispatch<SetStateAction<MovieItem[]>>;
}

export const appContext = createContext<providerValues | undefined>(undefined);

const AppProvider = ({ children }: IProvider) => {
  const [movies, setMovies] = useState<MovieItem[]>([]);

  const providerValue: providerValues = {
    movies,
    setMovies,
  };

  return (
    <appContext.Provider value={providerValue}>{children}</appContext.Provider>
  );
};

export default AppProvider;
