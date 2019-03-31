import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Main from './Components/Main';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import './Style/index.css';

class App extends React.Component {

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Main} />
            <Route component={About} />
            <Route component={Projects} />
            <Route component={Skills} />
            <Route component={Footer} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
