import MovieItem from "types/MovieItem";
import { Link, useNavigate } from "react-router-dom";

interface TrendingMoviesListProps {
  trendingMovies?: MovieItem[];
}

const TrendingMoviesList = ({ trendingMovies }: TrendingMoviesListProps) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
