import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';

//Check if we have a token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;
