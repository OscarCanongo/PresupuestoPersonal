import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { useHistory } from 'react-router-dom';

const Header = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { cerrarSesion  } = authContext;

    const history = useHistory();

    return ( 
        <header className="app-subheader">
            
            <nav>
                <header className="app-subheader">
                    <nav className="nav-principal">
                        <div class="circulo"> </div>
                    </nav>
                    <nav className="nav-principal">
                        <h2>Market</h2>
                    </nav>
                </header>    
            </nav>
            <nav>
                <input
                    type="submit" 
                    className="btn-subheader btn-block" 
                    value="Add new talent &#43;"
                    onClick={ () => {
                        //cerrarSesion();
                        history.push('/nuevo-talento');
                    }} 
                />    
            </nav>
        </header>
     );
}
 
export default Header;