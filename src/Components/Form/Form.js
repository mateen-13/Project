import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/userSlice";

import "./Form.css";
import { NavLink, useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      userSliceActions.saveUser({
        name,
        email,
        age,
        password,
      })
    );

    navigate("/confirmation");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Project </h2>
          <h3> Sign-up Form </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            placeholder="abc1@gmail.com"
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confPassword}
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          {/* <input type="submit" value="Submit" /> */}
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </header>
    </div>
  );
};

export default Form;
