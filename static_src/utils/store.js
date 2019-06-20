import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from '../middlewares';


function store(additionalMiddlewares = []) {
    const innitialStore = {};
    if (__IS_DEV__) {
        return createStore(
            initReducers,
            innitialStore,
            compose(
                applyMiddleware(...additionalMiddlewares, ...middlewares),
                // window.__REDUX_DEVTOOLS_EXTENSION__(),
                window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
            ),
        );
    }
    return createStore(
        initReducers,
        innitialStore,
        applyMiddleware(...additionalMiddlewares, ...middlewares),
    );
}

export default store;
