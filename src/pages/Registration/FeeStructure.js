import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeeStructure = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Fee Structure | HUMUN';
        setActive([false, false, false, false, true, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>Fee Structure</h2>

            <Row style={{ marginTop: '50px' }}>
                <Row className='row-box'>
                    <Col md={3}></Col>
                    <Col md={3} className='fee-dates fee-box'>
                        Dates
                    </Col>
                    <Col md={6}>
                        <Row className='fee-box fee-structure row-box-half'>Fee Structure</Row>
                        <Row className='row-box-half'>
                            <Col md={6} className='fee-box fee-delegate'>
                                Delegate
                            </Col>
                            <Col md={6} className='fee-box fee-delegation'>
                                Delegation
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className='row-box'>
                    <Col md={3} className='fee-box fee-early-bird'>
                        Early Bird
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        <Row>Dec 10, 2021</Row>
                        <Row style={{ color: '#6a163a' }}>to</Row>
                        <Row>Dec 27, 2021</Row>
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        PKR 2500
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        PKR 3000
                    </Col>
                </Row>

                <Row className='row-box'>
                    <Col md={3} className='fee-box fee-regular'>
                        Regular
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        <Row>Dec 25, 2021</Row>
                        <Row style={{ color: '#6a163a' }}>to</Row>
                        <Row>Jan 01, 2022</Row>
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        PKR 3000
                    </Col>
                    <Col md={3} className='fee-box-content'>
                        PKR 3000
                    </Col>
                </Row>
            </Row>

            <div className='register-btn-container'>
                <Link className='register-btn' to='/register'>
                    <span></span>
                    Register Now! <i class='fa fa-check-circle' />
                </Link>
            </div>
        </Container>
    );
};

export default FeeStructure;
