import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from 'Main';
import {configureStore} from 'graph/store/configureStore';

let store = configureStore();

function renderApp() {
  ReactDOM.render(
      <Provider store={store}>
          <Main/>
      </Provider>,
      document.getElementById('root')
  );
}

renderApp(); // Renders App on init
