import { combineReducers, configureStore } from '@reduxjs/toolkit'
import products from './slices/productSlice'
import cart from './slices/cartSlice'


const rootReducer = combineReducers({
  products,
  cart
})

const store = configureStore({
  reducer: rootReducer
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
