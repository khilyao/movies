import { StyledInput } from "./Searcher.styled";

type Props = {
  currentValue: string;
  onUserMovieChange: React.Dispatch<React.SetStateAction<string>>;
};

const Searcher = ({ currentValue, onUserMovieChange }: Props) => {
  const handleUserMovieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUserMovieChange(e.target.value);
  };

  return (
    <>
      <StyledInput
        type="text"
        value={currentValue}
        onChange={handleUserMovieChange}
      />
    </>
  );
};

export default Searcher;
