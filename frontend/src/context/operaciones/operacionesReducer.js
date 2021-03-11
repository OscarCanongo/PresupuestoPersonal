import { 
    GET_OPERACIONES,
    OPERACION_ERROR,
    GET_BALANCE
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case GET_OPERACIONES:
            return {
                ...state,
                operaciones: action.payload
            }
        case GET_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        case OPERACION_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}