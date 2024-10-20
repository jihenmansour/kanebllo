import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInterface } from "../../types";

const API_URL = "http://localhost:5000/api/auth";

export const signup = createAsyncThunk<
  userInterface,
  { name: string; email: string; password: string },
  { rejectValue: string } 
>("auth/signup", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_URL}/signup`,
      { name, email, password },
      config
    );

    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const verifyEmail = createAsyncThunk<
userInterface,
{ code: string },
{ rejectValue: string } 
>("auth/verify-email", async ({ code }, { rejectWithValue }) => {
try {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    `${API_URL}/verify-email`,
    { code},
    config
  );

  return response.data.user;
} catch (error) {
  return rejectWithValue(error.response.data.message);
}
});


export const login = createAsyncThunk<
userInterface,
{email: string, password: string},
{rejectValue: string}
>("auth/login", async ({email, password}, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const response = await axios.post(
      `${API_URL}/login`,
      { email, password},
      config
    );

    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
})