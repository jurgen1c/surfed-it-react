import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mylocations" component={MyLocations} />
        <Route path="/myboards" component={MyBoards} />
        <Route path="/more" component={More} />
        <Route path="/:name" component={Location} />
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
