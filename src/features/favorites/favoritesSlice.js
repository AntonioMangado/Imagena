import { createSlice } from '@reduxjs/toolkit';


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
        removeFavorite: (state, action) => {
            state.data = state.data.filter(favorite => favorite.id !== action.payload.id)
        }
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const getFavoritesData = state => state.favorites.data;
export const getFavoritesStatus = state => state.favorites.status;
export const getFavoritesError = state => state.favorites.error;