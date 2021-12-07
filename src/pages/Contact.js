import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Contact = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Contact Us';
        setActive([false, false, false, true, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h3 className='committee_type'>
                <span className='wavy'>Contact Us</span>
            </h3>
            <p>Coming Soon</p>
            <iframe
                title='Habib University Location'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.074229120899!2d67.1382762!3d24.905875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c0681e6f7d5dc14!2sHabib%20University!5e0!3m2!1sen!2s!4v1636229484271!5m2!1sen!2s'
                width='600'
                height='450'
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'></iframe>
        </Container>
    );
};

export default Contact;
