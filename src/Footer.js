import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

function Footer() {
    return (
      <div className="App">
       <Card style={{ width: '100rem' }}>
  <Card.Body>
    
    <Card.Text>
    CORPORATE OFFICE <br></br>
9242 Lightwave Ave.<br></br>
Suite 100 <br></br>
San Diego, CA 92123 <br></br>
T: 619-702-1700<br></br>
F: 619-702-1711<br></br>
    </Card.Text>
    <Card.Title>© 2020 Epsilon Systems Solutions, Inc </Card.Title>
  </Card.Body>
</Card>
      </div>
    );
  }
  
  export default Footer;