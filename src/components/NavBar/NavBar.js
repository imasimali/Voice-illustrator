import "./NavBar.scss";
import { Navbar, Container} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <div>
            <Navbar className="header">
                <Container>
                <div className="logo">
                    <Link to="/HomePage"><img className="logo-img" src={Logo} alt="logo"/></Link>
                </div>
                <Navbar.Brand className="web-name" href="#home">Voice Illustrator</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Navbar.Text>
                      <Link to="/MyProfile"> <FaUserCircle  className="user-logo"/></Link> 
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>

    );
};

export default NavBar;