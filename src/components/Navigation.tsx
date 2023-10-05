import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
import RecentlyViewedMoviesFN from './RecentlyViewedMovies';


const Navigation = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="md">
      <Container className="py-2">
        <Navbar.Brand as={Link} to="/">
          TMDB
        </Navbar.Brand>
        <RecentlyViewedMoviesFN />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/TopRatedPage">
              Top Rated Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/InTheatersNowPage">
              In Theaters now
            </Nav.Link>
            <Nav.Link as={NavLink} to="/GenrePage">
              Genres
            </Nav.Link>
            <Nav.Link as={NavLink} to="/TopDayPage">
              Trending today
            </Nav.Link>
            <Nav.Link as={NavLink} to="/TopWeekPage">
              Trending this week
            </Nav.Link>
            <Nav.Link as={NavLink} to="/SearchPage"> 
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
