import * as React from 'react';
import Scroll from 'react-scroll';
import '../Style/skills.css';
const Element = Scroll.Element;

class Skills extends React.Component {

  render() {
    return (
      <Element name='skills'>
        <div className='skills'>
          <h1 className='text-center skills-font'>Skills.</h1>
          <hr />
          <div className='skills-grid'>
            <div className='skills-name'>
              <p>Frontend</p>
              <p>React</p>
              <p>Redux</p>
              <p>React-Native</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap</p>
              <p>Webpack</p>
              <p>Babel</p>
            </div>
            <div className='skills-name'>
              <p>Backend</p>
              <p>Node.js</p>
              <p>Postgres</p>
              <p>MySQL</p>
              <p>Express</p>
              <p>Sequelize</p>
            </div>
            <div className='skills-name'>
              <p>Language</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Java</p>
            </div>
            <div className='skills-name'>
              <p>Others</p>
              <p>Git</p>
              <p>Heroku</p>
              <p>Socket.io</p>
              <p>Linux</p>
              <p>Passport</p>
              <p>Mocha</p>
              <p>Jasmin</p>
            </div>
          </div>
          {/* <h1 className='text-center skills-font'>Awards.</h1>
          <hr />
          <div className='text-center'>

          </div> */}
        </div>
      </Element>
    );
  }
}

export default Skills;
