import axios from 'axios';

const API_URL = '/api/posts/';

const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getPost = async (postId: string) => {
  const response = await axios.get(`${API_URL}${postId}`);

  return response.data;
};

const createPost = async (postData: object, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

const updatePost = async (
  postData: object,
  postId: string | undefined,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}${postId}`, postData, config);

  return response.data;
};

const deletePost = async (postId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${postId}`, config);

  return response.data;
};

const postService = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
