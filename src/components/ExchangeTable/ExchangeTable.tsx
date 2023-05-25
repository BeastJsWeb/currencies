import React, {FC} from 'react';
import { Button, ButtonVariant } from '../button';
import { tableHeaders, tableBody } from '../../assets/data';
import { useExchangeTable } from './useExchangeTable';
import { IUpdateDataCurrencies } from '../../models/component';

export const ExchangeTable: FC<IUpdateDataCurrencies> = ({
    isClickedUpdate,
    fetchSuccess,
}) => {
    const {
        staticLength,
        newDataCurrencies,
        handleShowAll,
        handleHideFullList,
    } = useExchangeTable({isClickedUpdate, fetchSuccess});

    return (
        <section className='exchange-table'>
            <h3>
                Live Exchange Rates
            </h3>
            <table className='exchange-table__table'>
                <thead>
                    <tr className='exchange-table__header'>
                        {tableHeaders?.map(header => (
                            <th key={header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableBody?.map((currency, i) => (
                        i < staticLength
                        && newDataCurrencies?.map(e => (
                            e[0]
                                ? e[0].base === currency.code
                                && (
                                    <tr
                                        key={currency.code}
                                        className='exchange-table__body'
                                    >
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            {currency.code}
                                        </td>
                                        <td>
                                            {currency.name}
                                        </td>
                                        <td>
                                            {e[0].rates?.RUB ? e[0].rates.RUB : '-'}
                                        </td>
                                        <td>
                                            {e[0].rates?.USD ? e[0].rates.USD : '-'}
                                        </td>
                                        <td>
                                            {e[0].rates?.EUR ? e[0].rates.EUR : '-'}
                                        </td>
                                        <td>
                                            {e[0].rates?.CNY ? e[0].rates.CNY : '-'}
                                        </td>
                                    </tr>
                                )
                                : e[2] && (
                                    <tr
                                        key={i}
                                        className='exchange-table__body'
                                    >
                                        <td>Fetch error</td>
                                    </tr>
                                )
                        ))))}
                    {newDataCurrencies[0][1] && (
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {tableBody?.length > staticLength
            && (
                <Button
                    onClick={handleShowAll}
                    variant={ButtonVariant.list}
                >
                    Show all
                </Button>
            )}
            {tableBody?.length === staticLength
            && (
                <Button
                    onClick={handleHideFullList}
                    variant={ButtonVariant.list}
                >
                    Hide
                </Button>
            )}
        </section>
    );
};
