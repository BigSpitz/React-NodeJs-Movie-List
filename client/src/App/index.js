import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AppLayout from './AppLayout';
import Movies from './Movies';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AppLayout>
            <Movies />
          </AppLayout>
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
