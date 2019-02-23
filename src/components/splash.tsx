import React from 'react';
import '../styles/splash.scss';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className='courtyard'>
      <h1 className='greeting'>Welcome To The Courtyard</h1>
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
}  

export default Splash;