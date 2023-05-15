import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../movie-api/movies"

const initialState = {
  query: "",
  movies: [],
  page: 1,
  totalPages: 1,
  loading: false
}

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async action => {
      return await getMovies(action.query, action.page)
    }
)

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const { movies, loading, totalPages, page, query } = action.payload

      state.movies = movies
      state.loading = loading
      state.totalPages = totalPages
      state.page = page
      state.query = query
    })
  }
})

export const selectMovies = state => state.movies.movies
export const selectTotalPages = state => state.movies.totalPages
export const selectPage = state => state.movies.page
export const selectQuery = state => state.movies.query
export const selectLoading = state => state.movies.loading

export default movieSlice.reducer
