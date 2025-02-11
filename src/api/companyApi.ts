import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchWebsites(search: string) {
  if (!search) {
    return Promise.resolve([]);
  }
  return api.get(`/api/websites?name=${search}`)
    .then((res) => res.data.data);
}
