import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar expand='lg'>
                <Container>
                    <Navbar.Brand>
                        <div>
                            <img
                                src='/images/logo-right.png'
                                alt='logo'
                                style={{ width: '200px' }}
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto '>
                            <Nav.Link>
                                <Link to='/' className='navlink'>
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to='/about' className='navlink'>
                                    About
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to='/committees' className='navlink'>
                                    Committees
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown title='Committees' id='basic-nav-dropdown'>
                                <NavDropdown.Item>
                                    <Link to='/committees' className='navlink'>
                                        Committee 1
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/committees' className='navlink'>
                                        Committee 2
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/committees' className='navlink'>
                                        Committee 3
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown> */}

                            <Nav.Link style={{ marginRight: '100px' }}>
                                <Link to='/contact' className='navlink'>
                                    Contact Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to='/register' className='navlink'>
                                    Register
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
