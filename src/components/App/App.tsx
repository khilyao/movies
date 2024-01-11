import { Routes, Route } from "react-router-dom";
import HomePage from "views/HomePage/HomePage";
import MoviesPage from "views/MoviesPage/MoviesPage";
import MovieDetailsPage from "views/MovieDetailsPage/MovieDetailsPage";
import Navigation from "components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
