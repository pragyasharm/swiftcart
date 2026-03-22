import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/localStorage";

const cartSlice = createSlice({
  initialState: { products: getLocalStorage("products") ?? []},
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id == action.payload.id,
      );
      if (existingItem) {
        state.products = [...state.products].map((item) => {
          if (item.id == action.payload.id)
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });
      } else {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    increaseQuantity: (state, action) => {
      state.products = [...state.products].map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.products = [...state.products].map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    deteleCartItem: (state, action) => {
        state.products = [...state.products].filter((item)=> item.id !== action.payload.id)

    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deteleCartItem } = cartSlice.actions;
export default cartSlice.reducer;
