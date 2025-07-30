import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})