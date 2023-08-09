"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PopularMovies.module.css";
import { setMovieDetails } from "@/store/reducers/movieDetails";
import { setMovies } from "@/store/reducers/movies";
import { useDispatch, useSelector } from "react-redux";
import { MovieList } from "./search/MovieList";
import { getMovieById, getPopularMovies } from "./api/movies";
import { formatMovieDetails } from "@/utils/movies";

const usePopularMovies = () => {
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
        setPopularMovies(movies.slice(0, 10));
        dispatch(setMovies(movies));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return { popularMovies };
};

const PopularMovies = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <div className={styles.flexCol}>
      <h2 className={styles.title}>
        Les 10 films les plus populaires du moment
      </h2>
      <MovieList movies={popularMovies} />
    </div>
  );
};

export default PopularMovies;
