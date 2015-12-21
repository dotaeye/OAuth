import { createStore as _createStore, applyMiddleware } from 'redux';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';
import reducers from '../reducers'

export default function createStore(client) {
    const middleware = [createMiddleware(client), transitionMiddleware];
    let finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducers);
    return store;
}
