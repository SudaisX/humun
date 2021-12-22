import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TeamCard from '../../components/TeamCard';

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

            <h3 className='committee_type'>General Assemblies</h3>
            <h3 className='committee_name'>DISEC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Zainab Javaid'
                    title='Committee Director, DISEC'
                    img='/images/secretariat/directors/zainab.jpeg'
                />
                <TeamCard
                    name='Ahmed Shiwani'
                    title='Committee Director, DISEC'
                    img='/images/secretariat/directors/ahmed.jpeg'
                />
            </div>
            <h3 className='committee_name'>SOCHUM</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Muhammad Qazi Talha'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/talha.jpeg'
                />
                <TeamCard
                    name='Hafsa Khurram'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/hafsa.jpg'
                />
                <TeamCard
                    name='Ilma Eva'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/ilma.jpg'
                />
            </div>

            <h3 className='committee_type'>Specialized Agencies</h3>
            <h3 className='committee_name'>UNCSW</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Umama Ishtiaq'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/umama.jpg'
                />
                <TeamCard
                    name='Shanzay Yousuf'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/shanzay.jpg'
                />
                <TeamCard
                    name='Rizma Hamid Baig'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/rizma.jpg'
                />
            </div>
            <h3 className='committee_name'>PNA</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Anzal Abbas Jaffari'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/anzal.jpg'
                />
                <TeamCard
                    name='Fahmida Mirza'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/fahmida.jpg'
                />
            </div>
            <h3 className='committee_name'>HUNSC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Amna Inayat Khan'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/amna.jpeg'
                />
                <TeamCard
                    name='Sara Intikhab'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/sara.jpg'
                />
                <TeamCard
                    name='Saad Farooqi'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/saad.jpeg'
                />
            </div>

            <h3 className='committee_type'>Crisis Committees</h3>
            <h3 className='committee_name'>HCC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Ashahad Abbas Jhokio'
                    title='Committee Director, HCC'
                    img='/images/secretariat/directors/ashahad.jpeg'
                />
                <TeamCard
                    name='Humza Nadeem Jami'
                    title='Committee Director, HCC'
                    img='/images/secretariat/directors/humza.jpeg'
                />
            </div>
            <h3 className='committee_name'>TLOP</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Zuhayr Muneeb'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/directors/zuhayr.jpeg'
                />
                <TeamCard
                    name='Hamza Farookhi'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/directors/hamza.jpg'
                />
            </div>
        </Container>
    );
};

export default Secretariat;
