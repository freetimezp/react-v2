import React from 'react';
import {Container, Form, Button} from "react-bootstrap";

class Contacts extends React.Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Form.Text>
                            We'll never share your email to anyone else
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Textarea</Form.Label>
                        <Form.Control as="textarea" rows="5"  />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="check me out" />
                    </Form.Group>
                    <Button type="submit" variant="dark">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;