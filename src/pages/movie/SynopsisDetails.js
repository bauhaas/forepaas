import styles from "@/styles/movies.module.css";

export const SynopsisDetails = ({ movieDetails }) => {
  return (
    <div className={styles.synopsis}>
      <h2>Synopsis</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
};
