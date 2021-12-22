import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../../components/TeamCard';

const ExecutiveCouncil = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Executive Council | HUMUN';
        setActive([false, false, true, false, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>
                <span className='wavy'>Meet the Team</span>
            </h2>
            <div className='committee_types'>
                <Link to='/executivecouncil' className='type-active'>
                    1. Executive Council
                </Link>
                <Link to='/secretariat'>2. Secretariat</Link>
                <Link to='/directorate'>3. Directorate</Link>
            </div>

            <h3 className='committee_type'>President</h3>
            <Row className='president mt-4 row-cols-1 row-cols-md-2'>
                <Col className='president-image-container' lg={4}>
                    <img
                        className='president-image'
                        src='/images/executive/mariam.jpeg'
                        alt='marium jamal - president'></img>
                </Col>
                <Col className='president-content' lg={8}>
                    <Row className='president-name mt-4'>
                        <h3>Marium Jamal</h3>
                    </Row>
                    <Row className='president-letter'>
                        <Row>
                            <p>Greetings Delegates,</p>
                        </Row>
                        <Row>
                            <p>
                                On behalf of the entire HUMUN Team, I welcome you all to the fourth
                                iteration of Habib University Model United Nations.
                            </p>
                        </Row>
                        <Row>
                            <p>
                                The past two years, for all of us, have been all about survival,
                                countless epiphanies, and reminiscence of the lost normalcy. Even
                                more than that, they have been about reconstructing and
                                deconstructing. Amidst participating in countless tournaments all
                                across the globe, we could not replace the humane elements that the
                                pandemic so profusely took away from us, in a blink of an eye. But
                                that too did not stop us from reaching new heights, from dedicating
                                ourselves to making debates better, to ensuring that we take the
                                time to reflect and to bring in more inclusivity. The pandemic
                                opened new opportunities and gave us more platforms, those which
                                made us realise the importance of creating platforms that were more
                                holistic, and comprehensive in nature. These are two things that we
                                tried to incorporate in HUMUN IV, to bring in inclusivity, to
                                promote equity, and to provide opportunities. To ensure the
                                wellbeing of everyone who chooses to be a part of HUMUN from now
                                onwards, and to create a safe space for the articulation of very
                                diverse ideas. Lastly, what makes this year's conference stand out
                                from the previous iterations is the continuation of the legacy. The
                                past three iterations of HUMUN have hosted numerous delegates, one
                                of them also happened to me. HUMUN 2018 was one of my initial MUNS
                                and it was nothing short of an honour to have experienced the
                                enriching quality of debate that HUMUN pledges to provide its
                                delegates with, every year. It was through having a 2/3rd majority
                                of the executive council who had experienced HUMUN as a delegate in
                                the years before, which helped us undertake the task of helping
                                HUMUN improve, and to see it grow and reach new heights. HUMUN IV is
                                not just any other conference, it is our hour to better the quality
                                of the discourse that we got to engage in as delegates, to extend
                                the knowledge we received, and to pass it on to the future
                                generation of passionate debaters, who would only make this event
                                better than it has ever been.
                            </p>
                        </Row>
                        <Row>
                            <p>
                                With all the being said, we are proud to introduce you to the theme
                                for HUMUN IV; Opportunity. Equity. Legacy.{' '}
                            </p>
                        </Row>
                        <Row>
                            <p>We look forward to seeing you at HUMUN from 4th-6th February.</p>
                        </Row>
                    </Row>
                </Col>
            </Row>

            <h3 className='committee_type'>Executive Council</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Mahad Akbar'
                    title='Secretary General'
                    img='/images/executive/mahad.jpeg'
                />
                <TeamCard
                    name='Wasiq Imran'
                    title='Director General'
                    img='/images/executive/wasiq.jpeg'
                />
                <TeamCard
                    name='Umama Rizwan'
                    title='Deputy Director General'
                    img='/images/executive/umama.jpeg'
                />
                <TeamCard
                    name='Zainab Javaid'
                    title='Under Secretary General'
                    img='/images/executive/zainab.jpeg'
                />
                <TeamCard
                    name='Hafsa Khurram'
                    title='Under Secretary General'
                    img='/images/executive/hafsa.jpeg'
                />
                <TeamCard
                    name='Ashahad Abbas'
                    title='Under Secretary General'
                    img='/images/executive/ashahad.jpeg'
                />
            </div>
        </Container>
    );
};

export default ExecutiveCouncil;
