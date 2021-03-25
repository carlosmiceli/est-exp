import React, {useState, useEffect} from 'react'
import { firestore } from '../../firebase/utils'
import './style.scss'

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [popIsOpen, setPopIsOpen] = useState([])

    useEffect (() => {
    firestore
    .collection("companies")
    .get()
    .then(res => {
        const tempCompanies = []
        res.forEach(dep => {
        tempCompanies.push(dep.data())
        })
        const popStates = new Array(tempCompanies.length).fill(false)
        setCompanies(tempCompanies)
        setPopIsOpen(popStates)
    })
    .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const popClickEvent = (e) => {
          if (e.target.id) {
            let newArr = [...popIsOpen]
            newArr.fill(false)
            newArr[e.target.id] = true
            setPopIsOpen(newArr);
          }
          else {
            let newArr = [...popIsOpen]
            newArr.fill(false)
            setPopIsOpen(newArr);
          }
        };
    
        if (popIsOpen) {
          window.addEventListener('click', popClickEvent);
        }
    
        return () => {
          window.removeEventListener('click', popClickEvent);
        }
    
    }, [popIsOpen])
    
    return (
        <div  className="companies-cont">
            <div id="companies" className="scroll-margin"/>
            <h1 className="companies-heading">Companies we've visited</h1>
            <div className="companies-logos">
                {companies.map((comp, index) => (
                    <div className="popover-cont">
                        <div className={`popover ${popIsOpen[index] ? 'popover-open' : ""}`} id={index}>
                            <h3>{comp.name}</h3>
                            <p>{comp.description}</p>
                            <a target="_blank" href={comp.url}>Visit website</a>
                        </div>
                        <div className={`logo 
                        ${comp.name === "e-Estonia" 
                        || comp.name === "Monese" 
                        || comp.name === "TalTech" 
                        || comp.name === "EstBAN"
                        ?
                        "reduce-logo"
                        :
                        ""}`}>
                            <img variant="success" alt="" id={index} src={comp.logo}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies;