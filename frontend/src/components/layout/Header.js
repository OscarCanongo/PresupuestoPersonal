import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { useHistory } from 'react-router-dom';

const Header = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { cerrarSesion  } = authContext;

    const history = useHistory();

    return ( 
        <header className="app-header">
            
            <nav className="nav-principal">
            <div className="header-form">
                <input 
                    type="text"
                    id="quickSearch"
                    name="quickSearch"
                    placeholder="Quick Search"
                    />
                <input 
                    type="text"
                    id="allEntities"
                    name="allEntities"
                    placeholder="All entities"
                    />
                <input 
                    type="text"
                    id="industry"
                    name="industry"
                    placeholder="Industry"
                />
                <input 
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                />
                <input
                    type="submit" 
                    className="btn-form btn-block" 
                    value="Buscar" 
                />
            </div>
            </nav>
            <nav className="nav-principal">
                    
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={ () => {
                        cerrarSesion();
                        history.push('/');
                    }}
                >Cerrar Sesión</button>
            </nav>
        </header>
     );
}
 
export default Header;