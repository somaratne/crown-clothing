import React, { Component } from "react";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";
import { signInWithGoogle } from "./../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state };
    data[input.name] = input.value;
    this.setState({ email: data.email, password: data.password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>I alreay have an account</h1>
        <span>Sing in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            onHandleChange={this.handleChange}
            name="email"
            required
            type="text"
            value={email}
          />
          <FormInput
            label="password"
            onHandleChange={this.handleChange}
            name="password"
            required
            type="password"
            value={password}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
