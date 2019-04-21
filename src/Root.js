// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import store from './store';

const Root = () => (
    <Provider store={store} basename={process.env.PUBLIC_URL}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

export default Root;