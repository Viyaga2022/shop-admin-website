import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './slices/commonSlice'
import adminReducer from './slices/adminSlice'

export const store = configureStore({
    reducer: {
        common: commonReducer,
        admin: adminReducer
    }
})