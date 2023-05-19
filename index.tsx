import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './src/pages/Home';
import GlobalStyles from './styles';

// const container = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <Home />
  </React.Fragment>,
  document.getElementById('root')
);
