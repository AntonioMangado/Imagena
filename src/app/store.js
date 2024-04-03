import { configureStore } from '@reduxjs/toolkit'
import { imagesSlice } from '../features/images/imagesSlice.js'

export const store = configureStore({
    reducer: {
        images: imagesSlice.reducer
    }
})