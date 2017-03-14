import React from 'react';
import ReactDOM from 'react-dom';
// import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Portfolio from './components/portfolio';
import Navbar from './components/navbar';
import './index.css';
import './App.css';


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route path='/projects' component={Portfolio} />
        {/* <Route path='me' component={Me} />
        <Route path='resume' component={resume} /> */}
    </div>
  </Router>,
  document.getElementById('root')
);
