import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppLayout from './AppLayout';
import Movies from './Movies';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <AppLayout>
          <ToastContainer />
          <Route exact path="/">
            <Movies />
          </Route>
        </AppLayout>
        <Route path="*">
          <Redirect to={process.env.PUBLIC_URL} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
