import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import "./App.css"
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from './components/Login';
import { useSelector } from 'react-redux';

const App = () => {

  const myState = useSelector((state) => state)
  const isAuthenticated = myState.loginReducer.isAuth;

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