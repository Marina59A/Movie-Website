import axios from "axios";

const instance= axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "53f10f41ad005c343b05067681a6b4d4",
    },
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;