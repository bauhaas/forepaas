import { useSelector } from "react-redux";
import Image from "next/image";

import { SynopsisDetails } from "./SynopsisDetails";
import { FinancialDetails } from "./FinancialDetails";
import { RatingDetails } from "./RatingDetails";

import styles from "@/styles/movies.module.css";

const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

const formatDate = (date) => {
  return date.split("-")[0];
};

export default function MovieDetails() {
  const movieDetails = useSelector((state) => state.movieDetails);

  return (
    <div className={styles.mainm}>
      <Image
        src={getImageUrl(movieDetails.poster_path)}
        alt="movie poster"
        width={275}
        height={400}
        className={styles.poster}
      />
      <div className={styles.Textdetails}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{movieDetails.title}</h2>
          <p>
            {"("}
            {formatDate(movieDetails.release_date)}
            {")"}
          </p>
        </div>

        <FinancialDetails movieDetails={movieDetails} />
        <SynopsisDetails movieDetails={movieDetails} />
        <RatingDetails movieDetails={movieDetails} />
      </div>
    </div>
  );
}
