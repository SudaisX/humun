import React, { useEffect } from 'react';
import committeesData from '../../data/committeesData';
import CommitteeInfo from '../../components/CommitteeInfo';
import { Container } from 'react-bootstrap';

const Committees = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Committees | HUMUN';
        setActive([false, false, false, true, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>Committees</h2>
            <div className='committees'>
                <p className='about-body-text'>
                    The committees for HUMUN IV are listed below. These seven committees are the
                    heart and soul of HUMUN, contributing in the formation of the core themes. These
                    committees were created with the intention of sparking discussions that are not
                    only thought-provoking but also push people out of their comfort zones.
                </p>
                <div className='committee_types'>
                    <a href='#general-assembly'> 1. General Assemblies </a>
                    <a href='#specialized'> 2. Specialized Agencies </a>
                    <a href='#crisis'> 3. Crisis Committees </a>
                </div>

                <h3 className='committee_type' id='general-assembly' style={{ marginTop: '50px' }}>
                    General Assemblies:
                </h3>
                {committeesData.slice(0, 2).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                        shortTitle={c.shortTitle}
                    />
                ))}

                <h3 className='committee_type' id='specialized' style={{ marginTop: '100px' }}>
                    Specialized Agencies:
                </h3>
                {committeesData.slice(2, 5).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                        shortTitle={c.shortTitle}
                    />
                ))}

                <h3 className='committee_type' id='crisis' style={{ marginTop: '100px' }}>
                    Crisis Committees:
                </h3>
                {committeesData.slice(5).map((c) => (
                    <CommitteeInfo
                        key={c.id}
                        title={c.title}
                        chair={c.chair}
                        info={c.info}
                        img={c.img}
                        link={c.link}
                        guide={c.guide}
                        shortTitle={c.shortTitle}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Committees;
