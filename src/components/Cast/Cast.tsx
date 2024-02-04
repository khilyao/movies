import { useEffect, useState } from "react";
import apiTool from "services/movieAPI";

type CastProps = {
  movieId: string | undefined;
};

type CastItem = {
  name: string;
  character: string;
  profile_path: string;
};

const Cast = ({ movieId }: CastProps) => {
  const [actors, setActors] = useState<CastItem[] | undefined>();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        if (movieId) {
          const actors = await apiTool.fetchMovieCredits(movieId);
          setActors(actors.cast);
        }
      } catch (error) {
        console.error("Error fetching movie data:", (error as Error).message);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(({ name, character, profile_path }) => (
            <li key={name}>
              <img
                src={"https://image.tmdb.org/t/p/h100" + profile_path}
                alt={name}
              />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
