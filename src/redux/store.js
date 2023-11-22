import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './reducers/addressSlice'; // Create this file to define your slice
import balanceReducer from './reducers/balanceSlice'; // Create this file to define your slice


const store = configureStore({
  reducer: {
    address: addressReducer,
    balance:balanceReducer
  },
});

export default store;