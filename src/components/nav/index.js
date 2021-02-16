import React from "react";
import "./style.css";

const Nav = () => {

  return (
    <div className="navbar-cont">
      <h3 className="nav-title">Estonia Experience</h3>
      <div className="content-mobile nav-dropdown">
        <button className="nav-dropdown-button">
          <img className="nav-dropdown-button-image" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/download.png?alt=media&token=02982879-9299-47c3-8994-140ca649ee58" />
        </button>
        <div className="nav-dropdown-content">
          <a className='nav-link' href='/'>About</a>
          <a className='nav-link' href='/'>Benefits</a>
          <a className='nav-link' href='/'>Facts</a>
          <a className='nav-link' href='/'>Companies</a>
          <a className='nav-link' href='/'>Perks</a>
          <a className='nav-link' href='/'>Team</a>
        </div>
      </div>
      <div className="nav-menu navbar-desktop">
        <a className='nav-link' href='/'>About</a>
        <a className='nav-link' href='/'>Benefits</a>
        <a className='nav-link' href='/'>Facts</a>
        <a className='nav-link' href='/'>Companies</a>
        <a className='nav-link' href='/'>Perks</a>
        <a className='nav-link' href='/'>Team</a>
      </div>
    </div>
  );
};

export default Nav;
