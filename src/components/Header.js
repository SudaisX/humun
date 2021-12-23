import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = ({ active }) => {
    return (
        <>
            <Navbar expand={active[0] ? 'xs' : 'xl'}>
                <Container
                    style={
                        {
                            /* backgroundColor: '#907560' */
                        }
                    }>
                    <Navbar.Brand>
                        <div>
                            <img
                                src='/images/logo-right.png'
                                alt='logo'
                                style={{ width: '200px' }}
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    />
                    <Navbar.Collapse
                        id='basic-navbar-nav'
                        className={active[0] ? 'home-navbar-collapse' : ''}>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <Link
                                    to='/'
                                    className={
                                        (active[0] ? 'home-navlink' : 'navlink') +
                                        (active[0] ? ' active' : '')
                                    }>
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link
                                    to='/about'
                                    className={
                                        (active[0] ? 'home-navlink' : 'navlink') +
                                        (active[1] ? ' active' : '')
                                    }>
                                    About
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown
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
                            </NavDropdown> */}

                            {/* <Nav.Link>
                                <Link
                                    to='/team'
                                    className={'navlink' + (active[1] ? ' active' : '')}>
                                    Meet the Team
                                </Link>
                            </Nav.Link> */}

                            {/* <NavDropdown
                                title='Meet The Team'
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
                            </NavDropdown> */}

                            <li className='nav-item dropdown'>
                                <a
                                    className={
                                        (active[2] ? ' active' : '') + ' nav-link dropdown-toggle'
                                    }
                                    href='/directorate'
                                    id='basic-nav-dropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    style={{ color: active[0] ? 'white' : 'black' }}>
                                    Meet the Team
                                </a>
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link
                                            to='/executivecouncil'
                                            className='navlink-dropdown dropdown-item'>
                                            Executive Council
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/secretariat'
                                            className='navlink-dropdown dropdown-item'>
                                            Secretariat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/directorate'
                                            className='navlink-dropdown dropdown-item'>
                                            Directoroate
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <Nav.Link>
                                <Link
                                    to='/committees'
                                    className={
                                        (active[0] ? 'home-navlink' : 'navlink') +
                                        (active[3] ? ' active' : '')
                                    }>
                                    Committees
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown
                                title='Registration'
                                id='basic-nav-dropdown'
                                style={{ marginRight: '100px' }}
                                className={active[4] ? ' active' : ''}>
                                <NavDropdown.Item>
                                    <Link to='/register' className='navlink-dropdown'>
                                        Register Now
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link to='/feestructure' className='navlink-dropdown'>
                                        Fee Structure
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link to='/healthconcern' className='navlink-dropdown'>
                                        Health Concern Form
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link to='/equitypolicy' className='navlink-dropdown'>
                                        Equity Policy
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown> */}

                            <li className='nav-item dropdown'>
                                <a
                                    className={
                                        (active[4] ? ' active' : '') + ' nav-link dropdown-toggle'
                                    }
                                    href='/register'
                                    id='basic-nav-dropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    style={{
                                        color: active[0] ? 'white' : 'black',
                                        marginRight: '100px',
                                    }}>
                                    Registration
                                </a>
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link
                                            to='/register'
                                            className='navlink-dropdown dropdown-item'>
                                            Register Now
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/feestructure'
                                            className='navlink-dropdown dropdown-item'>
                                            Fee Structure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/healthconcern'
                                            className='navlink-dropdown dropdown-item'>
                                            Health Concern Form
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/equitypolicy'
                                            className='navlink-dropdown dropdown-item'>
                                            Equity Policy
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <Nav.Link>
                                <Link
                                    to='/faqs'
                                    className={
                                        (active[0] ? 'home-navlink' : 'navlink') +
                                        (active[5] ? ' active' : '')
                                    }>
                                    FAQs
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link
                                    to='/contact'
                                    className={
                                        (active[0] ? 'home-navlink' : 'navlink') +
                                        (active[6] ? ' active' : '')
                                    }>
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
