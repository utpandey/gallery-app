import axios from './axios';
import { store } from '../redux/store'
import { AddAlbums, SelectedAlbum } from '../redux/reducers/albumReducer';

export const albumNew = async(albumData) => {
    const { userId, title, selectedPictures } = albumData;
    console.log(title)
    console.log(selectedPictures)
    const images = selectedPictures;
    axios.post(`/album/add/${userId}`, { title, images })
        .then((res) => {
            if (res && res.data) {
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getAlbums = async(albumData) => {
    const userId = albumData;
    console.log(userId);
    axios.get(`/album/all/${userId}`)
        .then((res) => {
            if (res && res.data) {
                console.log(res.data);
                store.dispatch(AddAlbums(res.data))
            }
        })
        .catch((err) => {
            console.log(err);
        });
    // fetch(`/album/all/${userId}`)
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))

}

export const getSpecificAlbum = async(albumData) => {
    const albumId = albumData;
    console.log(albumId);
    axios.get(`/album/${albumId}/content`)
        .then((res) => {
            if (res && res.data) {
                console.log(res.data);
                store.dispatch(SelectedAlbum(res.data))
            }
        })
        .catch((err) => {
            console.log(err);
        });
    // fetch(`/album/all/${userId}`)
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))

}

// export const albumNew = async(albumData) => {
//     const { images, albumId } = albumData;
//     console.log(title)
//     axios.post(`/album/update/${albumId}`, { images })
//         .then((res) => {
//             if (res && res.data) {
//                 console.log(res.data);
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };


// export const getAllImages = async(userId) => {
//     fetch(`http://localhost:8080/picture/getAll/${userId}`)
//         .then((res) => res.json())
//         .then((res) => store.dispatch(AddImages(res)))
//         // store.dispatch(AdddImages(res.data));
//         // axios.get(`/picture/getAll/${userId}`)
//         //     .then((res) => {
//         //         if (res && res.data) {
//         //             console.log(res.data)
//         //                 // store.dispatch(AdddImages(res.data));
//         //         }
//         //     })
//         //     .catch((err) => {
//         //         console.log(err);
//         //     });
// }