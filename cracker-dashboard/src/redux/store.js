import { configureStore } from '@reduxjs/toolkit'
import crackerApiReducer from "../redux/features/crackerApiSlice"
import ordrsReducer from "../redux/features/ordrsSlice"
export const store = configureStore({
  reducer: {
    cracker:crackerApiReducer,
    orders:ordrsReducer
  },
})