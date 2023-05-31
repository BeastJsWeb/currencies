import React, {FC, useState, Suspense, lazy} from 'react';
import { Layout } from './components/Layout';

const Convert = lazy(() => (
    import('./components/Convert').then(module => (
        {default: module.Convert}
    ))
));
const ExchangeTable = lazy(() => (
    import('./components/ExchangeTable').then(module => (
        {default: module.ExchangeTable}
    ))
));

export const App: FC = () => {
    const [isClickedUpdate, setIsClickedUpdate] = useState(0);
    const [isUpdated, setIsUpdated] = useState(false);

    return (
        <Layout
            clicked={setIsClickedUpdate}
            updated={isUpdated}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <Convert
                    isClickedUpdate={isClickedUpdate}
                    fetchSuccess={setIsUpdated}
                />
                <ExchangeTable
                    isClickedUpdate={isClickedUpdate}
                    fetchSuccess={setIsUpdated}
                />
            </Suspense>
        </Layout>
    );
};
