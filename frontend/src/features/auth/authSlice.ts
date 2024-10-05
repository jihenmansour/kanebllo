import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./authActions";

const initialState = {
    loading: false,
    user: undefined
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
            state.user = action.payload;
        })
        .addCase(signup.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default authSlice.reducer