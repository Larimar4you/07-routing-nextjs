import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const apiClient = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});