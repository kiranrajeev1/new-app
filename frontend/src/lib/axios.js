import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://54.221.144.159:5001/api" : "/api",
  withCredentials: true,
});

