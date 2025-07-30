import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./services/auth.service";

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);

      return response;
    } catch (error) {
      const message = error.response?.data?.errorMessage || 'Login failed';
      return rejectWithValue(message);
    }
  }
)