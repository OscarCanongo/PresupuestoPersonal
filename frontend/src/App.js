import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import AlertaState from './context/alertas/alertaState'; 
import NuevaCuenta from './components/NuevaCuenta';
import OperacionesState from './context/operaciones/operacionesState';
import ABM from './components/ABM';

//Check if we have a token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <OperacionesState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/crear-cuenta" component={NuevaCuenta}/>
              <Route exact path="/abm" component={ABM}/>
            </Switch>
          </Router>
        </OperacionesState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
