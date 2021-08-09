import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            token: null
        },
        visitors: null,
        employees: null,
        isAuthenticated: false,
        isDrawerOpen: false,
        loading: false
    },
    reducers: {
        LOGIN: (state, action) => {
            const { token } = action.payload;
            state.user = {
                token: token
            }
            state.isAuthenticated = true;
        },
        LOGOUT: (state) => {
            state.user = {
                token: null
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

const { actions, reducer } = authSlice;

export const { LOGIN, LOGOUT, OPENDRAWER, ADDVISITORS, EMPTYVISITORS, ADDEMPLOYEES, EMPTYEMPLOYEES } = authSlice.actions;

export const selectUser = ({ auth }) => auth;

export default reducer;