// src/store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialTheme = localStorage.getItem("theme") || "system"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload
      localStorage.setItem("theme", action.payload)
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
