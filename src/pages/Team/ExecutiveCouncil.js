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
                        src='/images/Executive Council/marium.jpg'
                        alt='marium jamal - president'></img>
                </Col>
                <Col className='president-content' lg={8}>
                    <Row className='president-name mt-4'>
                        <h3>Marium Jamal</h3>
                    </Row>
                    <Row className='president-letter'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                            facere explicabo repellat recusandae labore reprehenderit, illum non
                            cumque quibusdam tempora, veniam eligendi magnam sit voluptatibus at
                            molestiae ullam. Suscipit, nesciunt. Ipsa, aliquid impedit! Blanditiis
                            reprehenderit accusamus quae nostrum a obcaecati voluptatum voluptatem
                            dolore exercitationem sed eius ad, libero nulla, quam doloremque
                            suscipit veritatis aperiam optio iusto impedit odit molestias nisi!
                            Blanditiis nam ipsam perferendis aperiam, ducimus provident libero sunt
                            ipsa corrupti, veniam non? Placeat, voluptate commodi excepturi veniam
                            aliquid nulla voluptates praesentium, blanditiis reprehenderit, est
                            officia incidunt quisquam omnis facere!
                        </p>
                    </Row>
                </Col>
            </Row>

            <h3 className='committee_type'>Executive Council</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Mahad Akbar'
                    title='Secretary General'
                    img='/images/Executive Council/mahad.jpg'
                />
                <TeamCard
                    name='Wasiq Imran'
                    title='Director General'
                    img='/images/Executive Council/wasiq.jpg'
                />
                <TeamCard
                    name='Umama Rizwan'
                    title='Deputy Director General'
                    img='/images/Executive Council/umama.jpg'
                />
                <TeamCard
                    name='Zainab Javaid'
                    title='Under Secretary General'
                    img='/images/Executive Council/zainab.jpg'
                />
                <TeamCard
                    name='Hafsa Khurram'
                    title='Under Secretary General'
                    img='/images/Executive Council/hafsa.jpg'
                />
                <TeamCard
                    name='Ashahad Abbas'
                    title='Under Secretary General'
                    img='/images/Executive Council/ashahad.jpg'
                />
            </div>
        </Container>
    );
};

export default ExecutiveCouncil;
