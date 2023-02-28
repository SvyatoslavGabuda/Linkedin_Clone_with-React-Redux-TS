import { Container, Navbar, Nav, NavDropdown, Form, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsLinkedin, BsFillPeopleFill, BsFillBellFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { ImHome3 } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import "./myNav.scss";
import { useAppSelector } from "../../app/hooks";
const MyNav = () => {
  const { pathname: location } = useLocation();
  const myProfile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      <Navbar expand="sm" className="p-0 bg-light mb-3 sticky-top">
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
                <div className="d-flex flex-column justify-content-center text-center align-items-center" style={{ minWidth: "75px" }}>
                  <Link to="/profile/me">
                    <div style={{ position: "relative" }}>
                      <img className="nav-profile-pic rounded-circle" src={myProfile?.image} alt="Profile" />
                      <div
                        className="d-block rounded-circle"
                        style={{
                          position: "absolute",
                          backgroundColor: "green",
                          width: "10px",
                          height: "10px",
                          bottom: "-2px",
                          right: "-2px",
                          border: "2px solid white",
                        }}
                      ></div>
                    </div>
                  </Link>
                  <NavDropdown
                    title="Tu"
                    id="navbarScrollingDropdown"
                    align={"end"}
                    className={location === "/profile/me" ? "nav-link profilenav nav-link-active p-0" : "nav-link profilenav p-0"}
                  >
                    <div className="dd-profile">
                      <div style={{ position: "relative" }}>
                        <img src={myProfile?.image} alt="Profile" className="ddprofileimg rounded-circle" />{" "}
                        <div
                          className="d-block rounded-circle"
                          style={{
                            position: "absolute",
                            backgroundColor: "green",
                            width: "15px",
                            height: "15px",
                            bottom: "0px",
                            right: "0px",
                            border: "3px solid white",
                          }}
                        ></div>
                      </div>
                      <div className="ddprofilebody px-2">
                        <h6 className="mb-1">{myProfile?.name + " " + myProfile?.surname}</h6>
                        <p>{myProfile?.title}</p>
                      </div>
                    </div>
                    <Link to="/profile/me" className="rounded-pill py-1 me-2 my-2 Button2 openprofilebtnnav">
                      Visita il profilo
                    </Link>
                    <hr />
                    <h6>Account</h6>
                    <Link to="/" className="nav-link">
                      Impostazioni e Privacy
                    </Link>
                    <Link to="/" className="nav-link">
                      Guida
                    </Link>
                    <Link to="/" className="nav-link">
                      Lingua
                    </Link>
                    <hr />
                    <h6>Gestisci</h6>
                    <Link to="/" className="nav-link">
                      Post e attività
                    </Link>
                    <Link to="/" className="nav-link">
                      Account per la pubblicazione di offerte
                    </Link>
                    <hr />
                    <Link to="/" className="nav-link">
                      Esci
                    </Link>
                  </NavDropdown>
                </div>

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
