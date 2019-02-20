import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <div id='route-container'>
      {/* <Route path='/brewery' exact component={ Brewery } />
      <Route path='/winery' exact component={ Winery } /> */}
      Aloha
    </div>
  </Router>
);

export default App;
