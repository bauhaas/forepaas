import { Profit } from "@/components/Profit";
import { formatProfit } from "@/utils/movies";

import styles from "@/styles/pages/movies.module.css";

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
