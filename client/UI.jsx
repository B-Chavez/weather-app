require('node-fetch');
import React from 'react';
import parseRoute from './lib/parse-route'

import Nav from './navbar';

class UI extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {

    const apiKey = 'a0327c2f4d091cf42558d47a87732c0b';

    fetch(`/api/weather-data`, {
      "method": "GET",
      "headers": {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {

        this.setState({weatherData: data})

      })

    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */

  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }


  render(){
    console.log('state: ', this.state)
    if(!this.state.weatherData){
      return(
        <h1>Loading Weather Data</h1>

      );
    }
    return(
      <div>
        <Nav />
        { this.renderPage()}
        <div className='navbar'>
          <img src="./images/home.svg" alt="home button"/>
        </div>
        <div className='outerContainer'>
          <div className='container card'>
            <img src='./images/sun.svg' alt='sun' width='200' height='200'></img>
            <div className='temp'>Temperature {this.state.weatherData.main.feels_like}&deg;</div>
            <div className='humidity'>Humidity {this.state.weatherData.main.humidity}&#37;</div>
            <div className='location'>Location: Los Angeles</div>
            <div className='buttonContainer'>
              <button>Favorite Locations</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UI;
