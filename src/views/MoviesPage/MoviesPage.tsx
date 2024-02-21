import { useEffect, useState } from "react";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { appContext } from "contexts/AppProvider";
import MovieItem from "types/MovieItem";
import Searcher from "components/Searcher/Searcher";
import MovieFinderList from "components/MovieFinderList/MovieFinderList";
import movieAPI from "services/movieAPI";
import debounce from "debounce";

const MoviesPage = () => {
  const [userMovieInput, setUserMovieInput] = useState("");
  const { userMovies, setUserMovies } = useContext(appContext) as {
    userMovies: MovieItem[];
    setUserMovies: Dispatch<SetStateAction<MovieItem[]>>;
  };

  const fetchMovie = async (movieTitle: string) => {
    try {
      const { results } = await movieAPI.fetchMovieByName(movieTitle);
      setUserMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    return;
  };

  const debouncedFetchMovies = debounce(fetchMovie, 500);
  useEffect(() => {
    if (userMovieInput.trim() !== "") {
      debouncedFetchMovies(userMovieInput);
    }

    return () => {
      debouncedFetchMovies.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMovieInput]);

  return (
    <>
      <Searcher
        currentValue={userMovieInput}
        onUserMovieChange={setUserMovieInput}
      />
      <MovieFinderList data={userMovies} />
    </>
  );
};

export default MoviesPage;
