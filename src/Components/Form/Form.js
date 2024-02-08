import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/userSlice";

import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(props.user ? props.user.name : "");

  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("This Field Is Required");
      return;
    }
    if (email.trim() === "") {
      setError("This Field Is Required");
      return;
    }
    // } else if (password.trim() === "") {
    //   setError("This Field Is Required");
    //   return;
    // } else
    if (password === confPassword) {
      dispatch(
        userSliceActions.saveUser({
          name,
          email,

          password,
        })
      );
      navigate("/confirmation");
    } else {
      alert("password not same");
    }
  };

  const editUser = (e) => {
    e.preventDefault();
    dispatch(
      userSliceActions.editUser({
        name,
        email,

        password,
      })
    );

    navigate("/confirmation");
  };

  const handleChange = (e) => {
    // setName(e.target.value);
    const newName = e.target.value;
    setName(newName);

    if (newName.trim() === "") {
      setError("This Field is Required");
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    // setEmail(e.target.value);
    const newemail = e.target.value;
    setEmail(newemail);

    if (newemail.trim() === "") {
      setError("This Field is Required");
    } else {
      setError("");
    }
  };

  const handlePasswordChange = (e) => {
    // setPassword(e.target.value);
    const newePass = e.target.value;
    setPassword(newePass);

    if (newePass.trim() === "") {
      setError("This Field is Required");
    } else {
      setError("");
    }
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
          {/* <h2> Project </h2> */}
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
          {error && (
            <div className="error" style={{ color: "#FF1E00" }}>
              {error}
            </div>
          )}

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
          {error && (
            <div class="error" style={{ color: "#FF1E00" }}>
              {error}
            </div>
          )}
          <input
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          {/* {error && (
            <div class="error" style={{ color: "#FF1E00" }}>
              {error}
            </div>
          )} */}
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
