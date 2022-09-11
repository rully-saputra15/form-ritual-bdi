import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL)
const http = axios.create({ baseURL });

http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      const { code } = error.response.data;
      if (code === 500) {
        console.log(error.response.data.messages[0]);
      }
    }
    return Promise.reject(error);
  }
);

export default http;
