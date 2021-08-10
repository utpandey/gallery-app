import { createSlice } from '@reduxjs/toolkit';
const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: null
    },
    reducers: {
        AdddImages: (state, action) => {
            // const { token, id } = action.payload;
            state.images = action.payload;
        },
        LOGOUT: (state) => {
            state.user = {
                token: null,
                id: null
            }
            state.isAuthenticated = false;
            // RootNavigation.navigate('signin')

        },
        OPENDRAWER: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
        ADDVISITORS: (state, action) => {
            state.visitors = action.payload;
        },
        EMPTYVISITORS: (state) => {
            state.visitors = null;
        },
        ADDEMPLOYEES: (state, action) => {
            state.employees = action.payload;
        },
        EMPTYEMPLOYEES: (state) => {
            state.employees = null;
        }
    }
});

const { actions, reducer } = imageSlice;

export const { AdddImages } = imageSlice.actions;

export default reducer;