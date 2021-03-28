import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Main from './containers/Main';
import Signup from './containers/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/users/sign_in"><Login /></Route>
        {/* <Route path="/mylocations" component={MyLocations} />
        <Route path="/myboards" component={MyBoards} />
        <Route path="/more" component={More} />
        <Route path="/:name" component={Location} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
