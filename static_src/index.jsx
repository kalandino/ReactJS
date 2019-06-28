import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory as createHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import initStore from './utils/store';

const history = createHistory();
const middleware = routerMiddleware(history);
const { store, persistor } = initStore([middleware]);

ReactDOM.render(
	<Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <ConnectedRouter history={ history }>
		    <MuiThemeProvider>
		      <App />
		    </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
