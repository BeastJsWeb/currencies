import {useEffect, useState, ChangeEventHandler} from 'react';
import { apiCurrencies } from '../../services/apiCurrencies';
import { useAmount } from '../../hooks/useAmount';
import { IUpdateDataCurrencies } from '../../types/component';

export const useConvert = ({
    isClickedUpdate,
    fetchSuccess,
}: IUpdateDataCurrencies) => {
    const [currencyAmount, setCurrencyAmount] = useState(1);

    const [currencyAmountChanged, setCurrencyAmountChanged] = useState(true);

    const {data: dataListCurreencies} = apiCurrencies.useAllCurrenciesQuery();

    const [currencyForConvert, setCurrencyForConvert] = useState({currency1: '', currency2: ''});

    const [fetchData, {data, isSuccess}] = apiCurrencies.useLazyGetCurrencyQuery();

    const currenciesList = Object.keys(dataListCurreencies?.rates || []);

    const handleChangeCurrencyForConvert1 = (e: { target: { value: string; }; }) => {
        setCurrencyForConvert({...currencyForConvert, currency1: e.target.value});
        localStorage.setItem('currency1', e.target.value);
    };

    const handleChangeCurrencyForConvert2 = (e: { target: { value: string; }; }) => {
        setCurrencyForConvert({...currencyForConvert, currency2: e.target.value});
        localStorage.setItem('currency2', e.target.value);
    };

    useEffect(() => {
        if (dataListCurreencies) {
            const allCurrencies = Object.keys(dataListCurreencies.rates);
            const currency1 = localStorage.getItem('currency1') || allCurrencies[0];
            const currency2 = localStorage.getItem('currency2') || allCurrencies[1];
            setCurrencyForConvert({currency1, currency2});
        }
    }, [dataListCurreencies]);

    useEffect(() => {
        if (!currencyForConvert.currency1 || !currencyForConvert.currency2) return;
        fetchData({base: currencyForConvert.currency1, symbols: currencyForConvert.currency2});
    }, [fetchData, currencyForConvert, isClickedUpdate]);

    const handleToAmountChange: ChangeEventHandler<HTMLInputElement> = e => {
        setCurrencyAmount(+e.target.value);
        setCurrencyAmountChanged(true);
    };

    const handleFromAmountChange: ChangeEventHandler<HTMLInputElement> = e => {
        setCurrencyAmount(+e.target.value);
        setCurrencyAmountChanged(false);
    };

    useEffect(() => fetchSuccess(isSuccess), [isSuccess, fetchSuccess]);

    const amountRate = data && +Object.values(data.rates);

    const {toAmount, fromAmount} = useAmount(currencyAmountChanged, currencyAmount, amountRate);

    return {
        currenciesList,
        toAmount,
        fromAmount,
        handleToAmountChange,
        handleFromAmountChange,
        currencyForConvert,
        handleChangeCurrencyForConvert1,
        handleChangeCurrencyForConvert2,
    };
};
