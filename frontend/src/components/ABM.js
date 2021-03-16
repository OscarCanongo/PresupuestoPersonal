import React from 'react';
import Header from '../components/layout/Header';
import NuevaOperacion from '../components/NuevaOperacion';

const ABM = () => {
    return ( 
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/> 
                <NuevaOperacion/>
                <h1>ABM</h1>
            </div>
        </div>
    );
}
 
export default ABM;