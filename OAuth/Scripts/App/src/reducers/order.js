import * as orderTypes from '../contants/order';

const initialState = {
    list:[]
};

export default function order(state = initialState, action = {}) {
    switch (action.type) {
        case orderTypes.LOAD_ORDER:
            return {
                ...state,
                loading: true
            };
        case orderTypes.LOAD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.result
            };
        case orderTypes.LOAD_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
     
        default:
            return state;
    }
}

