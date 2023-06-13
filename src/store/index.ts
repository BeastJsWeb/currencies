import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiCurrencies } from '../services/apiCurrencies';

export const store = configureStore({
    reducer: {
        [apiCurrencies.reducerPath]: apiCurrencies.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(apiCurrencies.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
