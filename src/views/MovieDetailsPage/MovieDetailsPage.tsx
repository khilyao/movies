import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiTool from "services/movieAPI";

type movieProps = {
  poster_path: string;
  original_title: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: { name: string };
};

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState<movieProps | null>(null);

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

  console.log(currentMovie);

  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres: { name },
  }: movieProps = currentMovie || {
    poster_path: "",
    original_title: "",
    title: "",
    release_date: "",
    vote_average: 0,
    overview: "",
    genres: { name: "" },
  };

  return (
    <>
      {currentMovie ? (
        <>
          {title}
          {release_date}
          {vote_average}
          {name}
          {overview}
          <div style={{ display: "flex" }}>
            <img
              src={"https://image.tmdb.org/t/p/w200" + poster_path}
              alt={original_title}
            />
            <div>
              <h2>{`${title} + (${parseInt(release_date)})`}</h2>
              <p>{`${Math.round(vote_average * 10)}%`}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>name.</ul>
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default MoviesDetailsPage;
