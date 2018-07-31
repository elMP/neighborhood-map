import { combineReducers } from 'redux';
import { locations, itemsHasErrored, itemsIsLoading, allMarkers } from './locations';

export default combineReducers({
    locations,
    allMarkers,
    itemsHasErrored,
    itemsIsLoading
});