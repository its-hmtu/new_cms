import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./services/auth.service";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);

      const meta = {
        showSuccessToast: true,
        successMessage: "Login successful",
        skipErrorToast: false,
        
        
      };

      return fulfillWithValue(response, meta);
    } catch (error) {
      const message = error.response?.data?.errorMessage || "Login failed";
      return rejectWithValue(message);
    }
  }
);
