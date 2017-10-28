import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import {loadAuthors} from './actions/authorActions';
import {loadCourses} from './actions/courseActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const store = configureStore();
store.dispatch(loadAuthors());
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
