import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:8001/v1/",
});

export const fetchData = async (endpoint) => {
  const { data } = await api.get(`${endpoint}`);
  return data;
};