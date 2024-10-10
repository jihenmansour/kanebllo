import { createSlice } from "@reduxjs/toolkit";
import { signup, verifyEmail } from "./authActions";

const initialState = {
    loading: false,
    user: {},
    signupSuccess: false,
    verificationSuccess: false,
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
        .addCase(signup.fulfilled, (state, action) => {
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
        .addCase(verifyEmail.fulfilled, (state, action) => {
            state.loading = false;
           state.verificationSuccess = true;
        })
        .addCase(verifyEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?? "";
        })
    }
})

export default authSlice.reducer