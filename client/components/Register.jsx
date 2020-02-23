import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      school: "",
      favs: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInterest = this.setInterest.bind(this);
  }

  handleSubmit() {
    alert(
      ` ${this.state.username} ${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.password} ${this.state.school} `
    );
    alert(this.state.favs);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  componentDidMount() {
    this.setState({ favs: this.state.favs });
  }
  setInterest() {
    this.setState(prevState => {
      return {
        favs: !prevState.favs
      };
    });
  }
  render() {
    let checkboxes = [];
    const interest = [
      "Computer Science",
      "Communications",
      "Political Sciences",
      "Business",
      "Liberal Arts",
      "Physics",
      "Nursing",
      "Engineer"
    ];
    // const breaks = [4, 8, 12, 16];
    for (let i = 0; i < interest.length; i++) {
      // if (i < 6) {
      checkboxes.push(
        <div className="interestCol">
          <span className="checkbox">
            <input
              type="checkbox"
              value={interest[i]}
              name={interest[i]}
              onClick={this.setInterest}
              id={i}
            />
            <label>{interest[i]}</label>
          </span>
        </div>
      );
      // }
    }

    return (
      <div className="login-register-input">
        <form onSubmit={this.handleSubmit} action="">
          <h1>Create Account</h1>
          <input
            className="textReg"
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            className="textReg"
            name="firstName"
            onChange={this.handleChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="textReg"
            name="lastName"
            onChange={this.handleChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            className="textReg"
            name="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
          />
          <input
            className="textReg"
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <input
            className="textReg"
            name="school"
            onChange={this.handleChange}
            type="text"
            placeholder="School"
          />
          {checkboxes}
          <br />
          <p>
            I agree all statements in <a href="">Term of service.</a>
          </p>
          <input className="regButton" type="submit" />
        </form>
      </div>
    );
  }
}
export default Register;
