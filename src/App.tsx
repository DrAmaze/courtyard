import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Splash from './components/splash';
import Brewery from './components/breweryContainer';
import Beer from './components/beerContainer';
import Winery from './components/wineryContainer';

const App = () => (
  <Router>
    <div id='route-container'>
      <Route path='/' exact component={ Splash } />
      <Route path='/beer/:ID' exact component={ Beer } />
      <Route path='/brewery' exact component={ Brewery } />
      <Route path='/winery' exact component={ Winery } />
    </div>
  </Router>
);

export default App;
