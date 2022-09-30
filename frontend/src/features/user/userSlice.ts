import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';
import { toast } from 'react-toastify';

// Get user from localStorage for authorisation
let user;
let userData = localStorage.getItem('user');
if (typeof userData === 'string') {
  user = JSON.parse(userData);
}

interface UserState {
  user: {
    _id: string;
    name: string;
    imageUrl: string;
    email: string;
    isAdmin: boolean;
    token: string;
  } | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: user ? user : null,
  isLoading: false,
};

// Register new user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData: object, thunkAPI) => {
    try {
      return await userService.registerUser(userData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData: object, thunkAPI) => {
    try {
      return await userService.loginUser(userData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  await userService.logoutUser();
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        toast.success('User registed successfully');
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to register user');
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to login');
        state.user = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
