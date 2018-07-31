import { combineReducers } from 'redux';
import { locations, itemsHasErrored, itemsIsLoading, allMarkers, infoWindow } from './locations';

export default combineReducers({
    locations,
    allMarkers,
    infoWindow,
    itemsHasErrored,
    itemsIsLoading
});