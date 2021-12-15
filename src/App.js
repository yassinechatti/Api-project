import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListUsers from "./Components/ListUsers";
import { Route, Switch } from "react-router-dom";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListUsers} />
        <Route path="/User/:id" render={(props) => <User {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
