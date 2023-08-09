"use client";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "@/styles/pages/home.module.css";
import { useMoviesGroupedByYears } from "@/hooks/useMoviesGroupedByYears";

export const Chart = () => {
  const { moviesByYears } = useMoviesGroupedByYears();

  return (
    <>
      <h2 className={styles.title}>Statistique par année</h2>

      <div className={styles.chartsContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={moviesByYears}
            margin={{
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid stroke="white" />
            <XAxis dataKey="year" tick={{ stroke: "white" }} />
            <YAxis tick={{ stroke: "white" }} domain={[0, 10]} />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="averageVote"
              barSize={12}
              fill="#2D8FFF"
              radius={[10, 10, 0, 0]}
              name="Note moyenne"
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="red"
              name="Nombre de films"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
