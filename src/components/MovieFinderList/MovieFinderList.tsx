import { Link } from "react-router-dom";
import MovieItem from "types/MovieItem";
import { List } from "./MovieFinderList.styled";

type Props = {
  data: MovieItem[];
};

const MovieFinderList = ({ data }: Props) => {
  return (
    <>
      <List>
        {data?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default MovieFinderList;
