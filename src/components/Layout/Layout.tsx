import React, {FC, SetStateAction, Dispatch} from 'react';
import { Navbar } from '../Navbar';

interface Props {
  children: JSX.Element | JSX.Element[],
  clicked: Dispatch<SetStateAction<number>>,
  updated: boolean,
}

export const Layout: FC<Props> = ({children, clicked, updated}) => (
    <div className='layout'>
        <Navbar clicked={clicked} updated={updated} />
        <main>
            {children}
        </main>
    </div>
);
