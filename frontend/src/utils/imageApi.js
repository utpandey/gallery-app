import axios from './axios';
import { AdddImages } from '../redux/reducers/imageReducer';
import { store } from '../redux/store'

export const imageAdd = async(imageData) => {
    const { userId, link } = imageData;
    console.log(link)
    axios.post(`/picture/add/${userId}`, { link })
        .then((res) => {
            if (res && res.data) {
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getAllImages = async(userId) => {
    console.log(userId)
    axios.get(`/picture/getAll/${userId}`)
        .then((res) => {
            if (res && res.data) {
                console.log(res.data)
                    // store.dispatch(AdddImages(res.data));
            }
        })
        .catch((err) => {
            console.log(err);
        });
}