import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyEmail } from "./authActions";
import { userInterface } from "../../types";

const initialState : {
    loading: boolean,
    user: userInterface | null,
    signupSuccess: boolean,
    verificationSuccess: boolean,
    loginSuccess: boolean,
    error: string
}={  loading: false,
    user: null,
    signupSuccess: false,
    verificationSuccess: false,
    loginSuccess: false,
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers : (builder) =>  {
        builder
        .addCase(signup.pending, (state) => {
            state.loading = true;
        })
        .addCase(signup.fulfilled, (state) => {
            state.loading = false;
            state.signupSuccess = true;
        })
        .addCase(signup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?? "";
        })
        .addCase(verifyEmail.pending, (state) => {
            state.loading = true;
        })
        .addCase(verifyEmail.fulfilled, (state) => {
            state.loading = false;
           state.verificationSuccess = true;
        })
        .addCase(verifyEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?? "";
        })
        .addCase(login.pending, (state) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.loginSuccess = true;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload??"";
        })
    }
})

export default authSlice.reducer