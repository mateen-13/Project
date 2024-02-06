import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/userSlice";
// import { Validator } from "validator";
import "./Form.css";
import { useNavigate } from "react-router-dom";

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

    // const vaidation = {};
    // if (!name) {
    //   vaidation.name = "";
    // } else if (!age) {
    //   vaidation.age = "";
    // } else if (!email) {
    //   vaidation.email = "";
    // } else if (!password) {
    //   vaidation.password = "";
    // } else {

    if (password === confPassword) {
      dispatch(
        userSliceActions.saveUser({
          name,
          email,
          age,
          password,
        })
      );
      navigate("/confirmation");
    } else {
      alert("password not same");
    }
    // }
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

          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              handleChange(e);
            }}
            required="required"
          />

          <br />

          <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => {
              handleAgeChange(e);
            }}
            required="required"
          />
          <br />

          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              handleEmailChange(e);
            }}
            required="required"
          />
          <br />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
            required="required"
          />

          <br />
          <input
            type="password"
            value={confPassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
            required="required"
          />

          <br />
          <br />

          <button id="button" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </header>
    </div>
  );
};

export default Form;
