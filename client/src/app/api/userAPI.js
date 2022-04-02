import axios from "axios";
import { getToken, setToken } from "../../auth";

export const tryLogin = async (loginFormData) => {
  return await axios
    .post("http://127.0.0.1:8000/api/login", loginFormData)
    .then(async (res) => {
      setToken(res.data.access_token);
      return verifyToken();
    });
};

const verifyToken = async () => {
  const headers = {
    Authorization: `Bearer ${getToken()}`,
  };
  return await axios
    .get("http://127.0.0.1:8000/api/get/user", { headers })
    .then((res) => {
      return res.data;
    });
};
