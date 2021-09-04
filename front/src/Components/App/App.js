import Navigator from "../Navigator/Navigator";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Form from "../Form/Form";
import AllProduct from "../AllProduct/AllProduct";
import Green from "../Green/Green";
import Blue from "../Blue/Blue";
import Red from "../Red/Red";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Switch>
        <Route exact path="/">
          <AllProduct />
        </Route>
        <Route exact path="/red">
          <Red />
        </Route>
        <Route exact path="/blue">
          <Blue />
        </Route>
        <Route exact path="/green">
          <Green />
        </Route>
        <Route exact path="/new">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
