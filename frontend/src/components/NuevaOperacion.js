import React, {useState, useContext} from 'react';
import OperacionesContext from '../context/operaciones/operacionesContext';

const NuevaOperacion = () => {

    // obtener la función del context de operacion
    const operacionesContext = useContext(OperacionesContext);
    const { agregarOperacion } = operacionesContext;
    
    // State del formulario
    const [operacion, setOperacion] = useState({
        concepto: '',
        monto: 0,
        fecha: '',
        tipo: 0,
        categoria: 0,
    });

    //Extraer los campos de operaciones
    const {concepto, monto, fecha, categoria, tipo} = operacion;

    // Leer los valores del formulario
    const handleChange = e => {
        setOperacion({
            ...operacion,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if(concepto.trim() === '' || monto < 0 || fecha.trim() === '' || categoria < 0) {
            //validarOperacion();
            return;
        }

        console.log(monto * -1);

        if (operacion.tipo > 1) {
            console.log("ENTRA");
            operacion.monto = monto * -1;
        }
        
        agregarOperacion(operacion);
        
        //obtener operaciones
        //obtenerOperaciones();

        // reiniciar el form
        setOperacion({
            concepto: '',
            monto: 0,
            fecha: '',
            tipo: 0,
            categoria: 0,
        })
    }
    
    return (  
        <div className="formulario">
            <form className = "default-form" onSubmit={onSubmit}>
                <div className="campo">
                    <label>Concepto</label>
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Concepto"
                        name="concepto"  
                        value={concepto}
                        onChange={handleChange}                    
                    />
                </div>
                <div className="campo">
                    <label>Monto</label>
                    <input 
                        type="number"
                        min="0"
                        className="input-text"
                        placeholder="Monto"
                        name="monto" 
                        value={monto}
                        onChange={handleChange}                       
                    />
                </div>
                <div className="campo">
                    <label>Fecha</label>
                    <input 
                        type="date"
                        className="input-text"
                        placeholder="Fecha"
                        name="fecha" 
                        value={fecha}
                        onChange={handleChange}                       
                    />
                </div>
                <div className="campo">
                    <label>Tipo de operación</label>
                    <select name="tipo"
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>-- Selecciona --</option>
                        <option value="1">Ingreso</option>
                        <option value="2">Egreso</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Categoria de la operación</label>
                    <select name="categoria"
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>-- Selecciona --</option>
                        <option value="1">Sueldo</option>
                        <option value="2">Extras</option>ç
                        <option value="3">Casa</option>
                        <option value="4">Comida</option>
                        <option value="5">Otros</option>
                    </select>
                </div>

                <div className="campo">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default NuevaOperacion;