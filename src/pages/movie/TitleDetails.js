import styles from "@/styles/movies.module.css";

export const TitleDetails = ({ movieDetails }) => {
  return (
    <div className={styles.title}>
      <h2>{movieDetails.title}</h2>
      &nbsp;
      <p className="secondaryText">{"(" + movieDetails.release_date + ")"}</p>
    </div>
  );
};
