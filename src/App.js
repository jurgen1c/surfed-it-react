import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import setUser from './actions';
import Login from './components/auth/Login';
import Main from './containers/Main';
import Signup from './containers/Signup';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const user = useSelector(state => state.user.userInfo);
  useEffect(() => {
    if (sessionStorage.token) {
      const sessionUser = sessionStorage.getItem('token');
      setUser(sessionUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute user={user} exact path="/" component={Main} />
        <Route path="/signup" exact><Signup /></Route>
        <Route path="/users/sign_in">{user === null ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="*">
          <h1>404 Not found </h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
