'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';

import App from './components/App';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FSPortfolio from './components/FSPortfolio';

render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="/secret" component={FSPortfolio} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('app')
);
