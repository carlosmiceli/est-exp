import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import './style.scss'

const Companies = () => {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as ="h3">e-Estonia</Popover.Title>
            <Popover.Content>
                The goal of e-Estonia Briefing Centre is to inspire global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.
            </Popover.Content>
        </Popover>
    )

    return (
        <div className="companies-cont">
            <h1 className="companies-heading">Companies we've visited</h1>
            <div className="companies-logos">
                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                    <img variant="success" className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/logos%2Ftaltech.png?alt=media&token=077615fd-7029-4893-a2e9-f74e844ae0a0"/>
                </OverlayTrigger>
                
                {/* <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/estonia-experience.appspot.com/o/e-estonia-logo.png?alt=media&token=639122b7-2426-4502-8615-721163bb2643"/> */}
            </div>
        </div>
    );
}

export default Companies;