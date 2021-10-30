import axios from './axios';
import { store } from '../redux/store';
import { LOGIN } from '../redux/reducers/authReducer';
import { EMAILERROR, PASSERROR } from '../redux/reducers/errorReducer'

export const signIn = async(loginData) => {
    axios.post('/user/signin', loginData)
        .then((res) => {
            if (res && res.data) {
                store.dispatch(LOGIN(res.data));
            }
        })
        .catch((err) => {
            console.log(err);
            store.dispatch(EMAILERROR({ isErrors: true, errorMessage: err.name }));
            store.dispatch(PASSERROR({ isErrors: true, errorMessage: err.name }));
        });
};

export const signUp = async(signUpdata) => {
    axios.post('/user/signup', signUpdata)
        .then((res) => {
            if (res && res.data) {
                store.dispatch(LOGIN(res.data));
            }
        })
        .catch((err) => {
            console.log(err);
            store.dispatch(EMAILERROR({ isErrors: true, errorMessage: err.name }));
            store.dispatch(PASSERROR({ isErrors: true, errorMessage: err.name }));
        });
};