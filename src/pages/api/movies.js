import axios from "axios";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_API_KEY,
    language: "fr-FR",
  },
});

export const getPopularMovies = async () => {
  try {
    // const response = await api.get("/movie/popular", {
    //   params: {
    //     language: language || "en-US", // Default to English if language is not provided
    //   },
    // });

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
    );

    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching popular movies");
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching movie ${id}`);
  }
};
