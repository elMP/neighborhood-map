import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Map extends Component {
  componentDidMount = () => {
    this.loadMap();
    this.addMarkers();
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.locations !== prevProps.locations) {
      this.addMarkers();
    }
  }
  loadMap = () => {
    if (this.props.google) {
      this.map = new this.props.google.maps.Map(
        ReactDOM.findDOMNode(this.refs.map),
        Object.assign({}, {
          center: { lat: 53.2294757, lng: 50.2095969 },
          zoom: 16,
          mapTypeId: 'roadmap'
        })
      )
    }

  }
  /////////// Markers//////////////////
  makeMarkerIcon = (color) => {
    let markerImg = new this.props.google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + color +
      '|40|_|%E2%80%A2',
      new this.props.google.maps.Size(26, 42),
      new this.props.google.maps.Point(0, 0),
      new this.props.google.maps.Point(12, 42),
      new this.props.google.maps.Size(26, 42));
    return markerImg;
  }

  infoWindow = new this.props.google.maps.InfoWindow();
  chosenIcon = this.makeMarkerIcon('0072ff');

  addMarkers = () => {
    const LatLngBounds = new this.props.google.maps.LatLngBounds()

    this.props.locations && this.props.locations.forEach((location) => {

      const marker = new this.props.google.maps.Marker({
        position: { lat: location.location.lat, lng: location.location.lng },
        map: this.map,
        title: location.name,
        address: location.location.address,
        categories: location.categories,
      })

      marker.addListener('click', () => {
        this.populateInfoWindow(marker, this.infoWindow)
      })
      this.props.addMarkers(marker) //this came from redux reducer
      LatLngBounds.extend(marker.position)
    })
    this.map.fitBounds(LatLngBounds)
  }

  populateInfoWindow = (marker, infowindow) => {
    if (infowindow.marker !== marker) {
      // resets the old marker
      if (infowindow.marker) {
        const index = this.props.markers.findIndex(m => m.title === infowindow.marker.title)
        this.props.markers[index].setIcon(marker.getIcon())
      }

      marker.setIcon(this.chosenIcon)
      infowindow.marker = marker
      infowindow.setContent(`
            <h3>${marker.title}</h3>
            <h4>Address: ${marker.address}</h4>
            <i>Categor${marker.categories.length === 1 ? 'y' : 'ies'}: 
            ${marker.categories.map(category => category.name)}
            </i>
          `)
      infowindow.open(this.map, marker)
      // Clears the old info window
      infowindow.addListener('closeclick', function () {
        infowindow.marker = null;
        marker.setIcon(this.chosenIcon);
      })
    }
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