import axios from "axios";


const apiClient = axios.create({
  baseURL: 'https://dev-prisvio-api.prismtech.vn/api',
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;