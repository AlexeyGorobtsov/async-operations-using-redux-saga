import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './containers/App';
import './styles/styles.css'
import {rootReducer } from './redusers';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);