import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JotformEmbed from 'react-jotform-embed';

const Register = ({ setActive }) => {
    const [currLink, setCurrLink] = useState(0);

    useEffect(() => {
        document.title = 'Register | HUMUN';
        setActive([false, false, false, false, true]);
    }, [setActive, currLink]);

    const regLinks = [
        'https://www.jotform.com/form/213422949107455',
        'https://form.jotform.com/213624426696462',
    ];

    const onRegDelegation = () => {
        setCurrLink(0);
    };

    const onRegDelegate = () => {
        setCurrLink(1);
    };

    return (
        <Container className='content-container'>
            {' '}
            <h3 className='page-title'>Registration</h3>
            <div className='instructions sans-font'>
                <h1 className='committee_type'>Instructions:</h1>
                <ol className='instructions lemon-font'>
                    <li>
                        <p>
                            Before you start the registration process, please double check the
                            details mentioned in the{' '}
                            <Link to='/feestructure' className='email'>
                                fee structure page
                            </Link>
                            .
                        </p>
                    </li>
                    {/* <li>
                        <p>
                            In case of not being vaccinated against the COVID-19 virus, please{' '}
                            <Link to='/healthconcern' className='email'>
                                click here
                            </Link>{' '}
                            to fill the health concern form. (Registerations of non vaccinated
                            people, who fail to fill in this form will not be accepted)
                        </p>
                    </li> */}
                    <li>
                        <p>Please provide correct information in the registration form.</p>
                    </li>
                </ol>
                <div className='committee_types'>
                    <a
                        href='#delegation'
                        className={currLink === 0 ? 'active' : ''}
                        onClick={onRegDelegation}>
                        Register Delegation
                    </a>
                    <a
                        href='#delegate'
                        className={currLink === 1 ? 'active' : ''}
                        onClick={onRegDelegate}>
                        Register Delegate
                    </a>
                </div>
            </div>
            <JotformEmbed src={regLinks[currLink]} />
        </Container>
    );
};

export default Register;
