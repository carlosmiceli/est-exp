import React from 'react';
import "./style.css"

const Team = () => {
    return (
        <div  className="team-cont">
            <div id="team" className="scroll-margin"/>
            <h1>Founders</h1>
            <div className="team-col">
                <div className="team-member">
                    <img className="team-pic" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/Carlos%20Miceli%20Avatar.jpg?alt=media&token=04eacce4-9aa5-495d-a431-3fc526ee0755"/>
                    <p className="team-bio">Carlos Miceli is an entrepreneur, developer, speaker and writer from Buenos Aires, Argentina. In 2015, he became the first Argentinian e-Resident of Estonia while living and working in Tallinn, and was asked to present his story as a case study during the early phase of the e-Residency program. In 2019 he was granted an Estonian Startup Visa. He has spoken at many institutions worldwide, including Harvard, Stanford, MIT, and more. Apertura magazine, the most important business magazine of Latin America, named Carlos a Top Leader of Argentina Under 35.</p>
                </div>
                <div className="team-member">
                    <img className="team-pic" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/qLpd6Bfw%20copy.jpg?alt=media&token=a34073fb-e4d6-457b-b286-72f9772bce6f" />
                    <p className="team-bio">Kadri Timuska, born and raised in Estonia, is Head of HR at Klaus and has a degree from Tallinn University. She is passionate about global trends in the HR sector, languages, learning methodologies, and event management. She was a Board Member in AEGEE-Tallinn where she organized multiple international events as well as took part in event management workshops throughout Europe. She speaks fluent Estonian, English, Russian, and basic German and Spanish.</p>    
                </div>
            </div>
        </div>
    )
}

export default Team