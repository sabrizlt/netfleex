import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

<FontAwesomeIcon icon={faBell} />;

function NavScrollExample() {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width="100"
            className="d-inline-block align-top"
            alt="Netflix logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="text-white nav-link" to="/">
              Home
            </Link>
            <Link className="text-white nav-link" to="/TvShow">
              Tv Shows
            </Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#latest">Latest</Nav.Link>
            <Nav.Link href="#my list">My list</Nav.Link>
          </Nav>
          <FontAwesomeIcon className="text-light mx-2" icon={faSearch} />
          <Nav.Link className="text-light mx-2" href="#tv show">
            KIDS
          </Nav.Link>

          <FontAwesomeIcon className="text-light mx-2" icon={faBell} />
          <FontAwesomeIcon className="text-light mx-2" icon={faUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;