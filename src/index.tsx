import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DynamicPokemon from "./DynamicPokemon";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DynamicPokemonForms from "./DynamicPokemonForms";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route
          exact
          path="/pokemon/:name"
          render={(props) => <DynamicPokemon {...props.location.state} />}
        />
        <Route
          exact
          path="/pokemon/forms/:name"
          render={(props) => <DynamicPokemonForms {...props.location.state} />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
