import { createSlice } from "@reduxjs/toolkit"

export const clickerSlice = createSlice({
    name: 'clicker',
    initialState: {
        value: 0
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },

        deincrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, deincrement } = clickerSlice.actions
export default clickerSlice.reducer