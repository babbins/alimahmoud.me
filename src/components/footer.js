import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
  render() {
    return(
      <div className='footer-container'>
        <div className='footer'>
          Built with 🌝 using <a href="https://facebook.github.io/react/">React</a>.
        </div>
      </div>
    );
  }
}
