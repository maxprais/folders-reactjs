import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import FileSystem from './components/App.jsx';


ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {FileSystem}>
            <IndexRoute component = {FileSystem} />
        </Route>
    </Router>

), document.getElementById('app'));