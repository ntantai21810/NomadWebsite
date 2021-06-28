import React from "react";
import "./Login.css";
import logo from "../../assets/image/logo-2.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passowrd: "",
      re_passowrd: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    let { match } = this.props;
    return (
      <div id="login" className="login">
        <Link to="/" className="logo-contain">
          <img className="logo" src={logo} alt="nomad-logo" />
        </Link>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu :</label>
            <input
              id="password"
              type="password"
              value={this.state.passowrd}
              name="passowrd"
              onChange={this.handleChange}
              required
            />
          </div>
          {match ? (
            <div className="form-group">
              <label htmlFor="re_password">Nhập lại mật khẩu :</label>
              <input
                id="re_password"
                type="password"
                value={this.state.re_passowrd}
                name="re_passowrd"
                onChange={this.handleChange}
                required
              />
            </div>
          ) : (
            ""
          )}
          {match ? (
            ""
          ) : (
            <div className="form-group">
              <span className="forgot-password">
                <Link to="">Quên mật khẩu?</Link>
              </span>
            </div>
          )}
          <button type="submit">{match ? "Đăng kí" : "Đăng nhập"}</button>
        </form>

        {match ? (
          ""
        ) : (
          <div>
            <span className="seperate">
              <span>hoặc</span>
            </span>

            <ul className="login-type">
              <li className="login-item">
                <Link to="">
                  <i className="fab fa-facebook login-item-icon"></i>
                  <span>Đăng nhập với Facebook</span>
                </Link>
              </li>
            </ul>

            <div className="register">
              <span>Chưa có tài khoản?</span>
              <Link to="/register">Đăng kí ngay</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
