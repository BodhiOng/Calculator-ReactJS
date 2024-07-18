import React from 'react';
import './Header.css';

  const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid position-relative">
          <div className="row w-100">
            <div className="col text-start"></div>

              <div className="col text-center">
                <a className="navbar-brand custom-navbar-brand">Calculator</a>
              </div>

              <div className="col text-end"></div>
          </div>
          <a href="https://github.com/BodhiOng" className="text-light custom-developer-link">About the Developer</a>
        </div>
      </nav>
    );
  };

  export default Header;