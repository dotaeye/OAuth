import { createStore as _createStore, applyMiddleware } from 'redux';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';
import reducers from '../reducers'

export default function createStore(client, storage) {
    const middleware = [createMiddleware(client, storage)];
    let finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducers);
    return store;
}
