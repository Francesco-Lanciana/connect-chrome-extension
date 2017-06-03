import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer} from 'graph/reducers/reducers';

export var configureStore = (initialState ={}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

export default configureStore;
