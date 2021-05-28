import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class Nav extends React.Component {
  render() {
    return (
        <div>
          <div className='navbar'>
            <ul>
            <li><a href="#home"><img src='./images/home.svg' alt='home button' /></a></li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Nav;
