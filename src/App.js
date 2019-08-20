import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import Hats from "./components/shop/hats.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop/hats" component={Hats} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
