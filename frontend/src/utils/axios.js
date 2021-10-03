import axios from "axios";

export default axios.create({
    baseURL: "https://gallery-be.herokuapp.com/",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
});