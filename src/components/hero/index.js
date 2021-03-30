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

    const scrollDown = () => {
        setTimeout(function(){
            document.getElementById("why-estonia").scrollIntoView();
          }, 400)
    }

    return (
        <div id="hero" className="hero-cont">
            <div className="hero-columns">
                <div className="hero-column-1">
                    <h1 className="hero-heading">Explore the most digital country in the world</h1>
                    <button onClick={scrollDown} className="hero-button">Live the Estonia Experience</button>
                </div>
                <div className="hero-column-2">
                    <img src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/Untitled%20design%20(10).png?alt=media&token=98393b51-adc0-4357-abd4-d68e03f8feff" alt="" />
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