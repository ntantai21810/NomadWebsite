import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Login match={this.props.match} />
      </div>
    );
  }
}

export default LoginPage;
