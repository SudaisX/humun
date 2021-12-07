import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setActive }) => {
    useEffect(() => {
        document.title = 'HUMUN';
        setActive([true, false, false, false, false]);
    }, [setActive]);
    return (
        <>
            <section className='home'>
                <p className='hdu'>HABIB DEBATE UNION PRESENTS</p>
                <p className='humun'>Habib University Model United Nations IV</p>
                <p className='humun-date'>Febrary 4-6, 2021</p>
                <Link className='register-btn' to='/register'>
                    Register Now! <i class='fa fa-check-circle' />
                </Link>
            </section>
        </>
    );
};

export default Home;
