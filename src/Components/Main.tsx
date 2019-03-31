import * as React from 'react';
import '../Style/main.css';
import Scroll from 'react-scroll';
// import resume from '';

const Link = Scroll.Link;
class Main extends React.Component {

  render() {
    return (
      <div className='text-center site-wrapper'>
        <div >
          <h1 className='mt-5'>Chaehoon Lim</h1>
          <h3>FULL STACK SOFTWARE ENGINEER</h3>
          <a className='resume' href='https://drive.google.com/file/d/15xXaz8xa9J_B2pSaNs1oCe8bl3-JcC0W' target="_blank">Resume</a>
        </div>
      </div>
    );
  }
}
export default Main;
