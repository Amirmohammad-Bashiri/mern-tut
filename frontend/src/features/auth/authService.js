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

// Login user
const login = async userData => {
  const { data } = await axios.post(`${API_URL}/login`, userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
