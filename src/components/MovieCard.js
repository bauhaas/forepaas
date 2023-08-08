"use client";

import Image from "next/image";
import styles from "../styles/MovieCard.module.css";

const MovieCard = (props) => {
  const { movie } = props;
  const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w200${path}`;
  };

  const formatDate = (date) => {
    return date.split("-")[0];
  };

  return (
    <div className={styles.cardContainer}>
      <Image
        src={getImageUrl(movie.poster_path)}
        alt="movie poster"
        width={200}
        height={250}
        layout={"responsive"}
        className={styles.poster}
      />
      <div className={styles.mainDetails}>
        <div>
          <h4>{movie.title}</h4>
          <p>{formatDate(movie.release_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
