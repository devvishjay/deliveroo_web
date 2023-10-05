import axios from "axios";

const baseUrl = process.env.REACT_APP_BE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// const token = "token_here";
// axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default axiosInstance;
