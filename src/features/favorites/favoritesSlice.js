import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteThunk } from './favoritesThunk';


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: JSON.parse(localStorage.getItem('favorites')) || [],
        status: 'idle',
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data = [...state.data, action.payload]
            localStorage.setItem('favorites', JSON.stringify(state.data))
        },
        editFavoriteDescription: (state, action) => {
            const { id, description } = action.payload;
            const image = state.data.find(image => image.id === id);
            if (image) {
                image.description = description;
                localStorage.setItem('favorites', JSON.stringify(state.data))
            }
        },
        filterFavorites: (state, action) => {
            if (action.payload.query === '') {
                state.data = JSON.parse(localStorage.getItem('favorites')) || [];
                return;
            } else {
               const { query } = action.payload;
                const result = state.data.filter(image => ((image.description).toLowerCase()).includes(query.toLowerCase()));
                state.data = result; 
            } 
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(favorite => favorite.id !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(state.data))
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

export const { addFavorite, editFavoriteDescription, filterFavorites, removeFavorite } = favoritesSlice.actions;
export const getFavoritesData = state => state.favorites.data;
export const getFavoritesDataToRender = state => state.favorites.dataToRender;
export const getFavoritesStatus = state => state.favorites.status;
export const getFavoritesError = state => state.favorites.error;