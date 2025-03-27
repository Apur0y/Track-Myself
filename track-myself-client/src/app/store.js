import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from "../feature/calculate/calculateSlice"

export default configureStore({
  reducer: {
    calculate:calculateReducer,
  }
})