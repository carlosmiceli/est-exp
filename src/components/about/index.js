import { useRef, useState, useEffect } from 'react';
import { firestore } from '../../firebase/utils';
import "./style.css"

const About = () => {
    const [images, setImages] = useState([]);
    const imagesContRef = useRef(null);
    const singleImageRef = useRef([])

    useEffect(() => {
        firestore
        .collection("images")
        .get()
        .then(res => {
            const tempImages = []
            res.forEach(card => {
                tempImages.push(card.data())
            })
            const shuffleImages = (images) => {
                for (let i = images.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = images[i];
                    images[i] = images[j];
                    images[j] = temp;
                }
                setImages(images)
            }
            shuffleImages(tempImages)
        })
        .catch(err => console.log(err))
    }, [images.length])

    return (
        <div  className="about-cont">
            <div id="about" className="scroll-margin"/>
            <h1 className="about-heading">What happens in Estonia Experience?</h1>
            <div className="images-slider" style={{ overflowX: "scroll" }}>
                <div ref={imagesContRef} className="images-slider-cont">
                    {images && images.map((image, index) => {
                        return (
                            <div 
                            ref={e => singleImageRef.current[index] = e}> 
                                <img className="image-model" alt="" src={image.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className="about-text">
                    Estonia Experience is your opportunity to immerse yourself in the most advanced digital society in the world.
                <br/>
                <br/>
                    You will learn from companies and leaders that are changing how the world thinks about governance, banking, legislation, security, nationalities, travel, and more.
                <br/>
                <br/>    
                    Stroll through Europe's oldest and virtually intact medieval city, and understand what led this tiny post-soviet nation to become one of the biggest forces of innovation of the XXI century.
                </p>
            </div>
        </div>
    )
}

export default About