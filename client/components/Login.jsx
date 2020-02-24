import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/login.css";
// function Login(props) {
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target.name + " " + evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value

      // [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(event) {
    alert(
      "A name and password was submitted: " +
        this.state.username +
        " " +
        this.state.password
    );
  }
  render() {
    return (
      <div className="login-register-input-outer">
        <div className="login-register-input-inner">
          <h1 className="welcome">Welcome back!</h1>
          <form onSubmit={this.handleSubmit} action="">
            <div>
              <input
                className="loginInput"
                type="text"
                name="username"
                onChange={this.handleChange}
                placeholder="Username"
              />
            </div>
            <div>
              <input
                className="loginInput"
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <input className="buttonLogin" type="submit" value="Submit" />
          </form>
          <a href="">Forgot password?</a>
          <div>
            <span className="newTo">New to StudyPal?</span>
            <Link to="/register">Join now</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
