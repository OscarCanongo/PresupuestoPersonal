import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import AlertaState from './context/alertas/alertaState'; 
import NuevaCuenta from './components/NuevaCuenta';

//Check if we have a token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/crear-cuenta" component={NuevaCuenta}/>
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
