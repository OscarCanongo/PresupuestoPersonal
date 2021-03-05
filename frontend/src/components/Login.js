import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/autenticacion/authContext';
import logo from '../images/logo.svg';

const Login = (props) => {

    const authContext = useContext(AuthContext);
    const { msg, autenticado, iniciarSesion } = authContext;

      useEffect(() => {
        if(autenticado) {
            props.history.push('/dashboard');
        }

        // En caso de que el password o usuario no exista

        if(msg) {
           //mostrarAlerta(msg.msg, msg.categoria);
        }
        // eslint-disable-next-line
    }, [msg, autenticado, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            //mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Pasarlo al action
        iniciarSesion({ email, password });
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <img class="centrado" src={logo} width="20%"/>
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                    data-cy="form-login"
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            data-cy = "submit-login"
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Iniciar Sesión" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;