import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { load as loadAuth } from './actions/auth';
import {
    App,
    Home,
    List,
    Login,
    NotFound
} from './containers';

export default (store) => {
    const requireLogin = (nextState, replaceState, cb) => {
        function checkAuth() {
            const { auth: { token }} = store.getState();
            if (!token) {
                // oops, not logged in, so can't be here!
                replaceState(null, '/login');
            }
            cb();
        }

        function isAuthLoaded(state) {
            return state.auth && state.auth.loaded;
        }

        if (!isAuthLoaded(store.getState())) {
            store.dispatch(loadAuth()).then(checkAuth);
        } else {
            checkAuth();
        }
    };

    /**
     * Please keep routes in alphabetical order
     */
    return (
        <Route path='/' component={App}>

            { /* Routes requiring login */ }

            <IndexRoute component={Home}/>

            <Route path='login' component={Login}/>

            <Route path='list' component={List} onEnter={requireLogin}/>

            { /* Catch all route */ }
            <Route path='*' component={NotFound} status={404}/>
        </Route>
    );
};
