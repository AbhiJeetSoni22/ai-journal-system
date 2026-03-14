import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log('backend url is ',backendUrl)
const API = axios.create({
  baseURL: backendUrl
});

export const createJournal = (data) => API.post("/api/journal", data);

export const getEntries = (userId) =>
  API.get(`/api/journal/${userId}`);

export const getInsights = (userId) =>
  API.get(`/api/journal/insights/${userId}`);