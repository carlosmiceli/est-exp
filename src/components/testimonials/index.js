import React, { useState, useEffect, useRef } from 'react';
import { firestore } from '../../firebase/utils'
import './style.scss';

const Testimonials = () => {
    const [testims, setTestims] = useState([]);
    const testBioRef = useRef(null);
    const testTextRef = useRef(null);

    useEffect (() => {
        firestore
        .collection("testimonials")
        .get()
        .then(res => {
            const tempTestimonials = []
            res.forEach(dep => {
                tempTestimonials.push(dep.data())
            })
            setTestims(tempTestimonials)
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
        <div id="testimonials" className="testimonials-cont">
            {testims[1] && 
                <div className="testimonial-card">
                    <div className="testimonial-bio" ref={testBioRef}>
                        <div className="testimonial-pic">
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <p className="testimonial-location">{testims[1].name}, {testims[1].location}</p>
                        <p className="testimonial-name">{testims[1].title}</p>
                    </div>
                    <div className="testimonial-content" >
                        <p className="testimonial-text" ref={testTextRef}>{testims[1].text}</p>
                    </div>
                    <div className="testimonial-button left-button" 
                    onClick={() => prevTestimonial()}
                    >
                        <img src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/icons%2Fright-arrow%20(1).png?alt=media&token=95d39aeb-9aa1-4fee-aa94-b5d74f12582a" />
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