import { Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import HomePage from "views/HomePage/HomePage";
import MoviesPage from "views/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
