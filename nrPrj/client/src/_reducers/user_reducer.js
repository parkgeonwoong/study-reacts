import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

// user_action.js 에서 
// reducer 기능: 전 상태 + action = next state
export default function(state = {}, action ) {
    // user_action 에서 계속 다른 타입이 들어올 것이기에 switch
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;

        case REGISTER_USER:
            return { ...state, register: action.payload}
            break;

        case AUTH_USER:
            return { ...state, userData: action.payload}
            break;

        default:
            return state;
    }
}