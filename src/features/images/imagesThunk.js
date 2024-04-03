import { createAsyncThunk } from "@reduxjs/toolkit";
const GET_RANDOM_IMG_URL = `https://api.unsplash.com/photos/random?count=10&client_id=${import.meta.env.VITE_ACCESS_KEY}`;

export const getImagesThunk = createAsyncThunk("images/getImages", async () => {
    const request = await fetch(GET_RANDOM_IMG_URL);
    const json = await request.json();
    return json;
})

export const getQueryImagesThunk = createAsyncThunk("images/getQueryImages", async (query) => {
    const request = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const json = await request.json();
    return json.results;
})