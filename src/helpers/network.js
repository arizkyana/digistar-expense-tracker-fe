import axios from "axios";

const callApi = axios.create({
  baseURL: "https://digistar-demo-be.vercel.app/api",
});

callApi.interceptors.request.use(
  (req) => {
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
