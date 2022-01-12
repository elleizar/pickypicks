import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './HomePage';
import { RecipesPage } from './RecipesPage';
import '../css/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/recipes" >
          <RecipesPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
