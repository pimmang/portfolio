import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarComponent = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);

  const changeNavbarBacground = () => {
    window.scrollY > 25 ? setChangeNavbar(true) : setChangeNavbar(false);
  };

  useEffect(() => {
    changeNavbarBacground();
    window.addEventListener("scroll", changeNavbarBacground);
  });
  return (
    <Navbar expand="lg" className="animate__animated animate__fadeInDown">
      <Container>
        <Navbar.Brand href="/" className="fs-5 fw-bold">
          Firman Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center text-center ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to="/TentangSaya">Tentang Saya</NavLink>
          </Nav>
          <div className="d-flex gap-2 justify-content-center">
            <div className="text-center">
              <a href="https://wa.me/+6282188740479">
                <button>Hubungi Saya</button>
              </a>
            </div>
            <div className="text-center">
              <a href="https://drive.google.com/file/d/1DYh6fWAPoZfj785l71pzNKGfMUoz3ERf/view?usp=sharing">
                <button className="btn btn-danger">CV</button>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
