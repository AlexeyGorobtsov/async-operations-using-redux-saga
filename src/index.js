import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { App } from './containers/App';
import './styles/styles.css'
import { rootReducer } from './redusers';
import { rootSaga } from './sagas';
import PanelMixed from './containers/Panel';
import PanelMixed2 from './containers/Panel2';
import PanelMixed3 from './containers/Panel3';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App panel={<PanelMixed/>}
             panel2={<PanelMixed2/>}
             panel3={<PanelMixed3/>}
        />
    </Provider>,
    document.getElementById('root')
);