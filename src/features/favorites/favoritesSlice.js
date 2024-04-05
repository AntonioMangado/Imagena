import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteThunk } from './favoritesThunk';


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        editFavoriteDescription: (state, action) => {
            const { id, description } = action.payload;
            const image = state.data.find(image => image.id === id);
            if (image) {
                image.description = description;
            }
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(favorite => favorite.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(getFavoriteThunk.pending, (state, action) => {
        //     state.status = 'pending'
        // }).addCase(getFavoriteThunk.rejected, (state, action) => {
        //     state.status = 'rejected'
        //     state.error = action.error.message
        // }).addCase(getFavoriteThunk.fulfilled, (state, action) => {
        //     state.status = 'fulfilled'
        //     state.dataToRender.push(action.payload)
        // })
    }
})

export const { addFavorite, editFavoriteDescription, removeFavorite } = favoritesSlice.actions;
export const getFavoritesData = state => state.favorites.data;
export const getFavoritesDataToRender = state => state.favorites.dataToRender;
export const getFavoritesStatus = state => state.favorites.status;
export const getFavoritesError = state => state.favorites.error;