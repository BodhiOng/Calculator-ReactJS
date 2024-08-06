import React from 'react';
import './Header.css';

  const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid position-relative">
          <div className="row w-100 align-items-center">
            <div className="col text-start">
              {/* Left side of the navbar, currently empty */}
            </div>
            <div className="col text-center">
              {/* Centered brand name */}
              <a className="navbar-brand custom-navbar-brand">Calculator</a>
            </div>
            <div className="col text-end">
              {/* Right side of the navbar, currently empty */}
            </div>
          </div>
          {/* Link to the developer's Github profile */}
          <a href="https://github.com/BodhiOng" className="text-light custom-developer-link">About the Developer</a>
        </div>
      </nav>
    );
  };

  export default Header;