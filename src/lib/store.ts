import { configureStore } from "@reduxjs/toolkit";
import clicker from "@/utils/clicker";

export const store = configureStore({
    reducer: {
        clicker: clicker
    }
})

export type RootState = ReturnType<typeof store.getState>