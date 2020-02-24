import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/login.css";
// function Login(props) {
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      input: "valid" //used to display error messages below input box
    };
    this.handleChange = this.handleChange.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  //invoked upon login button click
  userLogin() {
    const { username, password } = this.state;

    if (username == "" || password == "")
      this.setState({ ...this.state, input: "empty" });
    else {
      //backend call to check if username + password is valid
      const body = { username, password };

      fetch("/users/validateUser", {
        method: "POST",
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(result => {
          //user validation result
          if (result) {
            //successful
            this.props.history.push("/profile"); //redirect
          } else {
            //unsuccessful
            this.setState({ ...this.state, input: "invalid" });
          }
        })
        .catch(err =>
          console.log("Login fetch /users/validateUser: ERROR: ", err)
        );
    }
  }
  render() {
    const inputState = this.state.input;

    const message = () => {
      if (inputState == "valid") return <div></div>;
      else if (inputState == "invalid")
        return (
          <div className="login-invalid-msg">
            Invalid username and/or password
          </div>
        );
      else
        return (
          <div className="login-invalid-msg">
            Please enter username and password
          </div>
        );
    };

    return (
      <div className="login-register-input">
        <h1>StudyPal</h1>
        <p className="welcome">Welcome back!</p>
        <input
          className="text"
          type="text"
          name="username"
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input
          className="text"
          type="password"
          name="password"
          onChange={this.handleChange}
          placeholder="Password"
        />
        {message()}
        <button
          type="button"
          className="btnSubmit"
          onClick={() => this.userLogin()}
        >
          Log In
        </button>
        <a href="">Forgot password?</a>
        <br />
        <span>New to StudyPal?</span>
        <Link to="/register">Join now</Link>
      </div>
    );
  }
}

export default Login;
