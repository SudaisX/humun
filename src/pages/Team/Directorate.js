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
                    img='/images/directorate/lamya.jpeg'
                />
                <TeamCard
                    name='Tasmiyah Malik'
                    title='Director Design'
                    img='/images/directorate/tasmiyah.jpeg'
                />
                <TeamCard
                    name='Khadija Sohail Shafi'
                    title='Deputy Director Design'
                    img='/images/directorate/khadija.jpeg'
                />
            </div>

            <h3 className='committee_type'>Equity Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Sidra Channa'
                    title='Director Equity'
                    img='/images/directorate/sidra.jpeg'
                />
                <TeamCard
                    name='Filzah Fawad'
                    title='Director Equity'
                    img='/images/directorate/filza.jpeg'
                />
            </div>

            <h3 className='committee_type'>Content/Publishing Cell</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Areeba Mohsin'
                    title='Director Publishing'
                    img='/images/directorate/areeba.jpeg'
                />
                <TeamCard
                    name='Anum Imtiaz'
                    title='Director Content'
                    img='/images/directorate/anum.jpeg'
                />
            </div>

            <h3 className='committee_type'>Registration Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Inara Shahid Ali'
                    title='Director Registration'
                    img='/images/directorate/inara.jpeg'
                />
                <TeamCard
                    name='Daniyal Lightwala'
                    title='Director Registration'
                    img='/images/directorate/daniyal.jpeg'
                />
                <TeamCard
                    name='Faryal Khan'
                    title='Deputy Director Registration'
                    img='/images/directorate/faryal.jpeg'
                />
                <TeamCard
                    name='Muhammad Azeem Haider'
                    title='Deputy Director Registration'
                    img='/images/directorate/azeem.jpeg'
                />
            </div>

            <h3 className='committee_type'>IT Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Sudais Yasin'
                    title='Director Technology'
                    img='/images/directorate/sudais.jpeg'
                />
                <TeamCard
                    name='Sumaira Khan'
                    title='Director Technology'
                    img='/images/directorate/sumaira.jpeg'
                />
                <TeamCard
                    name='Alisha Momin'
                    title='Deputy Director Technology'
                    img='/images/directorate/alisha.jpeg'
                />
            </div>

            <h3 className='committee_type'>Finance Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Laiba Farid'
                    title='Director Finance'
                    img='/images/directorate/laiba.jpeg'
                />
                <TeamCard
                    name='Mustafa Sohail'
                    title='Deputy Director Finance'
                    img='/images/directorate/mustafa.jpeg'
                />
            </div>

            <h3 className='committee_type'>Marketing Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Samana Butul'
                    title='Director Marketing'
                    img='/images/directorate/samana.jpeg'
                />
                <TeamCard
                    name='Qausia Shah'
                    title='Deputy Director Marketing'
                    img='/images/directorate/qausia.jpeg'
                />
            </div>

            <h3 className='committee_type'>Photography/Videography Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Amal Humayun Sheikh'
                    title='Director Photography/Videography'
                    img='/images/directorate/amal.jpeg'
                />
                <TeamCard
                    name='Faizan Jessani'
                    title='Director Photography/Videography'
                    img='/images/directorate/faizan.jpeg'
                />
                <TeamCard
                    name='Shama Mussa'
                    title='Deputy Director Photography/Videography'
                    img='/images/directorate/shama.jpeg'
                />
            </div>

            <h3 className='committee_type'>Liaison Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Tooba Fatima'
                    title='Director Liaison'
                    img='/images/directorate/tooba.jpeg'
                />
                <TeamCard
                    name='Fareezeh Sidhwa'
                    title='Deputy Director Liaison'
                    img='/images/directorate/fareezah.jpeg'
                />
                <TeamCard
                    name='Aamna Jafrani'
                    title='Deputy Director Liaison'
                    img='/images/directorate/aamna.jpeg'
                />
            </div>

            <h3 className='committee_type'>Security Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Insha Hashmani'
                    title='Director Security'
                    img='/images/directorate/insha.jpeg'
                />
                <TeamCard
                    name='Syed Muhammad Abdullah Arif'
                    title='Deputy Director Security'
                    img='/images/directorate/abdullah.jpeg'
                />
                <TeamCard
                    name='Saniyah Salman'
                    title='Deputy Director Security'
                    img='/images/directorate/saniyah.jpeg'
                />
            </div>

            <h3 className='committee_type'>Socials Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Ariba Owais'
                    title='Director Socials'
                    img='/images/directorate/ariba.jpeg'
                />
                <TeamCard
                    name='Arham Ahmed'
                    title='Director Socials'
                    img='/images/directorate/arham.jpeg'
                />
            </div>

            <h3 className='committee_type'>Public Relations Team</h3>
            <div className='team-cards mt-4'>
                <TeamCard
                    name='Imra Rahim Hemani'
                    title='Director Public Relations'
                    img='/images/directorate/imra.jpeg'
                />
                <TeamCard
                    name='Imra Rahim Hemani'
                    title='Deputy Director Public Relations'
                    img='/images/directorate/sakeena.jpeg'
                />
            </div>
        </Container>
    );
};

export default Directorate;
