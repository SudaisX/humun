import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Contact Us | HUMUN';
        setActive([false, false, false, false, false, false, true]);
    }, [setActive]);
    return (
        <Container className='content-container '>
            <h2 className='page-title'>
                <span>Contact Us</span>
            </h2>
            <Row className='contact-container mt-4'>
                <Col>
                    <iframe
                        title='Habib University Location'
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.074229120899!2d67.1382762!3d24.905875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c0681e6f7d5dc14!2sHabib%20University!5e0!3m2!1sen!2s!4v1636229484271!5m2!1sen!2s'
                        width='100%'
                        height='350'
                        style={{ border: '0', borderRadius: '10px' }}
                        allowfullscreen=''
                        loading='lazy'></iframe>
                </Col>
                <Col md={1}></Col>
                <Col>
                    <Row className='committee_type'>Address:</Row>
                    <Row className='contact-body-text'>
                        Block 18, Gulistan-e-Jauhar, University Avenue, Off Shahrah-e-Faisal Rd,
                        Faisal Cantonment, Karachi, Karachi City, Sindh
                    </Row>
                </Col>
            </Row>

            <hr className='content-divider' />
            <p className='contact-body-text'>
                If you have any queries, feel free to reach out at{' '}
                <a href='mailto:humun@habib.edu.pk' className='email'>
                    humun@habib.edu.pk
                </a>{' '}
                or contact the numbers below:{' '}
            </p>
            <Row>
                <Col className='contact-details'>
                    <Row>Zainab Javaid</Row>
                    <Row>
                        <a href='tel:+92331283461' className='email'>
                            +92 331 2834618
                        </a>
                    </Row>
                </Col>
                <Col className='contact-details'>
                    <Row>Azeem Haider</Row>
                    <Row>
                        <a href='tel:+923112089864' className='email'>
                            +92 311 2089864
                        </a>
                    </Row>
                </Col>
                <Col className='contact-details'>
                    <Row>Daniyal Lightwala</Row>
                    <Row>
                        <a href='tel:+923360657881' className='email'>
                            +92 336 0657881
                        </a>
                    </Row>
                </Col>
            </Row>

            {/* <Col md={1}></Col>
                <Col>
                    <Row>
                        <p className='contact-details'>
                            <span className='contact-title'>Email: </span>{' '}
                            <a href='mailto:habib.edu.pk'>habib.edu.pk</a>
                        </p>
                    </Row>
                    <Row>
                        <p className='contact-details'>
                            <span className='contact-title'>Daniyal Lightwala:</span>{' '}
                            <a href='tel:+923360657881'>+92 336 0657881</a>
                        </p>
                    </Row>
                    <Row>
                        <p className='contact-details'>
                            <span className='contact-title'>Azeem Haider:</span>{' '}
                            <a href='tel:+923112089864'>+92 311 2089864</a>
                        </p>
                    </Row>
                    <Row>
                        <p className='contact-details'>
                            <span className='contact-title'>Zainab Javaid:</span>{' '}
                            <a href='tel:+92331283461'>+92 331 2834618</a>
                        </p>
                    </Row>
                </Col> */}
        </Container>
    );
};

export default Contact;
