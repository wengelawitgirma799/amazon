import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://127.0.0.1:5001/e-clone-14423/us-central1/api "
});
export{axiosInstance}