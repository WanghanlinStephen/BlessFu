import React from 'react';
import { Container, Card, Carousel } from 'react-bootstrap';
import './About.css';
import CustomFooter from '../Footer/CustomFooter';

const About = () => (
  <div>
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="text-section english">Google Map:</Card.Title>
          <Card.Img className="hover-effect" variant="bottom" src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/about/map.png`} alt="Google Map" />
        </Card.Body>
      </Card>
    </Container>
    <CustomFooter />
  </div>


);

export default About