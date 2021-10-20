import React from 'react';

import ReactDOM from 'react-dom';
import { hot } from 'react-hot-ts';

import { App } from './App';

const rootEl = document.getElementById('root');

export const renderApp = (): void => {
  ReactDOM.render(<App />, rootEl);
};

renderApp();

if (process.env.REACT_APP_HOT_LOADER) {
  console.log('enabled hot');
  hot(module)(renderApp);
}
