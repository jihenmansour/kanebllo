import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInterface } from "../../types";

const API_URL = "http://localhost:5000/api/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }: userInterface, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(`${API_URL}/signup`, { name, email, password }, config);
      
      return response.data.user;
    } catch (error) {
   
        return rejectWithValue(error.response.data.message);
      
    }
  }
);
