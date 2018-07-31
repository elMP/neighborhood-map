import { connect } from 'react-redux';
import App from '../components/App';
import { itemsFetchData, addToMarkers, openInfoWindow } from '../actions/actionscreator';

const mapStateToProps = (state) => {
   
    return {
        locations: state.locations,
        markers: state.allMarkers,
        infoWindow: state.infoWindow,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        addMarkers: (marker) => dispatch(addToMarkers(marker)),
        openInfoWindow: (infoId) => dispatch(openInfoWindow(infoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



