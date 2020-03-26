import { REGISTER, REGISTER_FAIL, LOADING } from '../actions/types';

const initialState = {
    user : {
        details: {},
        error: {},
        loading: false,
        registered: false
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case REGISTER: 
            return {
                ...state,
                loading: false,
                registered: true,
                details: action.payload
            };

        case REGISTER_FAIL: 
            return {
                ...state,
                errors: action.payload
            };  

        default:
            return state;
    }
 
};