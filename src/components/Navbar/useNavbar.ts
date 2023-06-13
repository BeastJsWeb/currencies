import {useState, useEffect} from 'react';
import { apiCurrencies } from '../../services/apiCurrencies';
import { INavbar } from '../../types/component';

export const useNavbar = ({clicked, updated}: INavbar) => {
    const [lastUpdate, setLastUpdate] = useState('None');

    const {data: dataListCurriencies} = apiCurrencies.useAllCurrenciesQuery();

    const [fetchData, {data}] = apiCurrencies.useLazyAllCurrenciesQuery();

    const lastRequestForData = updated ? new Date().toLocaleTimeString() : '';

    useEffect(() => {
        if (dataListCurriencies) {
            setLastUpdate(dataListCurriencies.date);
        }
    }, [dataListCurriencies]);

    const handleGetRepos = () => {
        clicked(state => state + 1);
        fetchData();
    };

    useEffect(() => {
        if (updated && data) {
            setLastUpdate(data.date);
        }
    }, [data, updated]);

    return {
        lastUpdate,
        lastRequestForData,
        handleGetRepos,
    };
};
