import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TeamCard from '../../components/TeamCard';

const Directorate = ({ setActive }) => {
    useEffect(() => {
        document.title = 'Directorate | HUMUN';
        setActive([false, false, true, false, false, false]);
    }, [setActive]);
    return (
        <Container className='content-container'>
            <h2 className='page-title'>
                <span className='wavy'>Meet the Team</span>
            </h2>
            <div className='committee_types'>
                <Link to='/executivecouncil'>1. Executive Council</Link>
                <Link to='/secretariat'>2. Secretariat</Link>
                <Link to='/directorate' className='type-active'>
                    3. Directorate
                </Link>
            </div>

            <h3 className='committee_type'>Design Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Lamya Mithaiwala'
                    title='Director Design'
                    img='/images/Directorate/Design/lamya.jpg'
                />
                <TeamCard
                    name='Tasmiyah Malik'
                    title='Director Design'
                    img='/images/Directorate/Design/tasmiyah.jpg'
                />
                <TeamCard
                    name='Khadija Sohail Shafi'
                    title='Deputy Director Design'
                    img='/images/Directorate/Design/khadija.jpg'
                />
            </div>

            <h3 className='committee_type'>Equity Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Sidra Channa'
                    title='Director Equity'
                    img='/images/Directorate/equity/sidra.jpg'
                />
                <TeamCard
                    name='Filzah Fawad'
                    title='Director Equity'
                    img='/images/Directorate/equity/filza.jpg'
                />
            </div>

            <h3 className='committee_type'>Content/Publishing Cell</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Areeba Mohsin'
                    title='Director Publishing'
                    img='/images/Directorate/content/areeba.jpg'
                />
                <TeamCard
                    name='Anum Imtiaz'
                    title='Director Content'
                    img='/images/Directorate/content/anum.jpg'
                />
            </div>

            <h3 className='committee_type'>Registration Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Inara Shahid Ali'
                    title='Director Registration'
                    img='/images/Directorate/Registrations/inara.jpg'
                />
                <TeamCard
                    name='Daniyal Lightwala'
                    title='Director Registration'
                    img='/images/Directorate/Registrations/daniyal.jpg'
                />
                <TeamCard
                    name='Faryal Khan'
                    title='Deputy Director Registration'
                    img='/images/Directorate/Registrations/faryal.jpg'
                />
                <TeamCard
                    name='Muhammad Azeem Haider'
                    title='Deputy Director Registration'
                    img='/images/Directorate/Registrations/azeem.jpg'
                />
            </div>

            <h3 className='committee_type'>IT Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Sudais Yasin'
                    title='Director Technology'
                    img='/images/Directorate/IT/sudais.jpeg'
                />
                <TeamCard
                    name='Sumaira Khan'
                    title='Director Technology'
                    img='/images/Directorate/IT/sumaira.jpg'
                />
                <TeamCard
                    name='Alisha Momin'
                    title='Deputy Director Technology'
                    img='/images/Directorate/IT/alisha.jpg'
                />
            </div>

            <h3 className='committee_type'>Finance Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Laiba Farid'
                    title='Director Finance'
                    img='/images/Directorate/Finance/laiba.jpg'
                />
                <TeamCard
                    name='Mustafa Sohail'
                    title='Deputy Director Finance'
                    img='/images/Directorate/Finance/mustafa.jpg'
                />
            </div>

            <h3 className='committee_type'>Marketing Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Samana Butul'
                    title='Director Marketing'
                    img='/images/Directorate/Marketing/samana.jpg'
                />
                <TeamCard
                    name='Qausia Shah'
                    title='Deputy Director Marketing'
                    img='/images/Directorate/Marketing/qausia.jpg'
                />
            </div>

            <h3 className='committee_type'>Photography/Videography Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Amal Humayun Sheikh'
                    title='Director Photography/Videography'
                    img='/images/Directorate/photography/amal.jpg'
                />
                <TeamCard
                    name='Faizan Jessani'
                    title='Director Photography/Videography'
                    img='/images/Directorate/photography/faizan.jpg'
                />
                <TeamCard
                    name='Shama Mussa'
                    title='Deputy Director Photography/Videography'
                    img='/images/Directorate/photography/shama.jpg'
                />
            </div>

            <h3 className='committee_type'>Liaison Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Tooba Fatima'
                    title='Director Liaison'
                    img='/images/Directorate/liaison/tooba.jpg'
                />
                <TeamCard
                    name='Fareezeh Sidhwa'
                    title='Deputy Director Liaison'
                    img='/images/Directorate/liaison/fareezah.jpg'
                />
            </div>

            <h3 className='committee_type'>Security Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Insha Hashmani'
                    title='Director Security'
                    img='/images/Directorate/Security/insha.jpg'
                />
                <TeamCard
                    name='Syed Muhammad Abdullah Arif'
                    title='Deputy Director Security'
                    img='/images/Directorate/Security/abdullah.jpg'
                />
                <TeamCard
                    name='Saniyah Salman'
                    title='Deputy Director Security'
                    img='/images/Directorate/Security/saniyah.jpg'
                />
            </div>

            <h3 className='committee_type'>Socials Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Ariba Owais'
                    title='Director Socials'
                    img='/images/Directorate/Socials/ariba.jpg'
                />
                <TeamCard
                    name='Arham Ahmed'
                    title='Director Socials'
                    img='/images/Directorate/Socials/arham.jpg'
                />
            </div>

            <h3 className='committee_type'>Public Relations Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Imra Rahim Hemani'
                    title='Director Public Relations'
                    img='/images/Directorate/PR/imra.jpg'
                />
                <TeamCard
                    name='Imra Rahim Hemani'
                    title='Deputy Director Public Relations'
                    img='/images/Directorate/PR/sakeena.jpg'
                />
            </div>
        </Container>
    );
};

export default Directorate;
