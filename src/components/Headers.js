import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Headers() {
  return (
    <div>
      <header>
        <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">ANN Traders</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i>LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </div>
  )
}

export default Headers
