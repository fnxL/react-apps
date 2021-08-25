import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
