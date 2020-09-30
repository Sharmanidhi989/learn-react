import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  console.log("INTerCEPTOR Called");
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Error: ", error);
    toast.error("Unexpected error occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
