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