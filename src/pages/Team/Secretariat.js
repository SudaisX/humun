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
            <div className='committee_types' style={{ marginBottom: '50px' }}>
                <Link to='/executivecouncil'>1. Executive Council</Link>
                <Link to='/secretariat' className='type-active'>
                    2. Secretariat
                </Link>
                <Link to='/directorate'>3. Directorate</Link>
            </div>

            <h3 className='committee_type' style={{ marginTop: '50px' }}>
                General Assemblies
            </h3>
            <h3 className='committee_name'>1. DISEC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Ahmed Shiwani'
                    title='Committee Director, DISEC'
                    img='/images/secretariat/directors/ahmed.png'
                />
                <TeamCard
                    name='Zainab Javaid'
                    title='Committee Director, DISEC'
                    img='/images/secretariat/directors/zainab.png'
                />
                <TeamCard
                    name='Raahim Abbasi'
                    title='Committee Director, DISEC'
                    img='/images/secretariat/directors/raahim.png'
                />
                <TeamCard
                    name='Mustafa Hussain'
                    title='Assistant Committee Director, DISEC'
                    img='/images/secretariat/acds/mustafa.jpg'
                />
            </div>
            <h3 className='committee_name'>2. SOCHUM</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Hafsa Khurram'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/hafsa.png'
                />
                <TeamCard
                    name='Muhammad Qazi Talha'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/talha.png'
                />
                <TeamCard
                    name='Ilma Eva'
                    title='Committee Director, SOCHUM'
                    img='/images/secretariat/directors/ilma.png'
                />
                <TeamCard
                    name='Ali Arif'
                    title='Assistant Committee Director, SOCHUM'
                    img='/images/secretariat/acds/ali.png'
                />
                <TeamCard
                    name='Uzair Rafiq'
                    title='Assistant Committee Director, SOCHUM'
                    img='/images/secretariat/acds/uzair.png'
                />
            </div>

            <h3 className='committee_type' style={{ marginTop: '50px' }}>
                Specialized Agencies
            </h3>
            <h3 className='committee_name'>1. UNCSW</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Umama Ishtiaq'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/umama.png'
                />
                <TeamCard
                    name='Shanzay Yousuf'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/shanzay.png'
                />
                <TeamCard
                    name='Rizma Hamid Baig'
                    title='Committee Director, UNCSW'
                    img='/images/secretariat/directors/rizma.png'
                />
                <TeamCard
                    name='Ruhama Naeem'
                    title='Assistant Committee Director, UNCSW'
                    img='/images/secretariat/acds/ruhama.png'
                />
            </div>
            <h3 className='committee_name'>2. PNA</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Anzal Abbas Jaffari'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/anzal.png'
                />
                <TeamCard
                    name='Markhan Musthaque'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/markhan.png'
                />
                <TeamCard
                    name='Yelmaz Mujtaba'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/yelmaz.png'
                />
                <TeamCard
                    name='Aniqa Khan'
                    title='Committee Director, PNA'
                    img='/images/secretariat/directors/aniqa.png'
                />
            </div>
            <h3 className='committee_name'>3. HUNSC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Amna Inayat Khan'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/amna.png'
                />
                <TeamCard
                    name='Sara Intikhab'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/sara.png'
                />
                <TeamCard
                    name='Saad Farooqi'
                    title='Committee Director, HUNSC'
                    img='/images/secretariat/directors/saad.png'
                />
                <TeamCard
                    name='Shahzar Khalique'
                    title='Assistant Committee Director, HUNSC'
                    img='/images/secretariat/acds/shahzar.png'
                />
            </div>

            <h3 className='committee_type' style={{ marginTop: '50px' }}>
                Crisis Committees
            </h3>
            <h3 className='committee_name'>1. HCC</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Humza Nadeem Jami'
                    title='Committee Director, HCC'
                    img='/images/secretariat/directors/humza.png'
                />
                <TeamCard
                    name='Ashahad Abbas Jhokio'
                    title='Committee Director, HCC'
                    img='/images/secretariat/directors/ashahad.png'
                />
                <TeamCard
                    name='Shah Anas Ahmed'
                    title='Committee Director, HCC'
                    img='/images/secretariat/directors/shah-anas.png'
                />
                <TeamCard
                    name='Maliha Irfan'
                    title='Assistant Committee Director, HCC'
                    img='/images/secretariat/acds/maliha.png'
                />
                <TeamCard
                    name='Fida Hussain'
                    title='Assistant Committee Director, HCC'
                    img='/images/secretariat/acds/fida.png'
                />
            </div>
            <h3 className='committee_name'>2. TLOP</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Zuhayr Muneeb'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/directors/zuhayr.png'
                />
                <TeamCard
                    name='Hamza Farookhi'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/directors/hamza.png'
                />
                <TeamCard
                    name='Fawwaz Ahmed'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/acds/fawwaz.png'
                />
                <TeamCard
                    name='Rida Khan'
                    title='Committee Director, TLOP'
                    img='/images/secretariat/acds/rida.png'
                />
            </div>
        </Container>
    );
};

export default Secretariat;
