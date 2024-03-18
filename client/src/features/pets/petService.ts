import axios from 'axios';

const API_URL = '/api/pets/';

const getPets = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const getPet = async (petId: string | undefined, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}${petId}`, config);

  return response.data;
};

const createPet = async (petData: object, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, petData, config);

  return response.data;
};

const updatePet = async (
  petData: object,
  petId: string | undefined,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}${petId}`, petData, config);

  return response.data;
};

const deletePet = async (petId: string | undefined, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${petId}`, config);

  return response.data;
};

const petService = {
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
};

export default petService;
