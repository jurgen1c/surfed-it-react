import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Main from './containers/Main';
import useToken from './utils/useToken';

function App() {
  const { token, setToken } = useToken();
  console.log(token);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">{Main}</Route>
        <Route path="/signup" component={Signup} />
        {/* <Route path="/mylocations" component={MyLocations} />
        <Route path="/myboards" component={MyBoards} />
        <Route path="/more" component={More} />
        <Route path="/:name" component={Location} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
