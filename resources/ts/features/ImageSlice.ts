import { configureStore, createSlice } from "@reduxjs/toolkit";

type ImageItem = {
    id: number,
    title: string,
    url: string,
    created_at: Date
}

const initialState:ImageItem[] = []

const imageSlice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: {
        addImage: (state, action) => {
            state.push(action.payload);
        },
        removeImage: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const {addImage, removeImage} = imageSlice.actions;
export default imageSlice.reducer;