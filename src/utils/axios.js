import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lws-assignment-6-video-gallery.herokuapp.com",
});

export default axiosInstance;
