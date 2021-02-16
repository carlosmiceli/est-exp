import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import "./style.css"

const AutoplaySlider = withAutoplay(AwesomeSlider);

const About = () => {
    return (
        <div className="about-cont">
            <h1 className="about-heading">What happens in Estonia Experience?</h1>
            <AutoplaySlider 
            animation="foldOutAnimation" 
            cssModule={[CoreStyles, AnimationStyles]} 
            bullets={false} 
            play={true}
            cancelOnInteraction={false}
            interval={5000}
            media={[
                {   
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F2019-05-13%2011.00.40.jpg?alt=media&token=694f72b1-950e-4f71-908f-4e0c03f4ba10',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c37e1791e6839e721bc90_2019_05_18_13_56_36.jpg?alt=media&token=4736adbf-b5a6-442f-81bb-4300db2953b3',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c38fd41b1b86b4190602c_img_0208.jpg?alt=media&token=32484131-8a12-406a-9d6e-46909990508a',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FDSC00625.JPG?alt=media&token=ee648241-c31f-4cfe-90b0-960e0454a6e8',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c37f039743a16b2e85f92_2019_02_12_15_29_38.jpg?alt=media&token=ae486612-9147-4b7b-a053-b2fbab04e8b2',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-08-10%20at%2012.19.38%20PM.jpeg?alt=media&token=cb5c9804-7ae0-4acb-bdf8-f6732ecba35b',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-02-12%20at%2011.01.31%20PM.jpeg?alt=media&token=0f33b6e5-3046-4349-9087-3d8a2f223b0f',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c3911f566d2e66c97d84f_2019_10_19_13_21_23.jpg?alt=media&token=4710c13b-c9c4-4362-9e86-8bd80b0c9419',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-02-12%20at%205.29.37%20PM.jpeg?alt=media&token=350dd742-1ee3-47ec-b4a4-928555643a2c',
                },
                {
                source: 'https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FIMG_0430.jpg?alt=media&token=24746ff0-6e59-4ec4-8c84-f22357ad9ebe',
                },
            ]}>  
            </AutoplaySlider>
            <p className="about-text">
                Estonia Experience is your opportunity to immerse yourself in the most advanced digital society in the world.
            <br/>
            <br/>
                You will learn from companies and leaders that are changing how the world thinks about governance, banking, legislation, security, nationalities, travel, and more.
            <br/>
            <br/>    
                Stroll through Europe's oldest and virtually intact medieval city, and understand what led this tiny post-soviet nation to become one of the biggest forces of innovation of the XXI century.
            {/* <br/>
            <br/>
                Write to us to hello@estoniaexp.com or fill the form to learn about how we can provide a private, customized experience for your company, association, or school. */}
            </p>
            {/* <img className="about-image-left" id="image-left-1" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F2019-05-13%2011.00.40.jpg?alt=media&token=694f72b1-950e-4f71-908f-4e0c03f4ba10" />
                <img className="about-image-left" id="image-left-2" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c37e1791e6839e721bc90_2019_05_18_13_56_36.jpg?alt=media&token=4736adbf-b5a6-442f-81bb-4300db2953b3" />
                <img className="about-image-left" id="image-left-3" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c38fd41b1b86b4190602c_img_0208.jpg?alt=media&token=32484131-8a12-406a-9d6e-46909990508a" />
                <img className="about-image-left" id="image-left-4" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FDSC00625.JPG?alt=media&token=ee648241-c31f-4cfe-90b0-960e0454a6e8" />
                <img className="about-image-right" id="image-right-1" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c37f039743a16b2e85f92_2019_02_12_15_29_38.jpg?alt=media&token=ae486612-9147-4b7b-a053-b2fbab04e8b2" />
                <img className="about-image-right" id="image-right-2" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-08-10%20at%2012.19.38%20PM.jpeg?alt=media&token=cb5c9804-7ae0-4acb-bdf8-f6732ecba35b" />
                <img className="about-image-right" id="image-right-3" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-02-12%20at%2011.01.31%20PM.jpeg?alt=media&token=0f33b6e5-3046-4349-9087-3d8a2f223b0f" />
                <img className="about-image-right" id="image-right-4" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2F5f9c3911f566d2e66c97d84f_2019_10_19_13_21_23.jpg?alt=media&token=4710c13b-c9c4-4362-9e86-8bd80b0c9419" />
                <img className="about-image-middle" id="image-middle-1" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FWhatsApp%20Image%202019-02-12%20at%205.29.37%20PM.jpeg?alt=media&token=350dd742-1ee3-47ec-b4a4-928555643a2c" />
                <img className="about-image-middle" id="image-middle-2" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/about%2FIMG_0430.jpg?alt=media&token=24746ff0-6e59-4ec4-8c84-f22357ad9ebe" /> */}
        </div>
    )
}

export default About