import { createSlice } from '@reduxjs/toolkit';
import { getImagesThunk } from './imagesThunk.js'

export const imagesSlice = createSlice({
    name: "images",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getImagesThunk.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getImagesThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(getImagesThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        })
    }
});

export const getImagesData = (state) => state.images.data;
export const getImagesStatus = (state) => state.images.status;
export const getImagesError = (state) => state.images.error;