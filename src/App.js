import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
