import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';


const Home = () => {
    return (
        <Navbar style={{backgroundColor: "#01530c"}} fixed="top" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">YmAfrica</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Home;