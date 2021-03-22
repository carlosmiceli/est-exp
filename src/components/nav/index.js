import React, {useRef, useState, useEffect} from "react";
import "./style.css";

const Nav = () => {
  const [navbar, setNavbar] = useState(false)
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  
  const changeBackgroundNavbar = () => {
    if(window.scrollY >= 20) {
      setNavbar(true)
    }
    else setNavbar(false)
  }

  const dropdownClick = () => setIsOpen(!isOpen)

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [isOpen])

  window.addEventListener('scroll', changeBackgroundNavbar)

  return (
    <div className={`navbar-cont
    ${navbar
    ?
    'navbar-colored'
    :
    ""}`}>
      <h3 className="nav-title"><a href="#hero">Estonia Experience</a></h3>
      <div className="alert-cont">
        <a href='#join-us'><img className="alert-image" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/Apply%20Now%20to%202021's%20Summer%20Edition!%20(6).png?alt=media&token=e28caa9c-728a-494c-abdc-b1203a72755b" /></a>
        <div className="content-mobile nav-dropdown">
          <button className="nav-dropdown-button" onClick={dropdownClick}>
            <img className={`nav-dropdown-button-image ${isOpen ? 'nav-dropdown-image-active' : ""}`} alt="" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/download.png?alt=media&token=02982879-9299-47c3-8994-140ca649ee58" />
          </button>
          <div ref={dropdownRef} className={`nav-dropdown-content ${isOpen ? 'nav-dropdown-open' : ""}`}>
            <a className='nav-link' href='#why-estonia'>Why Estonia?</a>
            <a className='nav-link' href='#about'>About</a>
            <a className='nav-link' href='#testimonials'>Testimonials</a>
            <a className='nav-link' href='#companies'>Companies</a>
            <a className='nav-link' href='#join-us'>Join Us</a>
            <a className='nav-link' href='#team'>Team</a>
            <a className='nav-link' href="https://www.instagram.com/p/BxhU2YKAHd8/" target="_blank">Instagram</a>
            <a className='nav-link' href='#contact-us'>Contact Us</a>
          </div>
        </div>
      </div>
      {/* <div className="nav-menu navbar-desktop">
        <a className='nav-link' href='/'>About</a>
        <a className='nav-link' href='/'>Benefits</a>
        <a className='nav-link' href='/'>Facts</a>
        <a className='nav-link' href='/'>Companies</a>
        <a className='nav-link' href='/'>Perks</a>
        <a className='nav-link' href='/'>Team</a>
      </div> */}
    </div>
  );
};

export default Nav;
