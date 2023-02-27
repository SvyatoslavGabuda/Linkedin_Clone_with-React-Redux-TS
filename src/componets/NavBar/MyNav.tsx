import { Container, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsLinkedin, BsFillPeopleFill, BsFillBellFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { ImHome3 } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import "./myNav.scss";
import { useEffect } from "react";
const MyNav = () => {
  const { pathname: location } = useLocation();

  useEffect(() => {
    console.log(location);
  });

  return (
    <>
      <Navbar expand="sm" className="p-0">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="d-flex align-items-center">
              <BsLinkedin />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-between">
            <Form className="d-none d-md-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
            <div>
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Link className={location === "/" ? "nav-link nav-link-top nav-link-active" : "nav-link nav-link-top"} to="/">
                  <span className="navlabel">Home</span>
                  <ImHome3 />
                </Link>
                <Link className="nav-link nav-link-top" to="/">
                  <span className="navlabel">Rete</span>
                  <BsFillPeopleFill />
                </Link>
                <Link className="nav-link nav-link-top" to="/">
                  <span className="navlabel">Lavoro</span>
                  <MdBusinessCenter />
                </Link>
                <Link className="nav-link nav-link-top" to="/">
                  <span className="navlabel">Messaggi</span>
                  <AiFillMessage />
                </Link>
                <Link className="nav-link nav-link-top" to="/">
                  <span className="navlabel">Notifiche</span>
                  <BsFillBellFill />
                </Link>
                <a className={location === "/profile/me" ? "nav-link profilenav nav-link-active" : "nav-link profilenav"}>
                  <img className="nav-profile-pic rounded-circle" src="https://placekitten.com/300/200" alt="Profile Picture" />
                  <NavDropdown title="Tu" id="navbarScrollingDropdown">
                    <Link to="/profile/me" className="nav-link">
                      Visita il profilo
                    </Link>
                  </NavDropdown>
                </a>

                <Link className="nav-link nav-link-top" to="#">
                  <span className="navlabel">Lavoro</span>
                  <BsFillGrid3X3GapFill />
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
