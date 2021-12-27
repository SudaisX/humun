import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JotformEmbed from 'react-jotform-embed';

const Register = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Register | HUMUN';
        setActive([false, false, false, false, true]);
    }, [setActive]);

    return (
        <Container className='content-container'>
            {' '}
            <h3 className='page-title'>Registration</h3>
            <p>
                In case of not being vaccinated against the COVID-19 virus, please{' '}
                <Link to='/healthconcern' className='email'>
                    click here
                </Link>{' '}
                to fill the health concern form. (Registerations of non vaccinated people, who fail
                to fill in this form will not be accepted)
            </p>
            <JotformEmbed src='https://www.jotform.com/form/213422949107455' />
        </Container>
    );
};

export default Register;
