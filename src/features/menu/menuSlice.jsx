import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5500/api/menus';

const initialState = {
  meals: [],
  isLoading: false,
  isSuccess: false,
  message: {},
};

export const getMenus = createAsyncThunk(
  'menus/getMenus',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (error) {
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

const menuSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {},
  extraReducers: {
    [getMenus.pending]: (state) => {
      state.isLoading = 'true';
    },
    [getMenus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.meals = action.payload;
    },
    [getMenus.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export default menuSlice.reducer;
