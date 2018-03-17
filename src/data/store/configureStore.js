import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'react-router-redux';
//Redux middleware that detects errors on mutations between and outside redux dispatches.For development use only.
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../redux';
export const history = createHistory();

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        // Add other middleware on this line...
        thunk,
        promiseMiddleware(),
        reactRouterMiddleware,
    ];

    return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        // Add other middleware on this line...
        reduxImmutableStateInvariant(),
        thunk,
        promiseMiddleware(),
        reactRouterMiddleware,
    ];

    // add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../redux', () => {
            const nextReducer = require('../redux').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
export default configureStore;
