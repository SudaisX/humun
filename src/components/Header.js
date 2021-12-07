import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = ({ active }) => {
    return (
        <>
            <Navbar expand='lg'>
                <Container style={{ backgroundColor: 'white' }}>
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
                                <Link to='/' className={'navlink' + (active[0] ? ' active' : '')}>
                                    Home
                                </Link>
                            </Nav.Link>

                            {/* <Nav.Link>
                                <Link
                                    to='/about'
                                    className={'navlink' + (active[1] ? ' active' : '')}>
                                    About
                                </Link>
                            </Nav.Link> */}

                            <NavDropdown
                                title='About'
                                id='basic-nav-dropdown'
                                className={active[1] ? ' active' : ''}>
                                <NavDropdown.Item>
                                    <Link to='/hdu' className='navlink-dropdown'>
                                        Habib Debate Union
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/history' className='navlink-dropdown'>
                                        History of HUMUN
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/presidentnote' className='navlink-dropdown'>
                                        President's Note
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* <Nav.Link>
                                <Link
                                    to='/team'
                                    className={'navlink' + (active[1] ? ' active' : '')}>
                                    Meet the Team
                                </Link>
                            </Nav.Link> */}

                            <NavDropdown
                                title='Meet the Team'
                                id='basic-nav-dropdown'
                                className={active[2] ? ' active' : ''}>
                                <NavDropdown.Item>
                                    <Link to='/executivecouncil' className='navlink-dropdown'>
                                        Executive Council
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/secretariat' className='navlink-dropdown'>
                                        Secretariat
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/directorate' className='navlink-dropdown'>
                                        Directoroate
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link>
                                <Link
                                    to='/committees'
                                    className={'navlink' + (active[3] ? ' active' : '')}>
                                    Committees
                                </Link>
                            </Nav.Link>

                            <NavDropdown
                                title='Registration'
                                id='basic-nav-dropdown'
                                style={{ marginRight: '100px' }}
                                className={active[4] ? ' active' : ''}>
                                <NavDropdown.Item>
                                    <Link to='/hdu' className='navlink-dropdown'>
                                        Register Now
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/history' className='navlink-dropdown'>
                                        How to Register
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/presidentnote' className='navlink-dropdown'>
                                        Fee Structure
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/presidentnote' className='navlink-dropdown'>
                                        Rules of Procedure
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/presidentnote' className='navlink-dropdown'>
                                        Equity Policy
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link>
                                <Link
                                    to='/contact'
                                    className={'navlink' + (active[5] ? ' active' : '')}>
                                    Contact Us
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
