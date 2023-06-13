import {useState, useEffect} from 'react';
import { apiCurrencies } from '../../services/apiCurrencies';
import { tableBody, rateTo } from '../../assets/data';
import { ServerResponseLatestCurrencies } from '../../types/rates';
import { IUpdateDataCurrencies } from '../../types/component';

export const useExchangeTable = ({
    isClickedUpdate,
    fetchSuccess,
}: IUpdateDataCurrencies) => {
    const currenciesLimit = 5;

    const [isListOpened, setIsListOpened] = useState(false);
    const [staticLength, setStaticLength] = useState(currenciesLimit);

    const [fetchData, {data, isLoading, isSuccess, isError}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData1, {data: data1, isLoading: isLoading1}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData2, {data: data2, isLoading: isLoading2}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData3, {data: data3, isLoading: isLoading3}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData4, {data: data4, isLoading: isLoading4}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData5, {data: data5, isLoading: isLoading5}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData6, {data: data6, isLoading: isLoading6}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData7, {data: data7, isLoading: isLoading7}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData8, {data: data8, isLoading: isLoading8}] = apiCurrencies.useLazyGetCurrencyQuery();
    const [fetchData9, {data: data9, isLoading: isLoading9}] = apiCurrencies.useLazyGetCurrencyQuery();

    const handleShowAll = () => {
        setStaticLength(tableBody?.length);
        setIsListOpened(true);
    };

    const handleHideFullList = () => setStaticLength(currenciesLimit);

    useEffect(() => {
        async function getCuccenciesData() {
            if (!isListOpened || isClickedUpdate) {
                await Promise.allSettled([
                    fetchData({base: tableBody[0].code, symbols: rateTo}),
                    fetchData1({base: tableBody[1].code, symbols: rateTo}),
                    fetchData2({base: tableBody[2].code, symbols: rateTo}),
                    fetchData3({base: tableBody[3].code, symbols: rateTo}),
                    fetchData4({base: tableBody[4].code, symbols: rateTo}),
                ]);
            }

            if (staticLength <= currenciesLimit) return;

            await Promise.allSettled([
                fetchData5({base: tableBody[5].code, symbols: rateTo}),
                fetchData6({base: tableBody[6].code, symbols: rateTo}),
                fetchData7({base: tableBody[7].code, symbols: rateTo}),
                fetchData8({base: tableBody[8].code, symbols: rateTo}),
                fetchData9({base: tableBody[9].code, symbols: rateTo}),
            ]);
        }

        getCuccenciesData();
    }, [
        isListOpened,
        isClickedUpdate,
        staticLength,
        fetchData,
        fetchData1,
        fetchData2,
        fetchData3,
        fetchData4,
        fetchData5,
        fetchData6,
        fetchData7,
        fetchData8,
        fetchData9,
    ]);

    useEffect(() => fetchSuccess(isSuccess), [isSuccess, fetchSuccess]);

    const newDataCurrencies: [ServerResponseLatestCurrencies | undefined, boolean, boolean?][] = [
        [data, isLoading, isError],
        [data1, isLoading1],
        [data2, isLoading2],
        [data3, isLoading3],
        [data4, isLoading4],
        [data5, isLoading5],
        [data6, isLoading6],
        [data7, isLoading7],
        [data8, isLoading8],
        [data9, isLoading9],
    ];

    return {
        staticLength,
        newDataCurrencies,
        handleShowAll,
        handleHideFullList,
    };
};
