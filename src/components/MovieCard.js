"use client";

import Image from "next/image";
import styles from "../styles/MovieCard.module.css";
import { Profit } from "./Profit";

const formatProfit = (n) => {
  if (n >= 1000000 || n <= -1000000) {
    return Math.floor(n / 1000000) + " M$";
  } else if (n >= 1000 || n <= -1000) {
    return Math.floor(n / 1000) + " K$";
  } else {
    return Math.floor(n).toString();
  }
};

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={movie.poster_url}
        alt="movie poster"
        width={200}
        height={250}
        layout={"responsive"}
        className={styles.poster}
      />
      <div className={styles.mainDetails}>
        <div className={styles.headerDetails}>
          <p className={styles.mainDetailsTitle}>{movie.title}</p>
          <Profit
            value={movie.profit}
            formattedProfit={formatProfit(movie.profit)}
          />
        </div>
        <p className={styles.release_date}>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
