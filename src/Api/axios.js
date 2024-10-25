import axios from "axios";
const axiosInstance = axios.create({
   // baseURL: "https://127.0.0.1:5001/e-clone-14423/us-central1/api "
  // baseURL: "http://localhost:5000/"
  baseURL:"https://amazon-backend-be27.onrender.com"
});
export{axiosInstance}