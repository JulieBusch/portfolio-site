'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';

import App from './components/App';
import About from './components/About';
import Resume from './components/Resume';

render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
    </Route>
  </Router>,
  document.getElementById('app')
);
