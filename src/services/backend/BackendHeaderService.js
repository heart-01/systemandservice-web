import axios from "axios";

const BackendHeaderService = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
  },
});

BackendHeaderService.interceptors.request.use((config) => {
  let token = "";

  try {
    token = localStorage.getItem("token");
  } catch (error) {
    console.log(error);
  }

  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default BackendHeaderService;
