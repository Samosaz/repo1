import React, { useState } from 'react';
import './App.css';
import menuIcon from './menuIcon.png'; // Import the menu icon image
import niaFalls from './niagaraFalls.jpg';
import Chatbox from './Chatbox'

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <nav className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </nav>
<div className="image-section">
        <img src={niaFalls} />
      </div>
      <div className='center-container'>
        <button className='animated-button'>hello world</button>
      </div>
      <div>
        <Chatbox/>
      </div>
    </div>
  );
}

export default App;

