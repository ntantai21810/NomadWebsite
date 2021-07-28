import React from "react";
import About from "../../components/About/About";

class AboutPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default AboutPage;
