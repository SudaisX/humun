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

            <Container className='home'>
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
                    <li className='social-list_item'>
                        <a
                            href='https://www.facebook.com/humun/'
                            className=' social-list_link facebook'>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                    <li className='social-list_item'>
                        <a
                            href='https://instagram.com/humun'
                            className='social-list_link instagram'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
                <small className='footer-text'>&copy; HUMUN 2021</small>
            </footer>
        </>
    );
};

export default Home;
