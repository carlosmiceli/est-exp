import React, { useState, useEffect } from 'react'
import { firestore } from '../../firebase/utils'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import './style.scss'

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect (() => {
    firestore
    .collection("companies")
    .get()
    .then(res => {
        const tempCompanies = []
        res.forEach(dep => {
        tempCompanies.push(dep.data())
        })
        setCompanies(tempCompanies)
    })
    .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="companies-cont">
            <h1 className="companies-heading">Companies we've visited</h1>
            <div className="companies-logos">
                {companies.map(comp => (
                    <OverlayTrigger trigger="click" key={comp.name} placement="top" overlay={
                        <Popover id="popover-basic">
                            <Popover.Title as ="h3">{comp.name}</Popover.Title>
                            <Popover.Content>
                                {comp.description}
                            </Popover.Content>
                        </Popover>
                        }>
                        <img variant="success" className="logo" src={comp.logo}/>
                    </OverlayTrigger>
                ))}
            </div>
        </div>
    );
}

export default Companies;