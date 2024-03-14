import { useState } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../redux/userSlice";

import "./Form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(props.user ? props.user.name : "");

  const [email, setEmail] = useState(props.user ? props.user.email : "");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("This Field Is Required");
      return;
    } else if (email.trim() === "") {
      setError("This Field Is Required");
      return;
    }

    if (password === confPassword) {
      await axios({
        method: "POST",
        url: "http://localhost:5000/createUser",
        data: { name, email, password },
      }).then(
        (res) => {
          dispatch(
            userSliceActions.saveUser({
              name,
              email,
              password,
            })
          );
          navigate("/confirmation");
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert("password not same");
    }
  };

  const editUser = async (e) => {
    e.preventDefault();
    await axios({
      method: "PATCH",
      url: "http://localhost:5000/update",
      data: {
        email,
        update: {
          name,
        },
      },
    }).then(
      () => {
        dispatch(
          userSliceActions.editUser({
            name,
            email,

            password,
          })
        );

        navigate("/confirmation");
      },
      () => {
        console.log("Kuch gadbad hoya");
      }
    );
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
          <h3 className="hie"> Sign-up Form </h3>
          <div>
            <input
              className="name"
              type="text"
              required
              value={name}
              placeholder="Name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          {error && <div className="error">{error}</div>}

          <div>
            <input
              className="name"
              type="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
          </div>
          {/* <br /> */}
          {error && <div class="error">{error}</div>}

          <div>
            <input
              className="name"
              type="password"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
          </div>

          <div>
            <input
              className="name"
              type="password"
              required
              value={confPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                handleConfPasswordChange(e);
              }}
            />
          </div>
          <br />

          <div className="bur">
            <button
              id="button"
              type="submit"
              onClick={props.user ? editUser : handleSubmit}
            >
              Submit
            </button>

            <button id="Edit" class="edit" onClick={console.log("helllo")}>
              Edit
            </button>
          </div>
          <br />
          <br />
        </form>
      </header>
    </div>
  );
};

export default Form;
