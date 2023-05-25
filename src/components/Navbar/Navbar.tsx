import React, {FC, useState, Dispatch, SetStateAction, useEffect} from 'react';
import { Button, ButtonVariant } from '../button';
import { apiLayer } from '../../services/apiLayer';
// className='navbar__logo' - там должен быть роутер компонент <Link to='/'></>

interface props {
    clicked: Dispatch<SetStateAction<number>>,
    updated: boolean,
}

export const Navbar: FC<props> = ({clicked, updated}) => {
    const [lastUpdate, setLastUpdate] = useState('None');
    const {data: dataListCurriencies} = apiLayer.useAllCurrenciesQuery();
    const [fetchData, {data}] = apiLayer.useLazyAllCurrenciesQuery();
    const lastRequestForData = new Date().toLocaleTimeString();

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

    return (
        <header className='navbar'>
            <div className='navbar__content'>
                <div className='navbar__logo'>
                    Currencies
                </div>
                <div className='navbar__update'>
                    <div>
                        Last Data Update:&nbsp;
                        {lastUpdate}
                        {updated && (
                            <div>
                                Last Request:&nbsp;
                                {lastRequestForData}
                            </div>
                        )}
                    </div>
                    <Button
                        variant={ButtonVariant.navbar}
                        onClick={handleGetRepos}
                    >
                        Update
                    </Button>
                </div>
            </div>
        </header>
    );
};
