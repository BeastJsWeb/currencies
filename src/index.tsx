import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import { App } from './App';
import { store } from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
