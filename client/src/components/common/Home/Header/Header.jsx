import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import './hero.css';
import {MenuUnfoldOutlined } from '@ant-design/icons'

function Header() {
  useEffect(() => {
    // Initialize the sidenav
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []); 

  return (
    <>
      <nav>
    <div className="innerWidth nav-wrapper white nav">
      <a href="#!" className="brand-logo"><img src="./logo.svg" alt="" style={{
        width:'35px',
        marginTop:'4px',
        marginLeft:'15px'

      }} />
      <span className='asset-ace'>Asset-Ace</span>
      </a>
      
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"><MenuUnfoldOutlined /></i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#home">Home</a></li>
        <li><a href="#companies">Companies</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">Companies</a></li>
    <li><a href="collapsible.html">About</a></li>
    <li><a href="mobile.html">Contact</a></li>
  </ul>
    </>
  );
}

export default Header;
