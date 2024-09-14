import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import userSlice from '@/utils/store/slices/userSlice';
import requestBodySlice from '@/utils/store/slices/requestBodySlice';

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: number) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['authState'],
};

const requestBodyPersistConfig = {
  key: 'requestBody',
  storage,
  whitelist: ['requestBodyState'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, userSlice);
const persistedRequestBodyReducer = persistReducer(
  requestBodyPersistConfig,
  requestBodySlice,
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  requestBody: persistedRequestBodyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
