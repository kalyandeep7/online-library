// store.js - Configures the Redux store
import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice'

// Create the Redux store with the books reducer
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})