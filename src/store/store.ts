import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import type { WebStorage } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import Message from '../slices/messageSlice';
import Auth from '../slices/authSlice';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

interface PersitConfig {
  key: string;
  storage: WebStorage;
}

export const persistConfig: PersitConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  message: Message.reducer,
  user: Auth.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddlewares = (getDefaultMiddlewares: any) => {
  if (process.env.NODE_ENV !== 'development') return [...getDefaultMiddlewares(), createStateSyncMiddleware()];
  return [...getDefaultMiddlewares(), createStateSyncMiddleware(), logger];
};


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getMiddlewares,
});


initMessageListener(store);