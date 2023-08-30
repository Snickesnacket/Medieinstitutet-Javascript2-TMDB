import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="md">
      <Container className="py-2">
        <Navbar.Brand as={Link} to="/">
          TMDB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/PopularPage">
              Popular
            </Nav.Link>
            <Nav.Link as={NavLink} to="/TopRatedPage">
              Top Rated Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/InTheatersNowPage">
              In Theaters now
            </Nav.Link>
            <Nav.Link as={NavLink} to="/GenrePage">
              Genres
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
