
import './app.module.scss';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/comunidad" exact>Comunidad</Route>
    </Switch>
  );
}

export default App;
