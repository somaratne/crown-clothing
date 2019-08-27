import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./components/firebase/firebase.utils";
import "./App.css";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route path="/signin" component={SignInAndSignUp} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
