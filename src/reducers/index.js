import { combineReducers } from 'redux';
import { locations, itemsHasErrored, itemsIsLoading, markers, infoWindow } from './locations';

export default combineReducers({
    locations,
    markers,
    infoWindow,
    itemsHasErrored,
    itemsIsLoading
});