import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    return createStore(
        combineReducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    );
}

export default configureStore
