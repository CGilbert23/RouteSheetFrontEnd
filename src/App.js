import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import "./App.css"
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/actions/login';

const App = () => {

  const login = useSelector((state) => state.login)
  const dispatch = useDispatch();
  
  const isAuthenticated = login.isAuth;

  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <PublicRoutes
            path="/login"
            isAuthenticated={isAuthenticated}
          >
            <Login />
          </PublicRoutes>

          <PublicRoutes
            path="/register"
            isAuthenticated={isAuthenticated}
          >
            <Register />
          </PublicRoutes>

          <PrivateRoutes
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <div className="home-container">
              <div className="Body">
                <ProtectedRoutes />
              </div>
            </div>
          </PrivateRoutes>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;