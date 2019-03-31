import * as React from 'react';
import Scroll from 'react-scroll';
import '../Style/projects.css';
const Element = Scroll.Element;
import planIt from '../Style/PlanIt.png';
import face from '../Style/face.png';
import movieMarker from '../Style/movieMarker.png';
import theLightWeb from '../Style/theLightWeb.png';

class Projects extends React.Component {

  render() {
    return (
      <Element name='projects'>
        <div>
          <div className='cont'>
            <h1 className='mt-5'>Portfolio.</h1>
            <hr />
            <div className='project-group'>
              <div className='project-inside mt-5'>
                <img src={planIt} alt='Plan It' className='project-img'></img>
                <div className='project mt-3'>
                  <h3>Plan It</h3>
                  <h5 className='mt-4'>지인들과 함께 하는 SNS 여행 추천 IOS 앱</h5>
                  <p>모르는 사람의 추천은 믿을 수 없다! 지인들이 직접 음식점 호텔 즐길거리를 추천 하는 소셜 어플리케이션</p>
                  <p>팀원 3명과 함께 한 협업 프로젝트</p>
                  <p>React-Native과 Redux를 사용 하여 제작 하였고 주로 참여 한 부분은 Google auto-complete API를 이용하여 주소를 넣으면 Google map에 줌인 되는 기능 추가와 사용자가 날짜 시간 카테고리를 선택하면 데이터베이스에 저장 그리고 데이터베이스 구축하였습니다.</p>
                  <div className='skills-group mt-4'>
                    <h5>Skills</h5>
                    <ul>
                      <li>
                        React-Native, Redux, Google APIs
                      </li>
                      <li>
                        HTML, CSS, Native-base
                      </li>
                      <li>
                        Node.js, Postgres, Jest, Socket.Io
                      </li>
                    </ul>
                  </div>
                  <a className='mr-2' href="https://youtu.be/A2-jfJn0RAc" target="_blank">Presentation</a>
                  <a className='mr-2' href="https://github.com/biny235/PlanIt-react-native" target="_blank">Github</a>
                  <a href="https://github.com/biny235/PlanIt" target="_blank">Github for Backend</a>
                </div>
              </div>
              <div className='project-inside mt-5'>
                <img src={face} alt='hotel face check-in' className='project-img'></img>
                <div className='project mt-3'>
                  <h3>Hotel Face Check-in</h3>
                  <h5 className='mt-4'>안면 인식을 사용한 호텔 체크 인 웹 어플리케이션</h5>
                  <p>Hackathon 스타일로 작업 하여 이틀 만에 나온 결과물</p>
                  <p>개인 프로젝트</p>
                  <p>React와 Redux를 사용 하였고 Kairos 안면 인식 API를 이용 하여 체크 인과 체크 아웃을 하고 손님들의 얼굴 정보를 데이터 화 해서 분석 툴을 만들어 분석 할 수 있게 만들었습니다.</p>
                  <div className='skills-group mt-4'>
                    <h5>Skills</h5>
                    <ul>
                      <li>
                        React, Redux, Bootstrap, HTML, CSS
                      </li>
                      <li>
                        Node.js, Kairos face recognition API
                      </li>
                    </ul>
                  </div>
                  <a className='mr-2' href="https://youtu.be/ZxCX_CMdVUY" target="_blank">Presentation</a>
                  <a href="https://github.com/sizplay/hotel_checkin" target="_blank">Github</a>
                </div>
              </div>
              <div className='project-inside mt-5'>
                <img src={movieMarker} alt='Movie Marker' className='project-img'></img>
                <div className='project mt-3'>
                  <h3>Movie Maker</h3>
                  <h5 className='mt-4'>뉴욕에서 즐기는 AR 영화 투어 앱</h5>
                  <p>맨하탄 특정 위치에서 AR 앱으로 장소를 비췄을 때 영화의 한 장면이 나오는 앱</p>
                  <p>팀원 2명과 함께 한 협업 프로젝트</p>
                  <p>DeveloperWeek NY 2018에서 300 명의 개발자 중 TomTom 주체  Hackathon 수상</p>
                  <p>React-Native과 AR API를 사용 하여 제작 하였고 전체적인 AR App 구상과 Hackathon 우승 전략, 기획 방향 등을 설정을 하였습니다. TomTom API를 이용 하여 데이터를 호출하여 현재 위치 기반 랜드마크 정보를 호출 하였습니다.</p>
                  <div className='skills-group mt-4'>
                    <h5>Skills</h5>
                    <ul>
                      <li>
                        React-Native, Viro AR API, TomTom API
                      </li>
                    </ul>
                  </div>
                  <a className='mr-2' href="https://streamable.com/7atom" target="_blank">Demo</a>
                  <a href="https://github.com/sizplay/MovieMarker" target="_blank">Github</a>
                </div>
              </div>
              <div className='project-inside mt-5'>
                <img src={theLightWeb} style={{ height: '500px'}} alt='The Light Web' className='project-img'></img>
                <div className='project mt-3'>
                  <h3>The Light Web</h3>
                  <h5 className='mt-4'>안파는 물건이 없다! 잡동사니 다 파는 웹사이트</h5>
                  <p>React와 Redux로 만든 E-commerce Web Application</p>
                  <p>팀 2명과 함께 한 협업 프로젝트</p>
                  <p>기본 적인 E-commerce 웹사이트를 React와 Redux 그리고 Node.Js를 사용하여 개발하였습니다.</p>
                  <p>Products model과 Admin model에 대한 backend 부터 Frontend 까지 구현 하였습니다. Product 설명과 Shopping cart에 추가, 그리고 상품 후기, Search bar를 구현 하였습니다.</p>
                  <div className='skills-group mt-4'>
                    <h5>Skills</h5>
                    <ul>
                      <li>
                        React, Redux, HTML, CSS
                      </li>
                      <li>
                        Node.js, Postgres, Mocha, PASSPORT
                      </li>
                    </ul>
                  </div>
                  <a className='mr-2' href="https://the-light-web.herokuapp.com/" target="_blank">Demo</a>
                  <a href="https://github.com/sizplay/the-light-web" target="_blank">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Projects;
