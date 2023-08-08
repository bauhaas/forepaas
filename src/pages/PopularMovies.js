"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import styles from "./PopularMovies.module.css";
import { useRouter } from "next/router";
import { setMovieDetails } from "@/store/reducers/movieDetails";
import { setMovies } from "@/store/reducers/movies";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const TMDB_API_KEY = "96ebb308f39e4ee5adbb527fb8a5aaba"; // Replace this with your TMDB API key

const PopularMovies = () => {
  const [movies, setMoviesL] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const formatDate = (date) => {
    return date.split("-")[0];
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=fr-FR`
        );

        // Extract movie IDs from the first response
        const movieIds = response.data.results
          .slice(0, 10)
          .map((movie) => movie.id);

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
        dispatch(setMovies(moviesWithDetails));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const goToMovieDetails = (movie) => {
    // Dispatch the action to set the selected movie details in the store
    dispatch(setMovieDetails(movie));
    // Access the selected movie details (title, release_date, etc.) as needed
    router.push(`/movie/${movie.id}`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, movies.length - 4));
  };

  return (
    <div className={styles.mainm}>
      <h2>Les 10 films les plus populaires du moment</h2>

      <ul className={styles.gridcontainer}>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => goToMovieDetails(movie)}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
