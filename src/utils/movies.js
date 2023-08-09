export const formatDate = (date) => {
  return date.split("-")[0];
};

export const formatMovieDetails = (movieDetails) => {
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

export const formatProfit = (n) => {
  if (n >= 1000000 || n <= -1000000) {
    return Math.floor(n / 1000000) + " M$";
  } else if (n >= 1000 || n <= -1000) {
    return Math.floor(n / 1000) + " K$";
  } else {
    return Math.floor(n).toString();
  }
};
