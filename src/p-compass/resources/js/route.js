import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';


  function App() {
    return (
        <div>
            <Switch>
                <Route path='/about' exact component={About} />
                <Route path='/' exact component={Home} />

            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
