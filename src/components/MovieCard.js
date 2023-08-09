"use client";

import { formatProfit } from "@/utils/movies";
import Image from "next/image";
import { Profit } from "./Profit";

import styles from "../styles/components/MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const formattedProfit = formatProfit(movie.profit);

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
          <Profit value={movie.profit} formattedProfit={formattedProfit} />
        </div>
        <p className={styles.release_date}>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
