import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Register = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Register';
        setActive([false, false, false, false, true]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            {' '}
            <h3 className='committee_type'>
                <span className='wavy'>Registration</span>
            </h3>
            <p>Coming Soon</p>{' '}
        </Container>
    );
};

export default Register;
