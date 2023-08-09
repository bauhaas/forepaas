import { formatDate } from "@/utils/movies";
import axios from "axios";
import { useEffect, useState } from "react";

export const useMoviesGroupedByYears = () => {
  const [moviesByYears, setMoviesByYears] = useState([]);

  useEffect(() => {
    const fetchAndProcessMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1&sort_by=revenue.desc`
        );

        const movies = response.data.results;

        const moviesGroupedByYear = movies.reduce((acc, movie) => {
          const year = formatDate(movie.release_date);
          if (!acc[year]) {
            acc[year] = { count: 0, totalVote: 0 };
          }
          acc[year].count += 1;
          acc[year].totalVote += movie.vote_average;
          return acc;
        }, {});

        const formattedData = Object.keys(moviesGroupedByYear).map((year) => ({
          year: Number(year),
          count: moviesGroupedByYear[year].count,
          averageVote:
            moviesGroupedByYear[year].totalVote /
            moviesGroupedByYear[year].count,
        }));

        setMoviesByYears(formattedData);
      } catch (error) {
        console.error("Error fetching and processing movies:", error);
      }
    };

    fetchAndProcessMovies();
  }, []);

  return { moviesByYears };
};
