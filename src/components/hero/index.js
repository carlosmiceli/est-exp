import React, {useState} from 'react';
import "./style.css"

const Hero = () => {
    const [scrollArrows, setScrollArrows] = useState(false)

    const arrowsDisappear = () => {
        if (window.scrollY >= 60) {
            setScrollArrows(true)
        }
        else setScrollArrows(false)
    }

    window.addEventListener('scroll', arrowsDisappear)
    return (
        <div id="hero" className="hero-cont">
            <div className="hero-columns">
                <div className="hero-column-1">
                    <h1 className="hero-heading">Explore the most digital country in the world</h1>
                    <button className="hero-button">Live the Estonia Experience</button>
                </div>
            </div>
            <div className={`scroll
            ${scrollArrows
            ?
            'scroll-transparent'
            :
            ""}`}> 
                <div className="scroll-down"></div>
                <div className="scroll-down"></div>
                <div className="scroll-down"></div>
            </div>
        </div>
    );
}

export default Hero;