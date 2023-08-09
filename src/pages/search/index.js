import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

import { MovieList } from "./MovieList";

import styles from "@/styles/pages/search.module.css";

export default function Search() {
  const movies = useSelector((state) => state.movies);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={styles.pageContainer}>
      <div className={styles.title}>
        <h2>Tous les films</h2>
        <label className={styles.search}>
          <Image
            src="/searchicon.png"
            width={12}
            height={12}
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search by movie title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
      <MovieList movies={filteredMovies} />
    </main>
  );
}
