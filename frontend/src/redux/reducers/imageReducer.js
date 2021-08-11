import { createSlice } from '@reduxjs/toolkit';
const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: null
    },
    reducers: {
        AdddImages: (state, action) => {
            state.images = action.payload;
        },
        RemoveImages: (state) => {
            state.images = null;
        }
    }
});

const { actions, reducer } = imageSlice;

export const { AdddImages, RemoveImages } = imageSlice.actions;

export default reducer;