import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// custom hook for handling input boxes
const useInput = init => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
//REGISTER: using React Hook
const Register = props => {
  //variables
  const history = useHistory();
  const [firstname, firstnameOnChange] = useInput("");
  const [lastname, lastnameOnChange] = useInput("");
  const [username, usernameOnChange] = useInput("");
  const [password, passwordOnChange] = useInput("");
  const [email, emailOnChange] = useInput("");
  const [school, schoolOnChange] = useInput("");
  const [checkboxes, setCheckboxes] = useState([
    { value: "Biology", isChecked: false },
    { value: "Business", isChecked: false },
    { value: "Communications", isChecked: false },
    { value: "Computer Science", isChecked: false },
    { value: "Education", isChecked: false },
    { value: "Engineering", isChecked: false },
    { value: "Law", isChecked: false },
    { value: "Liberal Arts", isChecked: false },
    { value: "Math", isChecked: false },
    { value: "Music", isChecked: false },
    { value: "Nursing", isChecked: false },
    { value: "Political Science", isChecked: false },
    { value: "Psychology", isChecked: false }
  ]);
  //checkbox related
  //toggles the value of checkbox's isChecked property
  const cboxCheck = type => {
    if (!type.isChecked) type.isChecked = true;
    else type.isChecked = false;
  };
  //creates account on submit button click
  //use fetch to save to database
  const createAccount = () => {
    console.log("createAccount called");
    if (
      firstname == "" ||
      lastname == "" ||
      username == "" ||
      email == "" ||
      school == ""
    )
      alert("Please complete all parts to create account");
    else {
      const interests = [];
      for (let c of checkboxes) {
        if (c.isChecked) {
          interests.push(c.value);
        }
      }
      props.onRegisterSubmit(username);
      const body = {
        firstname,
        lastname,
        username,
        password,
        email,
        school,
        interests
      };
      fetch("/users/addUser", {
        method: "POST",
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .catch(err =>
          console.log("Register fetch /users/addUser: ERROR: ", err)
        );
      history.push("/profile");
    }
  };
  //html component
  return (
    <div className="login-register-input">
      <form action="">
        <h1>Create Account</h1>
        <input
          className="text"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={firstnameOnChange}
        />
        <input
          className="text"
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={lastnameOnChange}
        />
        <input
          className="text"
          type="text"
          placeholder="Username"
          value={username}
          onChange={usernameOnChange}
        />
        <input
          className="text"
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordOnChange}
        />
        <input
          className="text"
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailOnChange}
        />
        <input
          className="text"
          type="text"
          placeholder="School"
          value={school}
          onChange={schoolOnChange}
        />
        <div className="checkboxes">
          {checkboxes.map((cb, i) => (
            <span className="interest-checkbox" key={`intCb${i}`}>
              <input
                type="checkbox"
                key={i}
                value={cb.value}
                id={cb.value}
                onClick={() => cboxCheck(cb)}
              />
              <label>{cb.value}</label>
            </span>
          ))}
        </div>
        <br />
        <p>
          I agree all statements in <a href="">Term of service.</a>
        </p>
        <button type="button" className="btnSubmit" onClick={createAccount}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
