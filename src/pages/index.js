import styles from "@/styles/Home.module.css";

import Link from "next/link";
import PopularMovies from "./PopularMovies";
import {
  ComposedChart,
  LineChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const TMDB_API_KEY = "96ebb308f39e4ee5adbb527fb8a5aaba";

const Charts = () => {
  // const movies = useSelector((state) => state.movies);
  const [movies, setMoviesL] = useState([]);
  // Preprocess data to group movies by release year and count the number of movies for each year
  const [moviesByYear, setMoviesByYear] = useState([]);

  const formatDate = (date) => {
    return date.split("-")[0];
  };

  useEffect(() => {
    const moviesData = movies.map((movie) => ({
      ...movie,
      releaseYear: movie.release_date, // Assuming release_date is in the format "yyyy"
    }));

    const moviesGroupedByYear = moviesData.reduce((acc, movie) => {
      const year = movie.releaseYear;
      acc[year] = acc[year] || { count: 0, totalVote: 0 };
      acc[year].count += 1;
      acc[year].totalVote += movie.vote_average;
      return acc;
    }, {});

    const formattedData = Object.keys(moviesGroupedByYear).map((year) => ({
      year: Number(year),
      count: moviesGroupedByYear[year].count,
      averageVote:
        moviesGroupedByYear[year].totalVote / moviesGroupedByYear[year].count,
    }));

    setMoviesByYear(formattedData);
  }, [movies]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=fr-FR&page=1&sort_by=revenue.desc`
        );

        // Extract movie IDs from the first response
        const movieIds = response.data.results.map((movie) => movie.id);
        // console.log(movieIds);
        // Fetch movie details for each movie ID concurrently using Promise.all
        const movieDetailRequests = movieIds.map((id) =>
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=fr-FR`
          )
        );

        const movieDetailsResponses = await Promise.all(movieDetailRequests);

        // Extract relevant details from each movie detail response
        const moviesWithDetails = movieDetailsResponses.map(
          (movieDetailResponse) => {
            const movieData = movieDetailResponse.data;
            // Reformat the release_date field using formatDate function
            const formattedReleaseDate = formatDate(movieData.release_date);
            // Create a new object with the reformatted release_date and other details
            return {
              ...movieData,
              release_date: formattedReleaseDate,
            };
          }
        );

        setMoviesL(moviesWithDetails);
        // dispatch(setMovies(moviesWithDetails));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  console.log(moviesByYear);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={moviesByYear}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="year" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="averageVote"
          barSize={12}
          fill="#413ea0"
          radius={[10, 10, 0, 0]}
        />
        <Line type="monotone" dataKey="count" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <PopularMovies />
      <Link href="/search" className={styles.homeLink}>
        Voir tous les films
      </Link>
      <div className={styles.mainm}>
        <h2>Statistique par année</h2>
        <div className={styles.chartsContainer}>
          <Charts />
        </div>
      </div>
    </main>
  );
}
