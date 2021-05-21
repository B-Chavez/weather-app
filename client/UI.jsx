require('node-fetch');
import React from 'react';

class UI extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
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
        <div className='navbar'>
          <img src="./images/home.svg" alt="home button"/>
        </div>
        <div className='outerContainer'>
          <div className='container card'>
            <img src='./images/sun.svg' alt='sun' width='200' height='200'></img>
            <div className='temp'>Tempurature {this.state.weatherData.main.feels_like}&deg;</div>
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
