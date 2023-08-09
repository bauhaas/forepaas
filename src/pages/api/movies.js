import axios from "axios";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
    );

    const sortedResults = response.data.results.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );

    console.log(sortedResults);
    return sortedResults;
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
