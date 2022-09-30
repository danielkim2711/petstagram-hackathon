import axios from 'axios';

const API_URL = '/api/users/';

const registerUser = async (userData: object) => {
  const response = await axios.post(`${API_URL}`, userData);

  return response.data;
};

const loginUser = async (userData: object) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logoutUser = () => localStorage.removeItem('user');

const userService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default userService;
