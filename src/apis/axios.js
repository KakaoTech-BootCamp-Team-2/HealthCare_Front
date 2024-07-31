import axios from "axios";

export const instance = axios.create({
  baseURL: "3.35.13.21",
  headers: {
    "Content-Type": "application/json",
  },
});
