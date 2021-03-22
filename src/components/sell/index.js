import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import './style.scss';

const Sell = () => {
    const [apply, setApply] = useState(false)

    const switchApply = () => {
        setApply(!apply)
    }

    return (
        <div id="join-us" className="sell-cont">
            <h1>Ready to Join Us?</h1>
            <div className="sell-cols">
                <div className="sell-option">
                    <h3>2021 Summer Edition</h3>
                    <div className="sell-description">
                        <p>Dates: TBD</p>
                        <p>Price: US$ TBD</p>
                        <p>Applications open until TBD, 2021</p>
                    </div>
                    <div className={`${apply ? "apply-disappear" : "apply-visible"}`}>
                        <button onClick={switchApply} className="apply-button">Apply</button>
                    </div>
                    <div className={`${apply ? "application-visible" : "application-hidden"}`}>
                        <Form>
                            <Form.Group controlId="application-form">
                                <Form.Control type="text" placeholder="Name" required />
                                <Form.Control type="email" placeholder="Email" required />
                                <Form.Control type="text" placeholder="Phone/Whatsapp (add area code)" required />
                                <Form.Control type="text" placeholder="Where do you live?" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="sell-option">
                    <h3>Enterprise</h3>
                    <div className="sell-description">
                        <p>Customized private trips for companies, associations and schools.</p>
                        <p><a href="">Fill the form</a> or inquire at <a href="www.google.com">hello@estoniaexp.com</a> and we will get back to you.</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell