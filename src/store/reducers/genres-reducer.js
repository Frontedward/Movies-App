import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getGenres } from "../../movie-api/genres"

const initialState = {
  genres: []
}

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  return getGenres()
})

export const genresSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres
    })
  }
})

export const selectGenres = state => state.genres.genres

export default genresSlice.reducer
