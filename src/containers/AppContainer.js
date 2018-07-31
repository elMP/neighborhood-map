import { connect } from 'react-redux';
import App from '../components/App';
import { itemsFetchData, addToMarkers } from '../actions/actionscreator';

const mapStateToProps = (state) => {
    return {
        locations: state.locations,
        markers: state.allMarkers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        addMarkers: (marker) => dispatch(addToMarkers(marker)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



