// src/utils/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Dummy JSON API
});

export const handleApiError = (error: any) => {
  console.error("API Error:", error.response?.data || error.message);
};
