import { React, useEffect } from 'react';
import committeesData from '../../data/committeesData';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Committee = ({ setActive }) => {
    const { id } = useParams();
    const { title, info, chair, acd, guide, img } = committeesData.filter((c) => c.link === id)[0];
    useEffect(() => {
        document.title = title;
        setActive([false, false, false, true, false]);
    }, [title, setActive]);
    return (
        <Container className='content-container'>
            <div className='goback'>
                <Link to='/committees' className='goback-btn'>
                    Go Back
                </Link>
            </div>
            <h1>{title}</h1>

            <Row>
                <Col md={4}>
                    <img src={img} alt={title} />
                </Col>
                <Col>
                    {chair.map((c) => (
                        <p className='chair-name'>
                            <span className='chair-title'>Chair:</span> {c}
                        </p>
                    ))}
                    {acd.map((c) => (
                        <p className='chair-name'>
                            <span className='chair-title'>ACD:</span> {c}
                        </p>
                    ))}
                    <p>{info}</p>
                    <div className='committee-page-btns'>
                        <a className='committee_link committee_info-link' href={'/guides/' + guide}>
                            Click here to Download Guide
                        </a>
                    </div>
                </Col>
            </Row>

            <div className='committee-page'></div>
        </Container>
    );
};

export default Committee;
