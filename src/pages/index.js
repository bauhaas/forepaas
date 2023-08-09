import styles from "@/styles/Home.module.css";
import Link from "next/link";
import PopularMovies from "./PopularMovies";
import { Chart } from "./chart";

export default function Home() {
  return (
    <main className={styles.main}>
      <PopularMovies />
      <Link href="/search" className={styles.homeLink}>
        Voir tous les films
      </Link>
      <hr className={styles.divider} />
      <Chart />
    </main>
  );
}
