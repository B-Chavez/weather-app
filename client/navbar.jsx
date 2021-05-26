import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class Nav extends React.Component {
  render() {
    return (
        <div>
          <div className='navbar'>
            <img src='./images/home.svg' alt='home button' />
          </div>
          <div className='outerContainer'>
            <div className='container card'>
              About
          </div>
          </div>
        </div>
    )
  }
}

export default Nav;
