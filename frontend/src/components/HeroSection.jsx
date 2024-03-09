// CustomNavbar.jsx
import React from 'react';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(173, 216, 230, 0.5)' }}>
      <a className="navbar-brand" href="#home">Your Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="#Body-sec">Body</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Form-sec">Form</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Footer-sec">Footer</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
