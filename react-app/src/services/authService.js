import http from "./httpService";
import config from "../config.json";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

export function login(user) {
  http
    .post(`${config.apiEndPoint}/auth`, user)
    .then((response) => {
      let jwt = response.data;
      localStorage.setItem("token", jwt);
      window.location = "/";
    })
    .catch((error) => {
      if (error.response) toast.error(error.response.data);
    });
}

export async function register(user, userEndPoint, errorsobj) {
  try {
    const response = await http.post(userEndPoint, user);
    localStorage.setItem("token", response.headers["x-auth-token"]);
    window.location = "/";
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      const errors = { ...errorsobj };
      errors.email = ex.response.data;
      return errors;
    }
  }
}

export function logout() {
  localStorage.removeItem("token");
  window.location = "/";
}

export function CurrentUser() {
  const jwt = localStorage.getItem("token");
  return jwtDecode(jwt);
}
