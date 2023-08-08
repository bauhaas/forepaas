import MovieCard from "@/components/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "@/styles/search.module.css";
import { setMovieDetails } from "@/store/reducers/movieDetails";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const MovieList = ({ movies }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goToMovieDetails = (movie) => {
    console.log("test");
    dispatch(setMovieDetails(movie));
    router.push(`/movie/${movie.id}`);
  };

  return (
    <ul className={styles.gridcontainer}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => goToMovieDetails(movie)}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default function Search() {
  const movies = useSelector((state) => state.movies);

  // Step 1: Create a state variable for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Step 3: Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.mainm}>
      <div className={styles.f}>
        <h1>Tous les films</h1>
        <label className={styles.search}>
          <Image
            src="/searchicon.png"
            width={25}
            height={25}
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search by movie title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}
