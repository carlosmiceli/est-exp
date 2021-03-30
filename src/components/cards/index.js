import React, { useRef, useState, useEffect } from 'react';
import { firestore } from '../../firebase/utils'
import "./style.scss"

const Cards = () => {
    const [cards, setCards] = useState([]);
    const cardsContRef = useRef(null);
    const singleCardRef = useRef([])

    let initialPosition = null;
    let moving = false;
    let transform = 0;
    const windowWidth = window.innerWidth

    useEffect(() => {
        firestore
        .collection("cards")
        .get()
        .then(res => {
            const tempCards = []
            res.forEach(card => {
                tempCards.push(card.data())
            })
            const shuffleCards = (cards) => {
                for (let i = cards.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = cards[i];
                    cards[i] = cards[j];
                    cards[j] = temp;
                }
                setCards(cards)
            }
            shuffleCards(tempCards)
        })
        .catch(err => console.log(err))
    }, [cards.length])

    const onScroll = () => {
        if (singleCardRef.current) {
            for (let i = 0; i <= singleCardRef.current.length; i++) {
                if (singleCardRef.current[i]) {
                    const cardPos = singleCardRef.current[i].getBoundingClientRect()
                    console.log(cardPos)
                    singleCardRef.current[i].style.zIndex = i + 5

                    if (windowWidth < 800) {
                        //Opacity Left Side
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.25) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.25 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.15)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.15) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                    else if (windowWidth > 800 && windowWidth < 1200) {
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.1) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.15 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.1)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.1) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                    else {
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.1) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.2 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.1)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.05) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                }
            }
        }
    }

    window.addEventListener("mousedown", e => {
        initialPosition = e.pageX;
        moving = true;
        if (cardsContRef.current) {
            const transformMatrix = window.getComputedStyle(cardsContRef.current).getPropertyValue("transform");
            if (transformMatrix !== "none") {
                transform = parseInt(transformMatrix.split(",")[4].trim());
            }
        }
    })

    window.addEventListener("mousemove", e => {
        if (moving && singleCardRef.current && singleCardRef.current[singleCardRef.current.length - 1] ) {

            const currentPosition = e.pageX;
            const diff = currentPosition - initialPosition;
            const limits = singleCardRef.current[singleCardRef.current.length - 1].getBoundingClientRect()

            if (cardsContRef.current
                && 
                (transform + diff + limits.width / 2 < windowWidth / 2)
                &&
                (singleCardRef.current.length - 1) * limits.width - Math.abs(transform + diff) + limits.width / 2 > (windowWidth / 2 + (singleCardRef.current.length - 2) * 10)
                )
                {
                cardsContRef.current.style.transform = `translateX(${transform + diff}px)`
            }

            for (let i = 0; i <= singleCardRef.current.length; i++) {
                if (singleCardRef.current[i]) {
                    const cardPos = singleCardRef.current[i].getBoundingClientRect()

                    singleCardRef.current[i].style.zIndex = i + 5

                    if (windowWidth < 800) {
                        //Opacity Left Side
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.25) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.25 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.15)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.15) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                    else if (windowWidth > 800 && windowWidth < 1200) {
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.1) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.15 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.1)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.1) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                    else {
                        if (cardPos.right - cardPos.width / 2 < windowWidth * 0.1) {
                            singleCardRef.current[i].style.opacity = `${100 - (windowWidth * 0.2 - cardPos.right)}%`
                        }
                        //Opacity Right Side
                        else if (cardPos.right > (windowWidth * 0.1)){
                            singleCardRef.current[i].style.opacity = (windowWidth - cardPos.left * 1.05) / 100
                        }
                        else singleCardRef.current[i].style.opacity = 1
                    }
                }
            }
        }    
    })

    window.addEventListener("mouseup", (e) => {
        moving = false;
    })

    return (
        <div id="why-estonia" className="cards-cont">
            <div className="scroll-margin" />
            <h1 className="cards-heading">Why Estonia?</h1>
            <div className="cards-slider" onScroll={onScroll}>
                <div ref={cardsContRef} className="cards-slider-cont">
                    {cards && cards.map((card, index) => {
                        return (
                            <div 
                            id={card.name}
                            ref={e => singleCardRef.current[index] = e} 
                            className="card-model" 
                            style={{backgroundImage: 'url(' + card.image + ')'}}>
                                <div className="text-filter">
                                    <p className="card-quote">{card.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cards;