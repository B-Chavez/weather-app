import React from 'react';

class UI extends React.Component{

  render(){
    return(
      <div>
        <div className={'outerContainer'}>
          <div className={'container card'}>
            <img src={'./images/sun.svg'} alt='sun' width='200' height='200'></img>
            <div className={'temp'}>Tempurature 72&deg;</div>
            <div className={'location'}>Location</div>
            <div className={'buttonContainer'}>
              <button>Favorite Locations</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UI;