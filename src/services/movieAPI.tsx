import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzAyYzUwNDYzYmNmNWVjODFjNzllZTgzOTUwN2UzOSIsInN1YiI6IjY1OWU4N2Y2OGU4ZDMwMDE0YzIwMzk0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dyDtDrMnZg0gH6uMHmBkUyH_xGoEq9fO3asEItwkHoQ";
const options = {
  headers: {
    accept: "application/json",
  },
};

const fetchMovies = async () => {
  try {
    const data = await axios
      .get("/trending/all/day", options)
      .then((res) => res.data);

    return data;
  } catch (e) {
    const errorMessage = e as string;

    throw new Error(errorMessage);
  }
};

const fetchMovieById = async (id: string) => {
  try {
    const data = await axios
      .get(`/movie/${id}`, options)
      .then((res) => res.data);

    return data;
  } catch (e) {
    const errorMessage = e as string;

    throw new Error(errorMessage);
  }
};

const fetchMovieByName = async (movieTitle: string) => {
  try {
    const data = await axios
      .get(`/search/movie?query=${movieTitle}`, options)
      .then((res) => res.data);

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

const fetchMovieCredits = async (id: string) => {
  try {
    const data = await axios
      .get(`/movie/${id}/credits`, options)
      .then((res) => res.data);

    return data;
  } catch (e) {
    const errorMessage = e as string;

    throw new Error(errorMessage);
  }
};

const fetchMovieReviews = async (id: string) => {
  try {
    const data = await axios
      .get(`/movie/${id}/reviews`, options)
      .then((res) => res.data);

    return data;
  } catch (e) {
    const errorMessage = e as string;

    throw new Error(errorMessage);
  }
};

const apiTool = {
  fetchMovies,
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMovieByName,
};

export default apiTool;
