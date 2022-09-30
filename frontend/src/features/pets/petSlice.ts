import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import petService from './petService';
import { toast } from 'react-toastify';

interface IPet {
  _id: string;
  name: string;
  age: number;
  type: string;
}

interface PetState {
  pets: IPet[];
  pet: IPet;
  isLoading: boolean;
}

const initialState: PetState = {
  pets: [],
  pet: {} as PetState['pet'],
  isLoading: false,
};

export const getPets = createAsyncThunk(
  'pets/getAll',
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await petService.getPets(token);
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

export const getPet = createAsyncThunk(
  'pets/get',
  async (petId: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await petService.getPet(petId, token);
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

export const createPet = createAsyncThunk(
  'pets/create',
  async (petData: object, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await petService.createPet(petData, token);
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

export const updatePet = createAsyncThunk(
  'pets/update',
  async (
    { petData, petId }: { petData: object; petId: string | undefined },
    thunkAPI: any
  ) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await petService.updatePet(petData, petId, token);
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

export const deletePet = createAsyncThunk(
  'pets/delete',
  async (petId: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await petService.deletePet(petId, token);
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

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload;
      })
      .addCase(getPets.rejected, (state) => {
        state.isLoading = true;
        toast.error('Error, failed to bring the pets');
      })
      .addCase(getPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pet = action.payload;
      })
      .addCase(getPet.rejected, (state) => {
        state.isLoading = true;
        toast.error('Error, failed to bring the pet');
      })
      .addCase(createPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets.push(action.payload);
        toast.success('Your pet successfully created');
      })
      .addCase(createPet.rejected, (state, action: any) => {
        state.isLoading = true;
        toast.error(action.payload);
      })
      .addCase(updatePet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = state.pets.map((pet) =>
          pet._id === action.payload._id ? action.payload : pet
        );
        toast.success('Your pet updated successfully');
      })
      .addCase(updatePet.rejected, (state, action: any) => {
        state.isLoading = true;
        toast.error(action.payload);
      })
      .addCase(deletePet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = state.pets.filter((pet) => pet._id !== action.payload._id);
        toast.success('Your pet successfully deleted');
      })
      .addCase(deletePet.rejected, (state, action: any) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default petSlice.reducer;
