import { Container, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import "./myNav.scss";
const MyNav = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="d-flex align-items-center">
              <BsLinkedin />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-between">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
            <div>
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Link className="nav-link" to="/">
                  Home
                  <ImHome3 />
                </Link>
                <Link className="nav-link" to="/">
                  Rete
                </Link>
                <Link className="nav-link" to="/">
                  Lavoro
                </Link>
                <Link className="nav-link" to="/">
                  Messaggi
                </Link>
                <Link className="nav-link" to="/">
                  Notifiche
                </Link>
                <NavDropdown title="Tu" id="navbarScrollingDropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="#">
                  Lavoro
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
