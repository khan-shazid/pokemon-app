import axios from "axios";
import { BASE_URL } from "../constants";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const routes = {
  pokemon: `${BASE_URL}/pokemon/`, // get
};

// Axios request interceptor
axios.interceptors.request.use((config) => {
  return config;
});

// Axios response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const encodeQueryData = (data) => {
  let ret = [],
    temp;
  for (let i in data) {
    temp = data[i];
    if (temp !== "" && temp !== null) {
      ret.push(encodeURIComponent(i) + "=" + encodeURIComponent(temp));
    }
  }
  return ret.length ? "?" + ret.join("&") : "";
};

const Http = {
  GET: (key, params = '', id = '') => {
    params = typeof params === "object" ? encodeQueryData(params) : params;
    return axios.get(routes[key] + id + params, headers);
  },
};

export default Http;
