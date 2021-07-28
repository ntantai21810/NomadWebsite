import React from "react";
import "./About.css";
import Sidebar from "../../components/Sidebar/Sidebar";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarItems: ["Gioi thieu", "Nha dau tu", "Gop y", "Lien he"],
    };
  }

  render() {
    return (
      <div className="about">
        <div className="container about-container">
          <div className="about-left">
            <Sidebar items={this.state.sidebarItems} />
          </div>
          <div className="about-right">
            <h2 className="about-title">About us</h2>
            <ul className="about-desc-list">
              <li className="about-desc-item">
                <h3>Foody.vn la gi?</h3>
                <p>
                  Giới thiệu Trợ giúp Nhà đầu tư Góp ý Liên hệ Giới thiệu về
                  Foody.vn Foody.vn là gì? Được xây dựng từ giữa năm 2012 tại
                  TP. HCM, Việt Nam, Foody là cộng đồng tin cậy cho mọi người có
                  thể tìm kiếm, đánh giá, bình luận các địa điểm ăn uống: nhà
                  hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch...
                  tại Việt Nam - từ website hoặc ứng dụng di động. Tất cả thành
                  viên từ Bắc đến Nam, Foody kết nối những thực khách đến với
                  các địa điểm ăn uống lớn nhỏ cả đất nước.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Foody.vn la gi?</h3>
                <p>
                  Giới thiệu Trợ giúp Nhà đầu tư Góp ý Liên hệ Giới thiệu về
                  Foody.vn Foody.vn là gì? Được xây dựng từ giữa năm 2012 tại
                  TP. HCM, Việt Nam, Foody là cộng đồng tin cậy cho mọi người có
                  thể tìm kiếm, đánh giá, bình luận các địa điểm ăn uống: nhà
                  hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch...
                  tại Việt Nam - từ website hoặc ứng dụng di động. Tất cả thành
                  viên từ Bắc đến Nam, Foody kết nối những thực khách đến với
                  các địa điểm ăn uống lớn nhỏ cả đất nước.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Foody.vn la gi?</h3>
                <p>
                  Giới thiệu Trợ giúp Nhà đầu tư Góp ý Liên hệ Giới thiệu về
                  Foody.vn Foody.vn là gì? Được xây dựng từ giữa năm 2012 tại
                  TP. HCM, Việt Nam, Foody là cộng đồng tin cậy cho mọi người có
                  thể tìm kiếm, đánh giá, bình luận các địa điểm ăn uống: nhà
                  hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch...
                  tại Việt Nam - từ website hoặc ứng dụng di động. Tất cả thành
                  viên từ Bắc đến Nam, Foody kết nối những thực khách đến với
                  các địa điểm ăn uống lớn nhỏ cả đất nước.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Foody.vn la gi?</h3>
                <p>
                  Giới thiệu Trợ giúp Nhà đầu tư Góp ý Liên hệ Giới thiệu về
                  Foody.vn Foody.vn là gì? Được xây dựng từ giữa năm 2012 tại
                  TP. HCM, Việt Nam, Foody là cộng đồng tin cậy cho mọi người có
                  thể tìm kiếm, đánh giá, bình luận các địa điểm ăn uống: nhà
                  hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch...
                  tại Việt Nam - từ website hoặc ứng dụng di động. Tất cả thành
                  viên từ Bắc đến Nam, Foody kết nối những thực khách đến với
                  các địa điểm ăn uống lớn nhỏ cả đất nước.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Foody.vn la gi?</h3>
                <p>
                  Giới thiệu Trợ giúp Nhà đầu tư Góp ý Liên hệ Giới thiệu về
                  Foody.vn Foody.vn là gì? Được xây dựng từ giữa năm 2012 tại
                  TP. HCM, Việt Nam, Foody là cộng đồng tin cậy cho mọi người có
                  thể tìm kiếm, đánh giá, bình luận các địa điểm ăn uống: nhà
                  hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch...
                  tại Việt Nam - từ website hoặc ứng dụng di động. Tất cả thành
                  viên từ Bắc đến Nam, Foody kết nối những thực khách đến với
                  các địa điểm
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
