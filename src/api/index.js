import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL);
const axiosInstance = axios.create({
  baseURL,
});

function getToken() {
  return localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
}

//make a api call --> interceptor --> backend
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Raju";
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
