
import React, { useReducer } from 'react';
import OperacionesContext from './operacionesContext';
import OperacionesReducer from './operacionesReducer';

import { 
    GET_OPERACIONES,
    OPERACION_ERROR,
    GET_BALANCE
} from '../../types';

import clienteAxios from '../../config/axios';

const OperacionesState = props => {
    const initialState = {
        operaciones: [],
        msg: null,
        balance: 0
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(OperacionesReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const getOperaciones = async user => {

        console.log("EL USER:" + user);

        try {
            const resultado = await clienteAxios.get('/operations', { params: { user }});
            console.log(resultado);
            dispatch({
                type: GET_OPERACIONES,
                payload: resultado.data.operations
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: OPERACION_ERROR,
                payload: alerta
            })
        }
    }

    // Obtener el balance
    const getBalance = async user => {

        try {
            const resultado = await clienteAxios.get('/operations/balance', { params: { user }});
            console.log(resultado);
            dispatch({
                type: GET_BALANCE,
                payload: resultado.data.result
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: OPERACION_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <OperacionesContext.Provider
            value={{
                operaciones : state.operaciones,
                msg: state.msg,
                balance: state.balance,
                getOperaciones,
                getBalance
            }}
        >
            {props.children}
        </OperacionesContext.Provider>
    )
}

export default OperacionesState;