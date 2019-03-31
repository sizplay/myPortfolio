import * as React from 'react';
import Scroll from 'react-scroll';
import '../Style/about.css';
const Element = Scroll.Element;
const scroll = Scroll.animateScroll;

class About extends React.Component {

  render() {
    return (
      <Element name='about'>
        <div className='background'>
          <div className='about text-center'>
            <h1 className='mt-5'>About Me.</h1>
            <hr />
            <h5 className='mt-5'>안녕하세요! 저의 포트폴리오 사이트에 방문 해주셔서 감사합니다.</h5><br />
            <h5>저는 Stony Brook Univ에서 컴퓨터 공학을 졸업하고<br /> Fullstack Academy of Code(Coding Bootcamp)에서<br /> 최신 Web 개발을 공부 하였습니다.</h5>
            <h5>같이 일하는 동료들과 협업을 중요하게 생각하고<br />생산성을 높이는 방법을 항상 고민 하며<br />일하는데 있어 효율을 우선 시 하며 작업하고 있습니다.</h5>
            <h5><br />많은 관심 부탁드립니다.</h5>
          </div>
        </div>
      </Element >
    );
  }
}

export default About;
