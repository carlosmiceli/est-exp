import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/utils'
import './style.scss';

const Testimonials = () => {
    const [testims, setTestims] = useState([]);

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
    
    const focusTestimonial = (testimonialIndex) => {
        const newTestims = [...testims]
        if (testimonialIndex === 1) {
            newTestims.unshift(newTestims.pop())
            setTestims(newTestims)
        }
        else if (testimonialIndex === 3) {
            newTestims.push(newTestims.shift())
            setTestims(newTestims)
        }
        else return
    }

    return (
        <div className="testimonials-cont">
            {testims && testims.map(test => {
            return (
                <div key={testims.indexOf(test)} className={`testimonial-card
                    ${testims.indexOf(test) === 0 || testims.indexOf(test) > 3 
                    ? 
                    'hidden'
                    : 
                    ""}

                    ${testims.indexOf(test) === 1 
                    ? 
                    'top-testimonial'
                    : 
                    ""}

                    ${testims.indexOf(test) === 2
                    ?
                    'middle-testimonial'
                    :
                    ""
                    }

                    ${testims.indexOf(test) === 3
                    ?
                    'lower-testimonial'
                    :
                    ""
                    }
                `}
                onClick={() => focusTestimonial(testims.indexOf(test))}
                >
                    <div className="testimonial-pic">
                        <img src={test.pic} alt="" />
                    </div>
                    <div className="testimonial-content">
                        <h4 className="testimonial-name">{test.name}, {test.title}</h4>
                        <p className="testimonial-text">{test.text}</p>
                        <p className="testimonial-location">{test.location}</p>
                    </div>
                </div>
            )})}
        </div>  
    )
}

export default Testimonials;