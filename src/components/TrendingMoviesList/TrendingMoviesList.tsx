import MovieItem from "types/MovieItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "contexts/AppProvider";

const TrendingMoviesList = () => {
  const { movies } = useContext(appContext) as {
    movies: MovieItem[];
  };

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
