import { configureStore } from '@reduxjs/toolkit'
import { imagesSlice } from '../features/images/imagesSlice.js'
import { favoritesSlice } from '../features/favorites/favoritesSlice.js'

export const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})