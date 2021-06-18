import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <div className="login-left">
          <img
            className="login-image"
            src="https://images.unsplash.com/photo-1606392340576-c31a40313caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
            alt="food-image"
          />
        </div>
        <div className="login-right">
          <div className="logo-contain">
            <img
              className="logo"
              src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
              alt="nomad-logo"
            />
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email hoặc tên tài khoản</label>
              <input type="email" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
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
      </div>
    );
  }
}

export default Login;
