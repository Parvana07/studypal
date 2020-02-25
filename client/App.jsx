import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//import relevant files
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Chat from "./components/Chat.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";

// import Checkbox from
// import styles
import "./stylesheets/styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }
  //get username information from /register and /login upon successful submit
  onRegisterSubmit(usrName) {
    this.setState({
      username: usrName
    });
    console.log("state onregistersubmit in app.jsx", this.state);
  }
  onLoginSubmit(usrName) {
    this.setState({
      username: usrName
    });
    console.log("state onloginsubmit in app.jsx", this.state);
  }

  render() {
    return (
      <div className="router">
        <main>
          <Switch>
            <Route
              exact
              path="/"
              // component={Login}
              render={() => <Login onLoginSubmit={this.onLoginSubmit} />}
            />
            <Route
              path="/profile"
              render={() => <Profile username={this.state.username} />}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Register onRegisterSubmit={this.onRegisterSubmit} />
              )}
            />
            <Route path="/chat" component={Chat} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
