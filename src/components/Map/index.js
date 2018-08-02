import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Map extends Component {
  state = { query: '' };
  componentDidMount = () => {
    this.loadMap();
    this.addMarkers();
    this.onclickLocation();
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
        id: location.id,
      })


      // this.markers.push(marker); //I tried to put it in state, but redux extention would freeze whenever i tried to search for index in populateInfoWindow() function

      marker.addListener('click', () => {

        this.populateInfoWindow(marker, this.infoWindow);
        // console.log('im clicking on ', marker.id)
        this.props.openInfoWindow(marker.id)

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

        const index = this.props.markers.findIndex(m => m.id === this.props.infoWindow)

        this.props.markers[index].setIcon(marker.getIcon())

        //uncomment line 70 first to use this approach, and comment the line 61
        // const index = this.props.markers.findIndex(m => m.id === infowindow.marker.id)
        // this.props.markers[index].setIcon(marker.getIcon())

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

      const infoWindow = this.props.openInfoWindow;
      // Clears the old info window
      infowindow.addListener('closeclick', function () {

        infoWindow('')
        infowindow.marker = null;
        marker.setIcon(this.chosenIcon);
      })


    }
  }
  // Opens info window for items from the list 
  onclickLocation = () => {

    const infowindow = this.infoWindow
    const openInfoWindow = this.props.openInfoWindow;

    const displayInfowindow = (e) => {

     // const markers = this.props.markers
      const markerInd =
      this.props.markers.findIndex(m => m.title.toLowerCase() === e.target.innerText.toLowerCase());

      if (infowindow.marker) {
        const index = this.props.markers.findIndex(m => m.id === this.props.infoWindow)
        this.props.markers[index].setIcon(this.props.markers[markerInd].getIcon());
        //  this.markers[index].setVisible(true)
      }
     // openInfoWindow(this.markers[markerInd].id);
      openInfoWindow(this.props.markers[markerInd].id);
      this.populateInfoWindow(this.props.markers[markerInd], infowindow)
    }


    document.querySelector('.locations').addEventListener('click', function (e) {
      if (e.target && e.target.nodeName === "LI") {
        displayInfowindow(e)
      }
    })
  }

  // Handles input in react state
  handleValueChange = (e) => {
    this.setState({ query: e.target.value })
    
  }

  showMenu = () => {
    document.querySelector('.nav__menu-icon').classList.toggle('open');
  }

  render() {

    if (this.props.locations) {
      if (this.state.query) {
 
        this.props.locations.forEach((l, i) => {

          if (l.name.toLowerCase().includes(this.state.query.toLowerCase())) {
            this.props.markers[i].setVisible(true)
          } else {
            if (this.infoWindow.marker === this.props.markers[i]) {
              this.infoWindow.close()
            }
            this.props.markers[i].setVisible(false);
          }
        })
      } else {
        this.props.locations.forEach((l, i) => {
          if (this.props.markers.length > 0 && this.props.markers[i]) {
            this.props.markers[i].setVisible(true);
          }
        })
      }
    }


    return (
      <div>
        <nav className="nav">
          <div className="nav__menu-icon" onClick={() => this.showMenu()}><span></span></div>
          <h1 className="nav__title">My neighborhood map</h1>
        </nav>

        <div>
          <input type="text" value={this.state.query} onChange={this.handleValueChange} placeholder="Filter"/>
          <ul className="locations">
            {this.props.markers.length > 0 &&
              this.props.markers.filter(m => m.getVisible()).map((m, i) =>
                (<li key={i}>{m.title}</li>))
            }
          </ul>
        </div>

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