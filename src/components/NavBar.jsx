import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>


            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container className="p-3 mb-2 " fluid>
                    < Navbar.Brand className=" m-3 col"> <Link to="/"><h1>Candy Store</h1></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavDropdown className="m-3" title="Categoria" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/productos/Chocolate">Chocolate</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/productos/Chicles">Chicles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/productos/Caramelos">Caramelos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <CartWidget />

                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    )
}

export default NavBar