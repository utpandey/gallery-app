import axios from './axios';
import { ADDVISITORS } from '../redux/reducers/authReducer'
import { store } from '../redux/store';

export const epass = async({ firstName, lastName, email, purpose, vaccinated, gender, address, inTime, phone }) => {
    const epassData = { firstName, lastName, email, purpose, vaccinated, gender, address, inTime, phone };
    console.log(epassData)
    axios.post('/admin/visitors/create', epassData)
        .then((res) => {
            if (res && res.data) {
                console.log(res.data)
            }
        })
        .catch((err) => {
            console.log(err);
        });

};

export const getVisitors = async() => {
    await axios.get('/admin/visitors/all')
        .then((res) => {
            if (res && res.data) {
                console.log('getVisitors')
                console.log(res)
                console.log(res.data)
                store.dispatch(ADDVISITORS(res.data));
            }
        })
        .catch((err) => {
            console.log(err);
        });

};