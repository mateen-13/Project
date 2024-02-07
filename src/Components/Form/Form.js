import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/userSlice";

import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(props.user ? props.user.name : "");
  const [age, setAge] = useState(props.user ? props.user.age : "");
  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const editUser = (e) => {
    e.preventDefault();
    dispatch(
      userSliceActions.editUser({
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

          <input
            type="text"
            required
            value={name}
            placeholder="Name"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <br />

          <input
            type="number"
            required
            value={age}
            placeholder="Age"
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />

          <input
            type="email"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />

          <input
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />

          <br />
          <input
            type="password"
            required
            value={confPassword}
            placeholder="Confirm Password"
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />

          <br />
          <br />

          <button
            id="button"
            type="submit"
            onClick={props.user ? editUser : handleSubmit}
          >
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
