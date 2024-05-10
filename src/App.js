import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Event from './components/Event/Event';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="flex-column text-center">
        <Container>
          <Navbar.Brand className="w-100">
            <img src={`https://blessfuweb.s3.ca-central-1.amazonaws.com/images/heading/heading.jpg`} alt="Logo" className="navbar-logo" />

            福增佛学会 Bless Fu
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link href="/">首页</Nav.Link>
            <Nav.Link href="/event">共修安排</Nav.Link>
            <Nav.Link href="/donate">供养祈福</Nav.Link>
            <Nav.Link href="/about">关于我们</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="content-area" fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;