import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import JotformEmbed from 'react-jotform-embed';

const Register = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Health Concern Form | HUMUN';
        setActive([false, false, false, false, true]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            {/* {' '}
            <h3 className='committee_type'>
                <span className='wavy'>Registration</span>
            </h3> */}
            <JotformEmbed src='https://form.jotform.com/213442914727457' />
        </Container>
    );
};

export default Register;
