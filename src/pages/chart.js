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
import { formatDate } from "@/utils/movies";

const useMostProfitableMovies = () => {};

export const Chart = () => {
  const [moviesByYear, setMoviesByYear] = useState([]);
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

        setMoviesByYear(formattedData);
      } catch (error) {
        console.error("Error fetching and processing movies:", error);
      }
    };

    fetchAndProcessMovies();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Statistique par année</h2>

      <div className={styles.chartsContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={moviesByYear}
            margin={{
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid stroke="white" />
            <XAxis dataKey="year" tick={{ stroke: "white" }} />
            <YAxis tick={{ stroke: "white" }} domain={[0, 10]} />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="averageVote"
              barSize={12}
              fill="#2D8FFF"
              radius={[10, 10, 0, 0]}
              name="Note moyenne"
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="red"
              name="Nombre de films"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
