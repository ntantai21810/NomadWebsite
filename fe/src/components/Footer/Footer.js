import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/logo-2.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="container footer-top-container">
            <div className="col-4">
              <span className="footer-input-title">
                Liện hệ với chúng tôi để biết thêm thông tin
              </span>
              <div className="input-group footer-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email của bạn"
                />
                <div className="input-group-append">
                  <span className="input-group-text">Liên hệ</span>
                </div>
              </div>
            </div>
            <div className="select-language">
              <i className="fas fa-globe-asia"></i>
              <select name="languages" className="languages">
                <option value="English">English</option>
                <option value="Vietnamese">Tiếng việt</option>
              </select>
              <i className="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container footer-mid-container">
            <div>
              <img className="footer-img" src={Logo} alt="nomad-logo" />
              <p className="footer-desc">
                Nomad giúp bạn dễ dàng hơn trong việc tìm kiếm quán ăn, chúp tôi
                sẽ giúp bạn tìm kiếm các quán ăn và sẽ hiện thị các đánh giá về
                quán ăn đó để bạn có thể dễ dàng nhận xét.
              </p>
            </div>
            <div className="footer-about">
              <h3 className="footer-subtitle">Về Nomad</h3>
              <div>
                <Link className="footer-link" to="/about">
                  Thông tin về chúng tôi
                </Link>
                <Link className="footer-link" to="">
                  Blog
                </Link>
                <Link className="footer-link" to="">
                  Đội ngũ phát triển
                </Link>
                <Link className="footer-link" to="">
                  Ứng dụng di động
                </Link>
                <Link className="footer-link" to="">
                  Liên hệ
                </Link>
              </div>
            </div>
            <div className="footer-business">
              <h3 className="footer-subtitle">Kinh doanh</h3>
              <div>
                <Link className="footer-link" to="">
                  Thêm quán ăn
                </Link>
                <Link className="footer-link" to="">
                  Góp ý
                </Link>
                <Link className="footer-link" to="">
                  Quảng cáo
                </Link>
              </div>
            </div>
            <div className="footer-partner">
              <h3 className="footer-subtitle">Hợp tác</h3>
              <div>
                <Link className="footer-link" to="">
                  Cho quán ăn
                </Link>
                <Link className="footer-link" to="">
                  Bên khác
                </Link>
              </div>
              <div className="footer-social">
                <Link className="footer-icon" to="">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link className="footer-icon" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="footer-icon" to="">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="footer-copyright">
          <i className="far fa-copyright copyright-icon"></i>Copyright 2021{" "}
          <Link to="">Nomad</Link> by Noname. All Rights Reserved
        </h3>
      </div>
    );
  }
}
export default Footer;
