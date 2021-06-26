import React from "react";
import "./Login.css";
import logo from "../../assets/image/logo-2.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div id="login" className="login">
        <Link to="/" className="logo-contain">
          <img className="logo" src={logo} alt="nomad-logo" />
        </Link>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email hoặc tên tài khoản :</label>
            <input type="email" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu :</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <span className="forgot-password">
              <a href="#">Quên mật khẩu?</a>
            </span>
          </div>
          <button>Đăng nhập</button>
        </form>

        <span className="seperate">
          <span>hoặc</span>
        </span>

        <ul className="login-type">
          <li className="login-item">
            <a href="#">
              <i className="fab fa-facebook login-item-icon"></i>
              <span>Đăng nhập với Facebook</span>
            </a>
          </li>
        </ul>

        <div className="register">
          <span>Chưa có tài khoản?</span>
          <a href="#">Đăng kí ngay</a>
        </div>
      </div>
    );
  }
}

export default Login;
