import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Login />
      </div>
    );
  }
}

export default LoginPage;
