import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice"
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import { setLocalStorage } from "../utils/localStorage";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

// subscribe to store changes
store.subscribe(()=> {
    const state = store.getState()
    setLocalStorage("products", state.cart.products);
})