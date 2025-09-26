import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : null;
  } catch (err) {
    console.error("Failed to load cart from localStorage", err);
    return null;
  }
};

const initialState =
  loadState() || {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.type === "product" && item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, type: "product", quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += product.price;
    },

    addBundleToCart: (state, action) => {
      const bundle = action.payload;
      const existing = state.items.find(
        (item) => item.type === "bundle" && item.id === bundle.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...bundle, type: "bundle", quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += bundle.price;
    },

    removeFromCart: (state, action) => {
      const { id, type } = action.payload;
      const existing = state.items.find(
        (item) => item.type === type && item.id === id
      );

      if (existing) {
        state.totalItems -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.items = state.items.filter(
          (item) => !(item.type === type && item.id === id)
        );
      }
    },

    increaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existing = state.items.find(
        (item) => item.type === type && item.id === id
      );

      if (existing) {
        existing.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += existing.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existing = state.items.find(
        (item) => item.type === type && item.id === id
      );

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= existing.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addProductToCart,
  addBundleToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
