import { createSlice } from '@reduxjs/toolkit';
const albumSlice = createSlice({
    name: 'album',
    initialState: {
        album: null,
        selectedAlbum: null
    },
    reducers: {
        AddAlbums: (state, action) => {
            state.album = action.payload;
        },
        RemoveAlbums: (state) => {
            state.album = null;
        },
        SelectedAlbum: (state, action) => {
            state.selectedAlbum = action.payload;
        },
        DeSelectAlbum: (state, action) => {
            state.selectedAlbum = null;
        }
    }
});

const { actions, reducer } = albumSlice;

export const { AddAlbums, RemoveAlbums, SelectedAlbum, DeSelectAlbum } = albumSlice.actions;

export default reducer;