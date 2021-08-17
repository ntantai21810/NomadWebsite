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
            <h2 className="about-title">Về chúng tôi</h2>
            <ul className="about-desc-list">
              <li className="about-desc-item">
                <h3>Nomad la gi?</h3>
                <p>
                  Nomad giúp bạn dễ dàng hơn trong việc tìm kiếm quán ăn, chúp
                  tôi sẽ giúp bạn tìm kiếm các quán ăn dựa trên tiêu chí của
                  bạn: địa điểm, giá, loại món ăn,... và sẽ hiện thị các đánh
                  giá về quán ăn đó để bạn có thể dễ dàng nhận xét. Bên cạnh đó
                  bạn cũng có thể tiến hành đánh giá và viết các bình luận cho
                  quán ăn để người khác có thể xem.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Tìm kiếm dễ dàng</h3>
                <p>
                  Công cụ tìm kiếm thông minh bằng cách gõ: tên địa điểm, hoặc
                  địa chỉ, hoặc tên đường, hoặc tên món ăn, hoặc mục đích, hoặc
                  tên khu vực. Hệ thống tìm kiếm sử dụng gợi ý & xem nhanh thông
                  tin, giúp bạn tìm địa điểm nhanh nhất
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Phân loại rõ ràng</h3>
                <p>
                  Nomad phân loại các địa điểm ra rất chi tiết: theo mục đích,
                  loại hình, món ăn, giá cả, loại ẩm thực... Điều này giúp cộng
                  đồng lọc địa điểm theo mục đích của mình rất nhanh chóng.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Bình luận & Đánh giá</h3>
                <p>
                  Nomad cho phép thành viên bình luận, đánh giá địa điểm với 5
                  tiêu chí: Món ăn, Vị trí, Không gian, Giá cả và Dịch vụ, điều
                  này giúp cộng đồng có cái nhìn tổng quan về các tiêu chí của
                  mỗi địa điểm. Do đặc thù của mỗi địa điểm khác nhau, ví dụ
                  Quán cafe, cộng đồng sẽ quan tâm đến Không gian, đối với Quán
                  Ăn thì cộng đồng quan tâm đến chất lượng món... Đây chính là
                  điểm khác biệt của Nomad so với cách dịch vụ khác.
                </p>
              </li>
              <li className="about-desc-item">
                <h3>Tính năng nổi bật</h3>
                <p>
                  Nomad có hệ thông phân loại quăn ăn đa dạng dựa trên nhiều
                  tiêu chí. Bên cạnh đó có tổng hợp top các quán theo tuần của
                  từng tiêu chí: quán ăn đang nổi, quăn ăn có nhiều đánh giá tốt
                  nhất, quán ăn có nhiều lượt xem nhất, ... từ đó bạn có thể lựa
                  chọn món ăn một cách dễ dàng
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
