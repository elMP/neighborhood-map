import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// class Map extends Component {
//   render() {
const Map = () => {
    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 53.2294757, lng: 50.2095969 }}
        >
          {/* {props.isMarkerShown && <Marker position={{ lat: 53.2294757, lng: 50.2095969 }} />} */}
        </GoogleMap>
    );
  }
//}

export default withScriptjs(withGoogleMap(Map));
