import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">The Importer</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Start</Nav.Link>
            <Nav.Link href="#features">Imports</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;