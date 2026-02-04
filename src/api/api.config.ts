import axios from "axios";

export const apiLogs = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const externalApi = axios.create({
    baseURL: "http://localhost:8080/external",
  headers: {
    "Content-Type": "application/json",
  },
});



