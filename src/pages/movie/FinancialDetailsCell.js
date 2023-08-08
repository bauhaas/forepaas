import { MoveDown, MoveUp } from "lucide-react";

import styles from "@/styles/movies.module.css";

//TODO
const convertNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + " M$";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + " K$";
  } else {
    return number.toString();
  }
};

export const FinancialDetailsCell = (props) => {
  return (
    <div className={styles.movieDetail}>
      <h5>{props.title}</h5>
      {props.title === "Recettes" ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.value > 0 ? (
            <MoveUp color="green" />
          ) : (
            <MoveDown color="red" />
          )}
          <p
            style={{
              color: props.value > 0 ? "green" : "red",
            }}
          >
            {convertNumber(props.value)}
          </p>
        </div>
      ) : (
        <p>{convertNumber(props.value)}</p>
      )}
    </div>
  );
};
