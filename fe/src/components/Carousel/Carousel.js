import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [
        "https://static.riviu.co/image/2021/07/05/351e57f9f1b57e2b23daeaf078a7625d.png",
        "https://static.riviu.co/image/2021/07/05/bd996538cedbbcd5897fd53e0d8e8de3.png",
        "https://st3.depositphotos.com/1000589/18888/i/1600/depositphotos_188883028-stock-photo-lebanese-food-middle-eastern-traditional.jpg",
        "https://d1ralsognjng37.cloudfront.net/51e37d7a-7202-437b-9dd5-9a549fc1594c.jpeg",
        "https://images.squarespace-cdn.com/content/v1/53806bd1e4b08791cb6d533f/1567582259925-5QU6VP7PIKF2ONJ0RK9B/Where+to+eat+in+Ho+Chi+Minh+City+%3F?format=1000w",
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => {
        return {
          index: state.index === state.images.length - 1 ? 0 : state.index + 1,
        };
      });
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { images, index } = this.state;
    return (
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={images[index]}
              className="d-block carousel-image"
              alt="food"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
