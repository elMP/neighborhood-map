import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './nameIt';
//change the name of the reducer file!!!

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});