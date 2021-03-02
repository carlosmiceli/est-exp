import React, { useState } from 'react';
import "./style.scss"

const Cards = () => {
    const [activeCardIndex, setActiveCardIndex] = useState({
        current: 0,
        previous: ""
    });

    // const getClass = (new Promise((res, rel) => {
    //     window.addEventListener = e => {
    //         console.log(e.target.className)
    //     }
    // }))

    // window.addEventListener("click", function(e) {
    //     if (e.target.className.indexOf())
    // })

    const switchCards = (newCardIndex) => {
        if (activeCardIndex.current !== newCardIndex) {
            setActiveCardIndex({
                
                current: newCardIndex
            })
        }
    }

    const defOption = (prevIndex) => {
        let opt = "option" + prevIndex
        return opt
    }

    return (
        <div className="cards-cont">
            <h1 className="cards-heading">Why Estonia?</h1>
            <div className="cards-slider">
                <div 
                className={`card-model option
                    ${activeCardIndex.current === 0 
                    ? 
                    'active'
                    : 
                    ""}

                    ${activeCardIndex.previous === 0
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }`
                }
                id="card-services" 
                onClick={() => switchCards(0)}>
                    <p className={`card-quote ${activeCardIndex.current !== 0 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    Most services are available online, which saves Estonians +800 years of work-time annually.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 1
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 1 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-obama" 
                onClick={() => switchCards(1)}>
                    <p className={`card-quote uno ${activeCardIndex.current !== 1 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    “I should have called the Estonians when we were setting up our health care website.” <br /><br/>Barack Obama</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 2
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 2 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-pope" 
                onClick={() => switchCards(2)}>
                    <p className={`card-quote ${activeCardIndex.current !== 2 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    First country to create an "electronic residency".</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 3
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 3 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-forest" 
                onClick={() => switchCards(3)}>
                    <p className={`card-quote ${activeCardIndex.current !== 3 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    First country to declare Internet a social right.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 4
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 4 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-school" 
                onClick={() => switchCards(4)}>
                    <p className={`card-quote ${activeCardIndex.current !== 4 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    All schools have been connected to the internet since the 90's.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 5
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 5 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-vote" 
                onClick={() => switchCards(5)}>
                    <p className={`card-quote ${activeCardIndex.current !== 5 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    First country to implement online voting.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 6
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 6 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-visa" 
                onClick={() => switchCards(6)}>
                    <p className={`card-quote ${activeCardIndex.current !== 6 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    First country to offer a "digital nomad" visa.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 7
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 7 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-nations" 
                onClick={() => switchCards(7)}>
                    <p className={`card-quote ${activeCardIndex.current !== 7 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    Founding member of Digital Nations, the leading digital governments of the world.</p>
                </div>
                <div 
                className={`card-model option
                    ${activeCardIndex.previous === 8
                    ?
                    'switched' && defOption(activeCardIndex.current)
                    :
                    ""
                    }
                    
                    ${activeCardIndex.current === 8 
                    ? 
                    'active'
                    : 
                    ""}`
                }
                id="card-wall" 
                onClick={() => switchCards(8)}>
                    <p className={`card-quote ${activeCardIndex.current !== 8 
                    ? 
                    'hidden' 
                    : 
                    ''}`}>
                    Most startups and unicorns per capita in the world.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;