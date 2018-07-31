export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ADD_MARKER = 'ADD_MARKER';
export const OPEN_INFO_WINDOW = 'OPEN_INFO_WINDOW';

export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

//fetch data from the api
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

//Markers
export function markers(marker) {
    return {
        type: ADD_MARKER,
        marker
    };
}

export function addToMarkers(marker) {
    return (dispatch) => {
        dispatch(markers(marker))
    };
}

//InfoWindow
export function infoWindow(infoId) {
    return {
        type: OPEN_INFO_WINDOW,
        infoId
    };
}

export function openInfoWindow(i) {
    return (dispatch) => {
        dispatch(infoWindow(i))
    };
}