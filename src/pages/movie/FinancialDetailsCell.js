import { MoveDown, MoveUp } from "lucide-react";

import styles from "@/styles/movies.module.css";
import { Profit } from "@/components/Profit";

//TODO
const formatProfit = (n) => {
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1) + " M$";
  } else if (n >= 1000) {
    return (n / 1000).toFixed(1) + " K$";
  } else {
    return n.toString();
  }
};

export const FinancialDetailsCell = (props) => {
  const formattedProfit = formatProfit(props.value);

  return (
    <div className={styles.movieDetail}>
      <h5 className="secondaryText">{props.title}</h5>
      {props.title === "Recettes" ? (
        <Profit value={props.value} formattedProfit={formattedProfit} />
      ) : (
        <p>{formattedProfit}</p>
      )}
    </div>
  );
};
