import { combineReducers } from 'redux';
import {  routeReducer } from 'redux-simple-router'
import { reducer as form } from 'redux-form';

export default combineReducers({
    routing: routeReducer,
    form
});
