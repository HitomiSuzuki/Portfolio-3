import { configureStore, createSlice } from "@reduxjs/toolkit";

type ImageItem = {
    id: number,
    url: string,
}

const initialState:ImageItem[] = []

const imageSlice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: {
        addUrl: (state, action) => {
            state.push(action.payload);
        },
        removeUrl: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const {addUrl, removeUrl} = imageSlice.actions;
export default imageSlice.reducer;