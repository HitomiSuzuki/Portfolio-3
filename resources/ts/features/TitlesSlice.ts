import { createSlice } from "@reduxjs/toolkit";

type Item = {
    id: number,
    title: string
}

const initialState:Item[] = []

const titleSlice = createSlice({
    name: 'titles',
    initialState: initialState,
    reducers: {
        addTitle: (state, action) => {
            state.push(action.payload);
        },
        removeTitle: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const {addTitle, removeTitle} = titleSlice.actions;
export default titleSlice.reducer;