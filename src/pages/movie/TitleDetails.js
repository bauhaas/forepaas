import styles from "@/styles/movies.module.css";

//TODO
const formatDate = (date) => {
  return date.split("-")[0];
};

export const TitleDetails = ({ movieDetails }) => {
  const formatedDate = formatDate(movieDetails.release_date);

  return (
    <div className={styles.title}>
      <h2>{movieDetails.title}</h2>
      &nbsp;
      <p>{"(" + formatedDate + ")"}</p>
    </div>
  );
};
