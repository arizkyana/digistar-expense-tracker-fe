import axios from "axios";
import { getToken } from "@/helpers/auth";

const callApi = axios.create({
  baseURL: "https://digistar-demo-be.vercel.app/api",
});

callApi.interceptors.request.use(
  (req) => {
    const token = getToken();

    if (token) {
      Object.assign(req.headers, {
        Authorization: `Bearer ${token}`,
      });
    }

    return req;
  },
  (err) => {
    return err;
  }
);

callApi.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return err;
  }
);

export default callApi;
