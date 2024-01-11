import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzAyYzUwNDYzYmNmNWVjODFjNzllZTgzOTUwN2UzOSIsInN1YiI6IjY1OWU4N2Y2OGU4ZDMwMDE0YzIwMzk0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dyDtDrMnZg0gH6uMHmBkUyH_xGoEq9fO3asEItwkHoQ",
    },
  };

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

const apiTool = { fetchTrendingMovies };

export default apiTool;
