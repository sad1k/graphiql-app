import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import userSlice from '@/utils/store/slices/userSlice';

const authPersistConfig = {
  key: 'auth',
  storage: createWebStorage('local'),
  whitelist: ['authState'],
};

const persistedReducer = persistReducer(authPersistConfig, userSlice);

export const rootReducer = combineReducers({
  auth: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
