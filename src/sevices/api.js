import axios from "axios";

axios.defaults.baseURL = "https://events-server-rzfa.onrender.com";
const per_page = 12;

export const fetchEvents = async (page) => {
  const { data } = await axios.get(
    `/api/events?page=${page}&limit=${per_page}`
  );
  return data;
};

export const registerUser = async (id, credentials) => {
  const { data } = await axios.post(`/api/users/${id}`, credentials);
  return data;
};

export const getUsers = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
};
