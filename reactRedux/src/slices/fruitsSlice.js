import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    fruits: [],
}

const fruitsSlice = createSlice({
    name: "fruits",
    initialState,
    reducers: {
        setFruit: (state, action) => {
            state.fruits = [...state.fruits, action.payload];
        },
        deleteFruit: (state, action) => {
            state.fruits = state.fruits.filter (
                (fruit, index) => index !== action.payload
            )
        }
    }
})

export const {setFruit, deleteFruit}=fruitsSlice.actions;

export default fruitsSlice.reducer;