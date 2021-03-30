import React, { useState, useEffect, useRef } from 'react';
import { firestore } from '../../firebase/utils'
import './style.scss';

const Testimonials = () => {
    const [testims, setTestims] = useState([]);
    const testBioRef = useRef(null);
    const testTextRef = useRef(null);
    const testPicRef = useRef(null);

    useEffect (() => {
        firestore
        .collection("testimonials")
        .get()
        .then(res => {
            const tempTestimonials = []
            res.forEach(dep => {
                tempTestimonials.push(dep.data())
            })
            const shuffleTestimonials = (testimonials) => {
                for (let i = testimonials.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = testimonials[i];
                    testimonials[i] = testimonials[j];
                    testimonials[j] = temp;
                }
                setTestims(testimonials)
            }
            shuffleTestimonials(tempTestimonials)
        })
        .catch(err => console.log(err))
    }, [])
    
    const prevTestimonial = () => {
        const newTestims = [...testims]
        if (testBioRef.current && testTextRef.current) {
            testBioRef.current.classList = "testimonial-bio hidden-testimonial"
            testTextRef.current.classList = "testimonial-text hidden-testimonial"
            setTimeout(() => {
                newTestims.unshift(newTestims.pop())
                setTestims(newTestims)
                testBioRef.current.classList = "testimonial-bio"
                testTextRef.current.classList = "testimonial-text"
            }, 1000);
        }
    }

    const nextTestimonial = () => {
        const newTestims = [...testims]
        if (testBioRef.current && testTextRef.current) {
            testBioRef.current.classList = "testimonial-bio hidden-testimonial"
            testTextRef.current.classList = "testimonial-text hidden-testimonial"
            setTimeout(() => {
                newTestims.push(newTestims.shift())
                setTestims(newTestims)
                testBioRef.current.classList = "testimonial-bio"
                testTextRef.current.classList = "testimonial-text"
            }, 1000);
        }
    }

    return (
        <div className="testimonials-cont">
            <div id="testimonials" className="scroll-margin"/>
            {testims && testims[0] &&
                <div className="testimonial-card">
                    <div className="testimonial-bio" ref={testBioRef}>
                        <div className="testimonial-pic" ref={testPicRef} style={{backgroundImage: `url("${testims[0].photo}")`}} alt="" />
                        <p className="testimonial-location">{testims[0].name}, {testims[0].location}</p>
                        <p className="testimonial-name">{testims[0].title}</p>
                    </div>
                    <div className="testimonial-content" >
                        <p className="testimonial-text" ref={testTextRef}>{testims[0].text}</p>
                    </div>
                    <div className="testimonial-button left-button" 
                    onClick={() => prevTestimonial()}
                    >
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/icons%2Fright-arrow%20(1).png?alt=media&token=95d39aeb-9aa1-4fee-aa94-b5d74f12582a" />
                    </div>
                    <div className="testimonial-button right-button" 
                    onClick={() => nextTestimonial()}
                    >
                        <img src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/icons%2Fright-arrow%20(1).png?alt=media&token=95d39aeb-9aa1-4fee-aa94-b5d74f12582a" />
                    </div>
                </div>
            }
        </div>  
    )
}

export default Testimonials;