import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ServerResponseLatestCurrencies } from '../types/rates';

const BASE_URL = 'https://api.exchangerate.host';

export const apiCurrencies = createApi({
    reducerPath: 'apiCurrencies/api',
    tagTypes: ['Currencies'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: build => ({
        getCurrency: build.query<ServerResponseLatestCurrencies, {base: string, symbols: string}>({
            query: (args) => {
                const {base, symbols} = args;
                return {
                    url: '/latest',
                    params: {
                        base,
                        symbols,
                        places: 3,
                    },
                };
            },
        }),
        allCurrencies: build.query<ServerResponseLatestCurrencies, void>({
            query: () => ({
                url: '/latest',
                params: {
                    places: 3,
                },
            }),
        }),
    }),
});
