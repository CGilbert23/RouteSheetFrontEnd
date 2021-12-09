import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../redux/actions/login";

const Login = () => {
  const myState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const initialForm = {
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

  const handleLogin = () => {
    if((userDetails.email && userDetails.password) === ''){
        dispatch(isAuth(false));
    }else {
        dispatch(isAuth(true));
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h1>Login</h1>
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
            type="text"
          ></input>
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
