import * as React from 'react';
import '../Style/nav.css'
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

interface Prop {

}

interface State {
  nav: string;
  lastScrollY: number;
  slide: string;
}
class Nav extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props)
    this.state = {
      nav: 'nav-v1',
      lastScrollY: 0,
      slide: '0px'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-100px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });

    if (window.pageYOffset > 0) {
      this.setState({ nav: 'nav-v2' })
    } else if (window.pageYOffset === 0) {
      this.setState({ nav: 'nav-v1' })
    }
  }

  render() {
    return (
      <nav className={`navbar ${this.state.nav}`} style={{ top: this.state.slide }}>

        <a onClick={() => scroll.scrollToTop()}>
          <h1 id="logo">CL</h1>
        </a>
        <div>
          <ul className="nav-list">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={400}>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={400}>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={400}>
                <span>Skills</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
