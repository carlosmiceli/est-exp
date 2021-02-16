import React from 'react';
import "./style.css"

const Hero = () => {
    return (
        <div className="hero-cont">
            <div className="hero-columns">
                <div className="hero-map" />
                <div className="hero-column-1">
                    <h1 className="hero-heading">Explore the most digital country in the world</h1>
                    <button className="hero-button">Live the Estonia Experience</button>
                </div>
            </div>
            <div className="scroll"> 
                <div className="scroll-down"></div>
                <div className="scroll-down"></div>
                <div className="scroll-down"></div>
            </div>
        </div>
    );
}

export default Hero;