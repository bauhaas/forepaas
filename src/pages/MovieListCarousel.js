import { useSelector, useDispatch } from "react-redux";
import MovieCard from "@/components/MovieCard";
import { setMovieDetails } from "@/store/reducers/movieDetails";
import { useRouter } from "next/router";

import styles from "@/styles/MovieListCarousel.module.css";
import { useState } from "react";
import Image from "next/image";

export const MovieListCarousel = ({ movies }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goToMovieDetails = (movie) => {
    dispatch(setMovieDetails(movie));
    router.push(`/movie/${movie.id}`);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleClickPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const handleClickNext = () => {
    if (currentIndex + itemsPerPage < movies.length) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + itemsPerPage, movies.length - 1)
      );
    }
  };
  const visibleMovies = movies.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={styles.carouselContainer}>
      <Image
        src="/left-arrow.png"
        width={25}
        alt="Left Arrow"
        height={25}
        onClick={handleClickPrevious}
      />
      <ul className={styles.gridcontainer}>
        {visibleMovies.map((movie) => (
          <li key={movie.id} onClick={() => goToMovieDetails(movie)}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      <Image
        src="/right-arrow.png"
        width={25}
        alt="Right Arrow"
        height={25}
        onClick={handleClickNext}
      />
    </div>
  );
};
