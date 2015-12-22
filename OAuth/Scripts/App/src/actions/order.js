import * as orderTypes from '../contants/order';

export function load(token) {
    return {
        types: [orderTypes.LOAD_ORDER, orderTypes.LOAD_ORDER_SUCCESS, orderTypes.LOAD_ORDER_FAIL],
        promise: (client) => client.get('/order', {token})
    };
}

