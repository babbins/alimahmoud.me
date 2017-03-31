import React from 'react';
import ReactDOM from 'react-dom';
// import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Portfolio from './components/portfolio';
import Info from './components/info';
import Footer from './components/footer';
import './index.css';
import './App.css';
import './animate.css';


ReactDOM.render(
  <Router>
    <div className='container'>
      <Info />
      {/* <Route path='/' component={Portfolio} /> */}
        {/* <Route path='me' component={Me} />
        <Route path='resume' component={resume} /> */}
      {/* <Footer /> */}
      <img className='cutout animated bounceInUp' src='me.png' alt=''/>
      {/* <embed src="resume.pdf" width="800px" height="400px" /> */}
    </div>
  </Router>,
  document.getElementById('root')
);
