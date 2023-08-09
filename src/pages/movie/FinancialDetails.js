import { FinancialDetailsCell } from "./FinancialDetailsCell";

import styles from "@/styles/pages/movies.module.css";

export const FinancialDetails = ({ movieDetails }) => {
  const financialDetails = [
    {
      title: "Budget",
      value: movieDetails.budget,
    },
    {
      title: "Revenus",
      value: movieDetails.revenue,
    },
    {
      title: "Recettes",
      value: movieDetails.profit,
    },
  ];

  return (
    <div className={styles.movieDetailsCellContainer}>
      {financialDetails.map((financialDetail) => (
        <FinancialDetailsCell
          key={financialDetail.title}
          title={financialDetail.title}
          value={financialDetail.value}
        />
      ))}
    </div>
  );
};
