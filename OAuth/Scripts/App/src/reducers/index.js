import { combineReducers } from 'redux';
import {  routeReducer } from 'redux-simple-router'
import { reducer as form } from 'redux-form';
import auth from './auth';

export default combineReducers({
    routing: routeReducer,
    form,
    auth
});
