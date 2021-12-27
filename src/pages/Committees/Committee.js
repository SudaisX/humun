import { React, useEffect } from 'react';
import committeesData from '../../data/committeesData';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Committee = ({ setActive }) => {
    const { id } = useParams();
    const { shortTitle, title, info, chair, acd, guide, img } = committeesData.filter(
        (c) => c.link === id
    )[0];
    useEffect(() => {
        document.title = title;
        setActive([false, false, false, true, false]);
    }, [title, setActive]);
    return (
        <Container className='content-container'>
            <div className='goback'>
                <Link to='/committees' className='fancy-btn'>
                    <span></span>Go Back
                </Link>
            </div>

            <div className='committee-container'>
                <h1 className='committee-short-title'>{shortTitle}</h1>
                <h1 className='committee-title'>{title}</h1>
                <img src={img} alt={title} style={{ maxWidth: '250px', marginTop: '20px' }} />

                <div className='committee-directors' style={{ maxWidth: '80%', marginTop: '20px' }}>
                    <p className='chair-name'>
                        <span className='chair-title'>Chair:</span> {chair.join(', ')}
                    </p>

                    <p className='chair-name'>
                        <span className='chair-title'>ACD:</span> {acd.join(', ')}
                    </p>
                </div>

                <p className='committee-body'>{info}</p>

                <div
                    className='committee-page-btns'
                    style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <a className='fancy-btn' href={'/guides/' + guide}>
                        <span></span>Download Guide
                    </a>
                </div>
            </div>

            <div className='committee-page'></div>
        </Container>
    );
};

export default Committee;
