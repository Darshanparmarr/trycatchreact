import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}  >Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}  >Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}  >About</Nav.Link>
            <Nav.Link as={Link} to={"/counter"}  >Counter</Nav.Link>
            <Nav.Link as={Link} to={"/news"}  >News</Nav.Link>
            <Nav.Link as={Link} to={"/news/article1"}  >Article 1</Nav.Link>
            <Nav.Link as={Link} to={"/news/article1/article2"}  >Article 2</Nav.Link>
            <Nav.Link as={Link} to={"/lecture"}  >Lecture </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;