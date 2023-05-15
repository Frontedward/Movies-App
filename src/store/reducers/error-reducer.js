import { createSlice } from "@reduxjs/toolkit"

const initialError = {
  text: "",
  description: "",
  active: false
}

const initialState = { error: initialError }

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    removeError: state => {
      state.error = initialError
    }
  }
})

export const { setError, removeError } = errorSlice.actions
export const selectError = state => state.error

export default errorSlice.reducer
