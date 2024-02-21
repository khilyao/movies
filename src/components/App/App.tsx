import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "views/HomePage/HomePage";
import MoviesPage from "views/MoviesPage/MoviesPage";
import MovieDetailsPage from "views/MovieDetailsPage/MovieDetailsPage";
import Navigation from "components/Navigation/Navigation";
import movieAPI from "services/movieAPI";
import MovieItem from "types/MovieItem";

import { appContext } from "contexts/AppProvider";

function App() {
  const { setMovies } = useContext(appContext) as {
    setMovies: React.Dispatch<React.SetStateAction<MovieItem[]>>;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await movieAPI.fetchMovies();
        setMovies(results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
