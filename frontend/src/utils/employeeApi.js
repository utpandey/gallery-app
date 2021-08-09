import axios from './axios';
import { ADDEMPLOYEES } from '../redux/reducers/authReducer';
import { store } from '../redux/store'

export const employeeAdd = async({ email, password }) => {
    const loginData = {
        email,
        password
    }
    axios.post('/admin/employees/add', loginData)
        .then((res) => {
            if (res && res.data) {
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });

};

export const getAllEmployee = async() => {
    axios.get('/admin/employees/all')
        .then((res) => {
            if (res && res.data) {
                console.log('getEmployees')
                console.log(res)
                console.log(res.data)
                store.dispatch(ADDEMPLOYEES(res.data));
            }
        })
        .catch((err) => {
            console.log(err);
        });
}