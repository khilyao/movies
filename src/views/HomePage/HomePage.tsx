import { useEffect, useState } from "react";
import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";
import movieAPI from "services/movieAPI";
import MovieItem from "types/MovieItem";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieItem[] | undefined>(
    [],
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await movieAPI.fetchTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <TrendingMoviesList trendingMovies={trendingMovies} />
    </>
  );
};

export default HomePage;
