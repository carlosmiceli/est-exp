import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { firestore } from '../../firebase/utils'
import './style.scss';

const Sell = () => {
    const [apply, setApply] = useState(false),
            switchApply = () => {
                setApply(!apply)
            }
    const [openModalApply, setOpenModalApply] = useState(false);
    const handleClose = () => setOpenModalApply(false);
    const handleShow = () => setOpenModalApply(true);

    const handleSubmit = e => {
        e.preventDefault()
        firestore.collection("applications").add({
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            location: e.target[3].value,
            date: new Date().toUTCString()
        })
        handleShow()
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""
        setTimeout(() => {
            handleClose()
        }, 10000);
    }

    return (
        <div  className="sell-cont">
            <div id="join-us" className="scroll-margin"/>
            <h1>Ready to Join Us?</h1>
            <div className={`modal-apply ${openModalApply ? "modal-apply-open" : ""}`}>
                <div className="modal-apply-filter">
                    <h4 className="modal-apply-text">
                        Thank you for applying to Estonia Experience! <br/> We will be in touch with you soon.
                    </h4>
                </div>
            </div>
            <div className="sell-cols">
                <div className="sell-option">
                    <h3>2022 <br/>Summer Edition</h3>
                    <div className="sell-description">
                        <p>Dates: May 8th to May 15th, 2022</p>
                        <p>Only 15 slots available</p>
                        <p>Price: €3190<br/><span style={{fontSize: "12px"}}>Ask us about payment plans</span></p>
                    </div>
                    <div className={`${apply ? "apply-disappear" : "apply-visible"}`}>
                        <button onClick={switchApply} className="apply-button">Apply</button>
                    </div>
                    <div className={`${apply ? "application-visible" : "application-hidden"}`}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="application-form">
                                <Form.Control value={undefined} type="text" placeholder="Name" required />
                                <Form.Control value={undefined} type="email" placeholder="Email" required />
                                <Form.Control value={undefined} type="text" placeholder="Phone/Whatsapp (add area code)" required />
                                <Form.Control value={undefined} type="text" placeholder="Where do you live?" required />
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
                        <p><a href="#contact-us">Fill the form</a> or inquire at <a href="www.google.com">hello@estoniaexp.com</a> and we will get back to you.</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell