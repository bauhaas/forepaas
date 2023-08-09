import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import styles from "@/styles/movies.module.css";

export const RatingDetails = ({ movieDetails }) => {
  const filledStars = Math.min(5, (movieDetails.vote_average / 2) % 5);

  const initialRating =
    parseInt(localStorage.getItem(`movieRating_${movieDetails.id}`)) || 0;
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    localStorage.setItem(`movieRating_${movieDetails.id}`, rating);
  }, [movieDetails.id, rating]);

  return (
    <div className={styles.movieDetailsCellContainer}>
      <div className={styles.movieDetail}>
        <h5 className="secondaryText">Communauté</h5>
        <div>
          <div style={{ display: "flex" }}>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={24}
                style={{
                  fill: index < filledStars ? "white" : "transparent",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.movieDetail}>
        <h5 className="secondaryText">Ma note</h5>
        <div>
          <div style={{ display: "flex" }}>
            {[...Array(5)].map((_, index) => {
              index += 1;

              return (
                <Star
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  key={index}
                  size={24}
                  className={
                    index <= (hover || rating)
                      ? styles.starFilled
                      : styles.starEmpty
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
