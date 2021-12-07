import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Secretariat = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Secretariat | HUMUN';
        setActive([false, false, true, false, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>
                <span className='wavy'>Meet the Team</span>
            </h2>
            <div className='committee_types'>
                <Link to='/executivecouncil'>1. Executive Council</Link>
                <Link to='/secretariat' className='type-active'>
                    2. Secretariat
                </Link>
                <Link to='/directorate'>3. Directorate</Link>
            </div>

            <h3 className='committee_type' id='affiliations'>
                Secretariat
            </h3>
            <p>Coming Soon!</p>
        </Container>
    );
};

export default Secretariat;
