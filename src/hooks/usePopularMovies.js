import { useEffect, useState } from "react";
import axios from "axios";
import { setMovies } from "@/store/reducers/movies";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../pages/api/movies";
import { formatMovieDetails } from "@/utils/movies";

export const usePopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        const moviesDetails = await Promise.all(
          popularMovies.map((movie) =>
            axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`
            )
          )
        );

        const movies = formatMovieDetails(moviesDetails);

        const moviesSortedByPopularity = [...movies].sort(
          (a, b) => b.popularity - a.popularity
        );

        setPopularMovies(moviesSortedByPopularity.slice(0, 10));
        dispatch(setMovies(movies));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return { popularMovies };
};
