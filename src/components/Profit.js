import { MoveDown, MoveUp } from "lucide-react";
import styles from "../styles/Profit.module.css";

export const Profit = ({ value, formattedProfit }) => {
  const isPositive = value > 0;
  const color = isPositive ? "#13fc03" : "red";

  return (
    <div className={styles.profitContainer}>
      {isPositive ? (
        <MoveUp color={color} size={12} />
      ) : (
        <MoveDown color={color} size={12} />
      )}
      <p style={{ color: color }}>{formattedProfit}</p>
    </div>
  );
};

export default Profit;
