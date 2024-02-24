import axios from "axios";

const BASE_URL_API = process.env.BASE_URL_API || "http://localhost:3000"

export const api = axios.create({baseURL: BASE_URL_API});