export const formatDate = (date) => {
  return date.split("-")[0];
};

export const formatMovieDetails = (movieDetails) => {
  console.log("test");
  return movieDetails.map((movie) => {
    const details = movie.data;
    const formattedReleaseDate = formatDate(details.release_date);
    return {
      ...details,
      release_date: formattedReleaseDate,
      poster_url: `https://image.tmdb.org/t/p/w200${details.poster_path}`,
      profit: details.revenue - details.budget,
    };
  });
};
