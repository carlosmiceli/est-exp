import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { firestore } from '../../firebase/utils'
import './style.css'

const ContactForm = () => {
    const [openModalQuestion, setOpenModalQuestion] = useState(false);
    const handleClose = () => setOpenModalQuestion(false);
    const handleShow = () => setOpenModalQuestion(true);

    const handleSubmit = e => {
        e.preventDefault()
        firestore.collection("contact").add({
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            question: e.target[3].value,
            date: new Date().toUTCString()
        })
        handleShow()
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""
        setTimeout(() => {
            handleClose()
        }, 4000);
    }

    return (
        <div id="contact-us" className="form-cont">
            <h1>Any Questions?</h1>
            <div className={`modal-question ${openModalQuestion ? "modal-question-open" : ""}`}>
                <div className="modal-question-filter">
                    <h4 className="modal-question-text">
                        Thank you! We will get back to you soon.
                    </h4>
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="contact-form">
                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control type="text" placeholder="Phone (add area code)" required />
                    <Form.Control as="textarea" rows={4} placeholder="What's your question?" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm