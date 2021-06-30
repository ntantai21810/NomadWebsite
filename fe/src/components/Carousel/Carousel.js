import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [
        "https://images.unsplash.com/photo-1622495548018-4fc6f78d7bef?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1624892902685-595bb07dd421?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1624900041624-f3c5d1ca49b8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
