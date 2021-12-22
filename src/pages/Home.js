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
            <Container
                className='home home-background-image'
                // style={{
                //     backgroundImage: 'url(images/bg.jpeg)',
                //     borderRadius: '10px',
                //     height: '550px',
                //     color: 'white',
                //     backdropFilter: 'blur(2px)',
                //     backgroundRepeat: 'no-repeat',
                //     // backgroundSize: 'cover',
                // }}>
            ></Container>
            <Container className='home home-background-text'>
                <p className='hdu'>HABIB DEBATE UNION PRESENTS</p>
                <p className='humun'>Habib University Model United Nations IV</p>
                <p className='humun-date'>
                    <i className='fa fa-calendar' aria-hidden='true'></i> February 4-6, 2021
                </p>
                <Link className='register-btn' to='/register'>
                    Register Now! <i class='fa fa-check-circle' />
                </Link>
            </Container>
        </>
    );
};

export default Home;
