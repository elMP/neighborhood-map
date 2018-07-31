import {
    ITEMS_HAS_ERRORED, 
    ITEMS_IS_LOADING, 
    ITEMS_FETCH_DATA_SUCCESS, 
    ADD_MARKER } from '../actions/actionscreator'

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function locations (state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items.response.venues;

        default:
            return state;
    }
}

export function allMarkers(state = [], action) {
    switch (action.type) {
        case ADD_MARKER: 
            return [...state, action.marker];
        default:
            return state;
    }
}

