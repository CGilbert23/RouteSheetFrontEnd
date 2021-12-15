import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/actions/login";

const Register = () => {
  const dispatch = useDispatch();

  const initialForm = {
    name: "",
    email: "",
    password: "",
  };

  const [userDetails, setUserDetails] = useState(initialForm);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleRegister = () => { 
    dispatch(registerUser(userDetails));
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1>Register</h1>
        <label className="login-label">
          Name:
          <input
            name="name"
            value={userDetails.name}
            onChange={handleInput}
            type="text"
          ></input>
        </label>
        <label className="login-label">
          Email:
          <input
            name="email"
            value={userDetails.email}
            onChange={handleInput}
            type="text"
          ></input>
        </label>
        <label className="login-label">
          Password:
          <input
            name="password"
            value={userDetails.password}
            onChange={handleInput}
            type="password"
          ></input>
        </label>
        <button className="login-button" onClick={handleRegister}>Register</button>
        <Link to="/login" className="register-or-login-links">Already account? Login Here</Link>
      </div>
    </div>
  );
};

export default Register;
