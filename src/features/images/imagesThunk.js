import { createAsyncThunk } from "@reduxjs/toolkit";
const GET_RANDOM_IMG_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${import.meta.env.VITE_ACCESS_KEY}`;

export const getImagesThunk = createAsyncThunk("images/getImages", async () => {
    const request = await fetch(GET_RANDOM_IMG_URL);
    const json = await request.json();
    return json;
})