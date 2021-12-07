import { React, useEffect } from 'react';
import committeesData from '../../data/committeesData';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Committee = ({ setActive }) => {
    const { id } = useParams();
    const { title, info, chair, guide, img } = committeesData.filter((c) => c.link === id)[0];
    useEffect(() => {
        document.title = title;
        setActive([false, false, true, false, false]);
    }, [title, setActive]);
    return (
        <Container className='content-container'>
            <div className='goback'>
                <Link to='/committees' className='goback-btn'>
                    Go Back
                </Link>
            </div>
            <h1>{title}</h1>
            <p>Chair: {chair}</p>
            <div className='committee-page'>
                <p>{info}</p>
                <img src={img} alt={title} />
            </div>

            <div className='committee-page-btns'>
                <a className='committee_link committee_info-link' href={'/guides/' + guide}>
                    Click here to Download Guide
                </a>
            </div>
        </Container>
    );
};

export default Committee;
