import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async userData => {
  const { data } = await axios.post(API_URL, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
