import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postService from './postService';
import { toast } from 'react-toastify';

interface IPost {
  _id: string;
  user: string;
  title: string;
  imageUrl: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostState {
  posts: IPost[];
  post: IPost;
  isLoading: boolean;
}

const initialState: PostState = {
  posts: [],
  post: {} as PostState['post'],
  isLoading: false,
};

export const getPosts = createAsyncThunk('posts/getAll', async (_, thunkAPI) => {
  try {
    return await postService.getPosts();
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPost = createAsyncThunk('posts/get', async (postId: string, thunkAPI) => {
  try {
    return await postService.getPost(postId);
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const createPost = createAsyncThunk('posts/create', async (postData: object, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().user.user.token;
    return await postService.createPost(postData, token);
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const updatePost = createAsyncThunk(
  'posts/update',
  async ({ postData, postId }: { postData: object; postId: string | undefined }, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await postService.updatePost(postData, postId, token);
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk('posts/delete', async (postId: string, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().user.user.token;
    return await postService.deletePost(postId, token);
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to load the posts');
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to load the post');
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts.unshift(action.payload);
        toast.success('Post successfully created');
      })
      .addCase(createPost.rejected, (state, action: any) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        toast.success('Post updated successfully');
      })
      .addCase(updatePost.rejected, (state, action: any) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post._id !== action.payload._id);
        toast.success('Post deleted successfully');
      })
      .addCase(deletePost.rejected, (state, action: any) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default postSlice.reducer;
