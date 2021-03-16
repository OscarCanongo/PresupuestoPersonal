import React from 'react';

const NuevaOperacion = () => {
    return (  
        <div className="formulario">
            <form
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Concepto"
                        name="concepto"                      
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Monto"
                        name="monto"                      
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Fecha"
                        name="fecha"                      
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Tipo"
                        name="tipo"                      
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default NuevaOperacion;