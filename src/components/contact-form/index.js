import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './style.css'

const ContactForm = () => {

    return (
        <div className="form-cont">
            <h1>Contact Us</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control type="text" placeholder="Phone (add area code)" required />
                    <Form.Control as="textarea" rows={3} placeholder="What's your question?" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm