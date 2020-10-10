import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';


function Singin() {
    return (
    <div>
         <Form>
         <Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
    
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Address" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Number</Form.Label>
    <Form.Control type="number" placeholder="Number" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="Reset">
    Reset
  </Button>
</Form>
    </div>
    );
  }
  
  export default Singin;
  