import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Brewery from './breweryContainer';
import Winery from './wineryContainer';

const Splash = () => (
  <div>
    <h1>Welcome To The Courtyard</h1>
    <div id='drinking-options'>
      <h4>Choose your Aporeto adventure...</h4>

      <div id='drinking-options-content'>
        <div id='winery-nav'>
          <h2>Winery</h2>
          <Link to='/winery'>
            let's sip
          </Link>
        </div>
        <div id='brewery-nav'>
          <h2>Brewery</h2>
          <Link to='/brewery'>
            let's gargle beer
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(Splash);