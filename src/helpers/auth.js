import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const setToken = (token) => {
  setCookie("token", token);
};

export const getToken = () => {
  const token = getCookie("token");
  return token;
};

export const logout = () => {
  deleteCookie("token");
};
