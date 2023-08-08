import { useSelector } from "react-redux";
import Image from "next/image";

import { FinancialDetails } from "./FinancialDetails";
import { RatingDetails } from "./RatingDetails";
import { SynopsisDetails } from "./SynopsisDetails";
import { TitleDetails } from "./TitleDetails";

import styles from "@/styles/movies.module.css";

//TODO
const getImageUrl = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export default function MovieDetails() {
  const movieDetails = useSelector((state) => state.movieDetails);
  const poster_path = getImageUrl(movieDetails.poster_path);

  return (
    <div className={styles.movieContainer}>
      <Image
        src={poster_path}
        alt={movieDetails.title + "poster"}
        width={275}
        height={400}
        className={styles.poster}
      />
      <div className={styles.movieDetailsContainer}>
        <TitleDetails movieDetails={movieDetails} />
        <FinancialDetails movieDetails={movieDetails} />
        <SynopsisDetails movieDetails={movieDetails} />
        <RatingDetails movieDetails={movieDetails} />
      </div>
    </div>
  );
}
