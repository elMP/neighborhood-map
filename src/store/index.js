import { createStore, applyMiddleware, compose } from 'redux'
import combineReducers from '../reducers/index'
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    return createStore(
        combineReducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}

export default configureStore
