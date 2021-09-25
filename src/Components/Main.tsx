import * as React from "react";
import "../Style/main.css";
import Scroll from "react-scroll";
// import resume from '';

const Link = Scroll.Link;
class Main extends React.Component {
  render() {
    return (
      <div className="text-center site-wrapper">
        <div>
          <h1 className="mt-5">Chaehoon Lim</h1>
          <h3>FRONTEND SOFTWARE ENGINEER</h3>
        </div>
      </div>
    );
  }
}
export default Main;
