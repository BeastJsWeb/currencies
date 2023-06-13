import React, {FC} from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useConvert } from './useCurrencyConverter';
import { IUpdateDataCurrencies } from '../../types/component';

export const CurrencyConverter: FC<IUpdateDataCurrencies> = ({
    isClickedUpdate,
    fetchSuccess,
}) => {
    const {
        currenciesList,
        toAmount,
        fromAmount,
        handleToAmountChange,
        handleFromAmountChange,
        currencyForConvert,
        handleChangeCurrencyForConvert1,
        handleChangeCurrencyForConvert2,
    } = useConvert({isClickedUpdate, fetchSuccess});

    const listCurrencies = currenciesList.map(option => (
        <option key={option} value={option}>
            {option}
        </option>
    ));

    return (
        <section className='convert'>
            <h3>
                Convert
            </h3>
            <form className='convert__form'>
                <DebounceInput
                    className='convert__input'
                    value={fromAmount}
                    onChange={handleToAmountChange}
                    inputMode='decimal'
                    type='number'
                    minLength={1}
                    debounceTimeout={800}
                    aria-label="1st currency for convert"
                />
                <select
                    className='convert__select'
                    value={currencyForConvert.currency1}
                    onChange={handleChangeCurrencyForConvert1}
                >
                    {listCurrencies}
                </select>
                <DebounceInput
                    className='convert__input'
                    value={toAmount}
                    onChange={handleFromAmountChange}
                    inputMode='decimal'
                    type='number'
                    minLength={1}
                    debounceTimeout={800}
                    aria-label="2d currency for convert"
                />
                <select
                    className='convert__select'
                    value={currencyForConvert.currency2}
                    onChange={handleChangeCurrencyForConvert2}
                >
                    {listCurrencies}
                </select>
            </form>
        </section>
    );
};
