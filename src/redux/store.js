import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/slice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
  PERSIST,
} from 'redux-persist';
const authPersisConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    contacts: contactsReducer,
    auth: persistReducer(authReducer, authPersisConfig),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
