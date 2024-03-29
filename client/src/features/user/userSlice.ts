import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';
import { toast } from 'react-toastify';

// Get user from localStorage for authorisation
const userData = localStorage.getItem('user');
const user = typeof userData === 'string' ? JSON.parse(userData) : undefined;

interface User {
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

const initialState: User = {
  user: user ?? null,
  isLoading: false,
};

export const registerUser = createAsyncThunk('user/register', async (userData: object, thunkAPI) => {
  try {
    return await userService.registerUser(userData);
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('user/login', async (userData: object, thunkAPI) => {
  try {
    return await userService.loginUser(userData);
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ userData, userId }: { userData: object; userId: string | undefined }, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await userService.updateUser(userData, userId, token);
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (userId: string | undefined, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await userService.deleteUser(userId, token);
    } catch (error) {
      if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
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
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('User registed successfully');
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        toast.error('Error, failed to register user');
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
        state.user = null;
        toast.error('Error, failed to login');
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        toast.success('User updated successfully');
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to update user');
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        toast.success('User deleted successfully');
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Error, failed to delete user');
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
