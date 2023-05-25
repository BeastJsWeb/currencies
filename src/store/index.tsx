import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiLayer } from '../services/apiLayer';

export const store = configureStore({
    reducer: {
        [apiLayer.reducerPath]: apiLayer.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(apiLayer.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
