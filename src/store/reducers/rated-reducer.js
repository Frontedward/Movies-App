import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  ratedMovies: {},
  ratedMoviesMap: []
}

export const ratedSlice = createSlice({
  name: "rated",
  initialState,
  reducers: {
    addRate: (state, action) => {
      const { id } = action.payload
      const rateIsSetted = state.ratedMoviesMap.includes(id)

      if (!rateIsSetted) {
        state.ratedMoviesMap = [id, ...state.ratedMoviesMap]
      }
      state.ratedMovies = {
        ...state.ratedMovies,
        [id]: action.payload
      }
    },
    removeRate: (state, action) => {
      state.ratedMoviesMap = state.ratedMoviesMap.filter(
          id => id !== action.payload
      )
      delete state.ratedMovies[action.payload]
    }
  }
})

export const { addRate } = ratedSlice.actions

export const selectRated = state => state.rated.ratedMovies
export const selectRatedMap = state => state.rated.ratedMoviesMap

export default ratedSlice.reducer
