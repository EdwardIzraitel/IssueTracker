import axios from "axios";
import { getToken, setToken, clearToken } from "../../auth";

export const tryLogin = async (loginFormData) => {
  clearToken();
  const response = await axios.post(
    "http://127.0.0.1:8000/api/login",
    loginFormData
  );
  setToken(response.data.access_token);
  // verifyToken();
  return response.data.user;
};

export const verifyToken = async () => {
  const token = getToken();
  if (!token) return false;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    return await axios.get("http://127.0.0.1:8000/api/get/user", { headers });
  } catch (err) {
    return err.response;
  }
};
