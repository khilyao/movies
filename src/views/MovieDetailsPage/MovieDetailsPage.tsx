import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import apiTool from "services/movieAPI";
import {
  Card,
  GenreDesc,
  MovieHeading,
  MovieInfo,
  Overview,
  MovieWrapper,
  BackBtn,
  GenresList,
} from "./MovieDetailsPage.styled";
import { RotatingLines } from "react-loader-spinner";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

type Genre = {
  id: number;
  name: string;
};

type movieProps = {
  poster_path: string;
  original_title: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres?: Genre[];
};

const MoviesDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState<movieProps | null>(null);
  let { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movieId) {
          const movieData = await apiTool.fetchMovieById(movieId);
          setCurrentMovie(movieData);
        }
      } catch (error) {
        console.error("Error fetching movie data:", (error as Error).message);
      }
    };

    fetchData();
  }, [movieId]);

  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres = [],
  }: movieProps = currentMovie || {
    poster_path: "",
    original_title: "",
    title: "",
    release_date: "",
    vote_average: 0,
    overview: "",
    genres: [],
  };

  return (
    <>
      {currentMovie ? (
        <MovieWrapper>
          <BackBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </BackBtn>
          <Card>
            <img
              width="200"
              height="300"
              src={"https://image.tmdb.org/t/p/w200" + poster_path}
              alt={original_title}
            />
            <MovieInfo>
              <MovieHeading>{`${title} (${parseInt(
                release_date,
              )})`}</MovieHeading>
              <p>{`${Math.round(vote_average * 10)}%`}</p>
              <Overview>Overview</Overview>
              <p>{overview}</p>
              <GenreDesc>Genres</GenreDesc>
              <GenresList>
                {currentMovie &&
                  genres.map(({ name }: Genre) => <li key={name}>{name}</li>)}
              </GenresList>
            </MovieInfo>
          </Card>
          <div>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path={`/cast`} element={<Cast />} />
            <Route path={`/reviews`} element={<Reviews />} />
          </Routes>
        </MovieWrapper>
      ) : (
        <RotatingLines strokeColor="black"></RotatingLines>
      )}
    </>
  );
};

export default MoviesDetailsPage;
