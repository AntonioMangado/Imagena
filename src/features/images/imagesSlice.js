import { createSlice } from '@reduxjs/toolkit';
import { getImagesThunk, getQueryImagesThunk } from './imagesThunk.js'

export const imagesSlice = createSlice({
    name: "images",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {
        editImageDescription: (state, action) => {
            const { id, description } = action.payload;
            const image = state.data.find(image => image.id === id);
            if (image) {
                image.alt_description = description;
            }
        }
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
        }).addCase(getQueryImagesThunk.pending, (state, action) => {
            state.status = "pending";
        }).addCase(getQueryImagesThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(getQueryImagesThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        })
    }
});

export const { editImageDescription } = imagesSlice.actions;
export const getImagesData = (state) => state.images.data;
export const getImagesStatus = (state) => state.images.status;
export const getImagesError = (state) => state.images.error;