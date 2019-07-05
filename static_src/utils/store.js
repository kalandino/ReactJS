import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from './../reducers';
import middlewares from '../middlewares';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['messageReducer', 'chatReducer', 'profileReducer'],
};

function store(additionalMiddlewares = []) {
  const innitialStore = {};
  if (__IS_DEV__) {
    const store = createStore(
      persistReducer(persistConfig, initReducers),
      innitialStore,
      compose(
        applyMiddleware(...additionalMiddlewares, ...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      ),
    );
    const persistor = persistStore(store);

    return { store, persistor };
  }
  const store =  createStore(
    persistReducer(persistConfig, initReducers),
    innitialStore,
    applyMiddleware(...additionalMiddlewares, ...middlewares),
  );
  const persistor = persistStore(store);

  return { store, persistor };
}

export default store;