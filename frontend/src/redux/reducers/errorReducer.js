import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        userError: {
            isErrors: false,
            errorMessage: ''
        },
        passError: {
            isErrors: false,
            errorMessage: ''
        },
        emailError: {
            isErrors: false,
            errorMessage: ''
        }
        // needVerification: false,
        // success: ''
    },
    reducers: {
        USERERROR: (state, action) => {
            const { isErrors, errorMessage } = action.payload;
            state.userError.isErrors = isErrors;
            state.userError.errorMessage = errorMessage;
        },
        PASSERROR: (state, action) => {
            const { isErrors, errorMessage } = action.payload;
            state.passError.isErrors = isErrors;
            state.passError.errorMessage = errorMessage;
        },
        EMAILERROR: (state, action) => {
            const { isErrors, errorMessage } = action.payload;
            state.emailError.isErrors = isErrors;
            state.emailError.errorMessage = errorMessage;
        },
    }
});

const { actions, reducer } = errorSlice;

export const { USERERROR, PASSERROR, EMAILERROR } = errorSlice.actions;
export default reducer;