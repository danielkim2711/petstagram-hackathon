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

const updateUser = async (
  userData: object,
  userId: string | undefined,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}${userId}`, userData, config);
  localStorage.removeItem('user');

  return response.data;
};

const deleteUser = async (userId: string | undefined, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${userId}`, config);
  localStorage.removeItem('user');

  return response.data;
};

const logoutUser = () => localStorage.removeItem('user');

const userService = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
};

export default userService;
