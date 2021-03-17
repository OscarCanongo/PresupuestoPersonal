
import React, { useReducer } from 'react';
import OperacionesContext from './operacionesContext';
import OperacionesReducer from './operacionesReducer';

import { 
    GET_OPERACIONES,
    OPERACION_ERROR,
    GET_BALANCE,
    AGREGAR_OPERACION
} from '../../types';

import clienteAxios from '../../config/axios';

const OperacionesState = props => {
    const initialState = {
        operaciones: [],
        msg: null,
        balance: 0,
        errorOperacion: false
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

    // Agregar operacion
    const agregarOperacion = async operacion => {

        try {
            const resultado = await clienteAxios.post('/operations', operacion);
            dispatch({
                type: AGREGAR_OPERACION,
                payload: resultado.data.operacion
            })
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <OperacionesContext.Provider
            value={{
                operaciones : state.operaciones,
                msg: state.msg,
                balance: state.balance,
                errorOperacion: state.errorOperacion,
                getOperaciones,
                getBalance,
                agregarOperacion
            }}
        >
            {props.children}
        </OperacionesContext.Provider>
    )
}

export default OperacionesState;