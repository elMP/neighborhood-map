import React, { Component } from 'react';
import './styles.css';

class Map extends Component {
  componentDidMount() {
   
  }
  render() {
    return (
      <div>
        <div className="map-container">
          <div role="application" className="map" ref="map">
            loading map...
        </div>
        </div>
      </div >
    )
  }
}


export default Map