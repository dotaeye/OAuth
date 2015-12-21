import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createHashHistory, useBasename } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import createRoutes from './routes'
import createStore from './stores/createStore'
import ApiClient from './utils/ApiClient';
import makeRouteHooksSafe from './utils/makeRouteHooksSafe';

//const history = useBasename(createHistory)({
//    basename: '/App'
//});

const history=createHashHistory();

const client = new ApiClient();

const store = createStore(client);

const routes = createRoutes(store);

const component = (
    <Router routes={routes} history={history}/>
);

ReactDOM.render(
    <Provider store={store} key="provider">
        {component}
    </Provider>,
    document.getElementById('main')
);
