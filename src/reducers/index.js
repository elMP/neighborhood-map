import { combineReducers } from 'redux';
import { locations, itemsHasErrored, itemsIsLoading } from './locations';

export default combineReducers({
    locations,
    itemsHasErrored,
    itemsIsLoading
});