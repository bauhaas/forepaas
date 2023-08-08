import { FinancialDetailsCell } from "./FinancialDetailsCell";

import styles from "@/styles/movies.module.css";

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
      value: movieDetails.revenue - movieDetails.budget,
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
