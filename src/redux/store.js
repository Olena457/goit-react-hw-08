import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from '../redux/store';
import { contactsReducer } from '../redux/store';
import { authReducer } from '../redux/redux/store';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
  PERSIST,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
