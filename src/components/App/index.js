import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import Map from '../Map';
import './styles.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.foursquare.com/v2/venues/search?client_id=KNIQKWBGUBOVCXEKF4IIU3ADQOCGLHR41JSVMAHUSGAE5E12&client_secret=YGR34AOSTKU1PJ0V11LSYETJLFKSZY2RB2UDLIQ4DF420R5W&ll=53.2294757,50.2095969&v=20180323')
  }
  render() {
    return (
      <div>
        <Map google={this.props.google} {...this.props} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDiUqVLqagpRsToEy_hX6Vv9NmTYX22_fs'
})(App)
