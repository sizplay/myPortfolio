import * as React from 'react';
import Scroll from 'react-scroll';
import '../Style/footer.css';

const scroll = Scroll.animateScroll;

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='mt-1'>
          <p>&copy; 2019 Chaehoon Lim. All Rights Reserved.</p>
        </div>
        <div className="icons">
          <a href="mailto:sizplay@gmail.com">
            <i className="fas fa-at" aria-hidden="true"></i>
          </a>
          <a className='ml-4' href="https://github.com/sizplay" target="_blank">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a className='ml-4' href="https://www.linkedin.com/in/chaehoon-lim/" target="_blank">
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a className='ml-5' onClick={() => scroll.scrollToTop()}>
            <i className="fa fa-chevron-up pulse chevron-up" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
