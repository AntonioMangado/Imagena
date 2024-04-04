import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavoriteThunk = createAsyncThunk("favorites/getFavorites", async (id) => {
    const request = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    const json = await request.json();
    return json;
})