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

            <div className='committee-container'>
                <h1>{title}</h1>
                <img src={img} alt={title} style={{ maxWidth: '250px', marginTop: '30px' }} />

                <div
                    className='committee-directorsd'
                    style={{ maxWidth: '80%', marginTop: '20px' }}>
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
                </div>

                <p style={{ maxWidth: '80%', marginTop: '30px' }}>{info}</p>

                <div className='committee-page-btns' style={{ marginTop: '20px' }}>
                    <a className='committee_link committee_info-link' href={'/guides/' + guide}>
                        Download Guide
                    </a>
                </div>
            </div>

            <div className='committee-page'></div>
        </Container>
    );
};

export default Committee;
