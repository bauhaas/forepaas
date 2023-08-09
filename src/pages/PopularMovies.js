"use client";

import { MovieListCarousel } from "./MovieListCarousel";
import { usePopularMovies } from "@/hooks/usePopularMovies";

import styles from "@/styles/components/PopularMovies.module.css";

const PopularMovies = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <div className={styles.flexCol}>
      <h2 className={styles.title}>
        Les 10 films les plus populaires du moment
      </h2>
      <MovieListCarousel movies={popularMovies} />
    </div>
  );
};

export default PopularMovies;
