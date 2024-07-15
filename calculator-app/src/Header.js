import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto">Calculator</a>
        
        <div className="navbar-text text-end">
          <a href="https://github.com/BodhiOng" className="text-light">About the Developer</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;