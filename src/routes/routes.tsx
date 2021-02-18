import './base.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../app/app'
import Home from '../app/pages/Home/home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>Login</Route>
        <Route path="/register" exact>Registro</Route>
        <Route path="/" exact><Home/></Route>

        <Route path="/"><App/></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
