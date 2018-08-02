import {
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    ADD_MARKER,
    OPEN_INFO_WINDOW, 
} from '../actions/actionscreator'

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

export function locations(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items.response.venues;

        default:
            return state;
    }
}

export function markers(state = [], action) {
    switch (action.type) {
        case ADD_MARKER:
            return [...state, action.marker];
        default:
            return state;
    }
}

export function infoWindow(state = '', action) {
  //  console.log(state)
    switch (action.type) {
        case OPEN_INFO_WINDOW:
      //      console.log('reducer gets: ', action.infoId)
            return action.infoId;
        default:
            return state;
    }
}


