import React, {FC, useState} from 'react';
import { Layout } from './components/Layout';
import { ExchangeTable } from './components/ExchangeTable';
import { Convert } from './components/Convert';
//const Layout = React.lazy(() => import('./components/Layout').then((module) => ({default: module.Layout})));
//const Convert = React.lazy(() => import('./components/Convert').then((module) => ({default: module.Convert})));
//const ExchangeTable = React.lazy(() => import('./components/ExchangeTable').then((module) => ({default: module.ExchangeTable})));

export const App: FC = () => {
    const [isClickedUpdate, setIsClickedUpdate] = useState(0);
    const [isUpdated, setIsUpdated] = useState(false);
    return (
        <Layout
            clicked={setIsClickedUpdate}
            updated={isUpdated}
        >
            <Convert
                isClickedUpdate={isClickedUpdate}
                fetchSuccess={setIsUpdated}
            />
            <ExchangeTable
                isClickedUpdate={isClickedUpdate}
                fetchSuccess={setIsUpdated}
            />
        </Layout>
    );
};
