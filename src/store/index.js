import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
})


store.subscribe(() => {
  try {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  } catch (err) {
    console.error("Failed to save cart to localStorage", err);
  }
});