import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import logo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import '../Navbar.css';
import { useNavigate } from "react-router-dom";

function MyNavbar(props) {
  const history = useNavigate();

  const handleClick = () => {
    signOut(auth).then(val => {
      console.log(val, "val");
      history('/');
    });
  };

  return (
    <div className="header">
      <Navbar expand="lg" style={{ backgroundColor: '#237ABE' }}>
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="map" />
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/modellist">Explore Models</Nav.Link>
              <Nav.Link as={Link} to="/trendings">Trendings</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              {props.name ? (
                <Nav.Link as={Link} to="/" onClick={handleClick}>Sign Out</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

MyNavbar.propTypes = {
  name: PropTypes.string,
};

export default MyNavbar;