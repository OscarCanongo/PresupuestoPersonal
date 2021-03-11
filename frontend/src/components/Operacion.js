import React from 'react'

const Operacion = (operacion) => {
    console.log(operacion.operacion)
    return (  
        <li className="tarea sombra">
            <p>{operacion.operacion.concepto} </p>

            <div className="estado">
                {operacion.operacion.monto > 0
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                        >{operacion.operacion.monto}</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >{operacion.operacion.monto}</button>
                    )
                }
            </div>

            <div className="acciones">
                <p>{operacion.operacion.tipo} </p>
                <p>{operacion.operacion.categoria}</p>
            </div>
        </li>
    );
}
 
export default Operacion;