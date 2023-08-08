import { useSelector, useDispatch } from "react-redux";
import MovieCard from "@/components/MovieCard";
import { setMovieDetails } from "@/store/reducers/movieDetails";
import { useRouter } from "next/router";

import styles from "@/styles/search.module.css";

export const MovieList = ({ movies }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goToMovieDetails = (movie) => {
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
