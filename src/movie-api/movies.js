import { getResource } from "./core"

const transformMovie = movie => {
  const {
    id,
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    genre_ids
  } = movie

  return {
    id,
    title,
    posterPath: poster_path,
    releaseDate: Date.parse(release_date),
    overview,
    usersRating: vote_average,
    genreIds: genre_ids
  }
}

export const getMovies = async (query, pageNumber) => {
  const { page, results, total_pages } = await getResource("/search/movie", {
    query: query,
    page: String(pageNumber)
  })
  const transformedMovies = results.map(movie => transformMovie(movie))

  return {
    page: page,
    movies: transformedMovies,
    totalPages: total_pages,
    query,
    loading: false
  }
}
