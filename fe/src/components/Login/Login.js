import React from "react";
import "./Login.css";
import logo from "../../assets/image/logo-2.png";
import { Link, Redirect } from "react-router-dom";
import callAPI from "../../utils/apiCall";
import * as Actions from "../../actions/index";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      re_passowrd: "",
      message: "",
      success: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      message: "",
    });
  };

  validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  };

  handelSubmit = (e) => {
    e.preventDefault();

    let { match } = this.props;
    let { email, password } = this.state;
    let re_password = this.state.re_passowrd;
    let endpoint = match ? "auth/register" : "auth/login";
    let data = match
      ? { email, password, repassword: re_password }
      : { email, password };

    if (!this.validateEmail(email)) {
      this.setState({
        message: "Email is not valid",
      });
      return;
    }

    callAPI(endpoint, "POST", data)
      .then((res) => {
        let user = match
          ? {
              username: res.data.newUser.username,
              avatar: res.data.newUser.avatar,
              email: res.data.newUser.email,
            }
          : {
              username: res.data.username,
              avatar: res.data.avatar,
              email: res.data.email,
            };

        this.props.setUser(user);

        this.setState({
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          message: err.response.data.message,
        });
      });
  };

  render() {
    if (this.state.success) return <Redirect to="/" />;

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
              value={this.state.password}
              name="password"
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
          {this.state.message ? (
            <div className="auth-message">{this.state.message}</div>
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
          <div className="register" style={{ marginTop: "24px" }}>
            <span>Đã có tài khoản?</span>
            <Link to="/login">Đăng nhập ngay</Link>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch(Actions.setUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
