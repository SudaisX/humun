import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = ({ setActive }) => {
    useEffect(() => {
        document.title = 'HUMUN';
        setActive([true, false, false, false, false]);
    }, [setActive]);
    return (
        <>
            <div className='home home-background-image'></div>
            <div className='home home-background-image-overlay'></div>

            <Container className='home' style={{ paddingTop: '30px' }}>
                <img src='/images/logo.png' alt='logo' style={{ maxWidth: '150px' }} />
                <p className='hu'>Habib University</p>
                <p className='mun'>Model United Nations IV</p>
                <p className='humun-date'>
                    <i className='fa fa-calendar' aria-hidden='true'></i> February 4-6, 2021
                </p>
                <Link className='register-btn' to='/register'>
                    Register Now! <i class='fa fa-check-circle' />
                </Link>
            </Container>

            <footer className='footer'>
                <ul className='home-social-list'>
                    <li className='social-list_item' style={{ margin: '0' }}>
                        <a
                            href='https://www.facebook.com/HabibUniversityMUN/'
                            className=' social-list_link facebook'>
                            <i className='fab fa-facebook' style={{ color: '#edd5b8' }}></i>
                        </a>
                    </li>
                    <li className='social-list_item' style={{ margin: '0' }}>
                        <a
                            href='https://www.instagram.com/habib_mun/'
                            className='social-list_link instagram'>
                            <i className='fab fa-instagram' style={{ color: '#edd5b8' }}></i>
                        </a>
                    </li>
                </ul>
                {/* <small className='footer-text' style={{ color: 'white' }}>
                    &copy; HUMUN 2021
                </small> */}
            </footer>
        </>
    );
};

export default Home;
