import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const About = ({ setActive }) => {
    useEffect(() => {
        document.title = 'About';
        setActive([false, true, false, false, false]);
    }, []);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>
                <span className='wavy'>About</span>
            </h2>
            <div className='committee_types'>
                <a href='#history'> 1. History </a>
                <a href='#affiliations'> 2. Affiliations </a>
                <a href='#team'> 3. Team </a>
            </div>

            <h3 className='committee_type' id='history'>
                History
            </h3>
            <p>Coming Soon!</p>

            <h3 className='committee_type' id='affiliations'>
                Affiliations
            </h3>
            <p>Coming Soon!</p>

            <h3 className='committee_type' id='team'>
                Team
            </h3>
            <p>Coming Soon!</p>
        </Container>
    );
};

export default About;
