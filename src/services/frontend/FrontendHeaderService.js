import axios from "axios";

const FrontendHeaderService = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
  },
});

export default FrontendHeaderService;
