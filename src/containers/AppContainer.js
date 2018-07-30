import { connect } from 'react-redux';
import App from '../components/App';
import { itemsFetchData } from '../actions/actionscreator';

const mapStateToProps = (state) => {

    return {
        locations: state.locations,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



