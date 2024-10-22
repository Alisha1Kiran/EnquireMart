import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headerc = () => {
  return (
    <header>
          <Navbar expand="lg">
              <Container className="justify-content-center">
                  <Navbar.Brand className="justify-content-center navHeader" href="#home">EnquireMart</Navbar.Brand>
                  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav className="justify-content-end">
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                      </Nav>
                  </Navbar.Collapse> */}
              </Container>
          </Navbar>
      </header>
  )
}

export default Headerc