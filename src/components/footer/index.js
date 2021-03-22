import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="footer-text">
                <h4>Contact Us</h4>
                <a href="mailto:hello@estoniaexp.com" target="_blank" >hello@estoniaexp.com</a>
                <br />
                <p style={{marginBottom: "5px"}}>Estonia Experience © 2018-2021</p>
                <p className="footer-author">Website built by <a href="https://github.com/carlosmiceli">Charly</a></p>
            </div>
            <div className="footer-social">
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/p/BxhU2YKAHd8/" target="_blank" ><img alt="" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/icons%2Finstagram.png?alt=media&token=413be086-bfe4-4b94-925d-28ed7dd54481" /></a>
            </div>
        </div>
    )
}

export default Footer