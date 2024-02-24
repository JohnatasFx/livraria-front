import axios from "axios";

const VITE_BASE_URL_API = import.meta.env.VITE_BASE_URL_API || "http://localhost:3000"

export const api = axios.create({baseURL: VITE_BASE_URL_API});