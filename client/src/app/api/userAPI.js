import axios from "axios";
import { getToken, setToken, clearToken } from "../../auth";

export const tryLogin = async (loginFormData) => {
  clearToken();
  return await axios
    .post("http://127.0.0.1:8000/api/login", loginFormData)
    .then(async (res) => {
      setToken(res.data.access_token);
      return res.data.user;
    });
};

export const verifyToken = async () => {
  const token = getToken();
  if (!token) return false;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return await axios
    .get("http://127.0.0.1:8000/api/get/user", { headers })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error.response.data.detail);
    });
};
