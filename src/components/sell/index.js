import React from 'react';
import './style.scss';

const Sell = () => {
    return (
        <div className="sell-cont">
            <h1>Ready to Join Us?</h1>
            <div className="sell-cols">
                <div className="sell-option">
                    <h3>Individuals</h3>
                    <p className="sell-description">Description of trip for individuals</p>
                    <p>Price, join instructions</p>
                </div>
                <div className="sell-option">
                    <h3>Enterprise</h3>
                    <p className="sell-description">Customized private trips for companies, associations and schools</p>
                    <p>Inquire at <a href="www.google.com">hello@estoniaexp.com</a> or fill the form and we will get back to you.</p>    
                </div>
            </div>
        </div>
    )
}

export default Sell