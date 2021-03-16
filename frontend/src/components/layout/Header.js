import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Barra = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion  } = authContext;

    const history = useHistory();

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);



    return ( 
        <header className="app-header">
            <nav className="nav-principal">
                <img class="izquierdo" src={logo} width="20%" onClick={ () => {
                        history.push('/home');
                }}/>
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.name} </span> </p> : null}
            </nav>
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={ () => {
                        history.push('/abm');
                    }}
                >ABM</button>
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
 
export default Barra;
