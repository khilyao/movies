import { useParams } from "react-router-dom";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  return <>MoviesDetailsPage {movieId}</>;
};

export default MoviesDetailsPage;
