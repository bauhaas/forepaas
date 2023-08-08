import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

import { MovieList } from "./MovieList";

import styles from "@/styles/search.module.css";

export default function Search() {
  const movies = useSelector((state) => state.movies);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>
        <h1>Tous les films</h1>
        <label className={styles.search}>
          <Image
            src="/searchicon.png"
            width={25}
            height={25}
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
    </div>
  );
}
