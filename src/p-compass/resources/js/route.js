import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/members/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Setting from './pages/members/Setting';

  function App() {
    return (
        <div>
            <Switch>
                <Route path='/about' exact component={About} />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/setting' exact component={Setting} />

            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
