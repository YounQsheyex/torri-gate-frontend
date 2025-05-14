import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-gate-younq.onrender.com/api",
});
