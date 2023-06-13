import React, {FC} from 'react';
import { Button, ButtonVariant } from '../button';
import { INavbar } from '../../types/component';
import { useNavbar } from './useNavbar';

export const Navbar: FC<INavbar> = ({clicked, updated}) => {
    const {
        lastUpdate,
        lastRequestForData,
        handleGetRepos,
    } = useNavbar({clicked, updated});

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
                        <br />
                        Last Request:&nbsp;
                        {lastRequestForData}
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
