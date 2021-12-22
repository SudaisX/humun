import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const FeeStructure = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Fee Structure | HUMUN';
        setActive([false, false, false, false, true, false, false]);
    }, [setActive]);
    return (
        <Container
            className='content-container'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className='page-title'>
                <span>Fee Structure</span>
            </h2>
            <img src='/images/fee.jpg' alt='Fee Structure' style={{ maxHeight: '700px' }} />
        </Container>
    );
};

export default FeeStructure;
