import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='mailto:humun@habib.edu.pk' className='email'>
                <i className='far fa-envelope'></i> humun@habib.edu.pk
            </a>
            <ul className='social-list'>
                <li className='social-list_item'>
                    <a
                        href='https://www.facebook.com/HabibUniversityMUN'
                        className=' social-list_link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-facebook social-list-icon'></i>
                    </a>
                </li>
                <li className='social-list_item'>
                    <a
                        href='https://www.instagram.com/habib_mun/'
                        className='social-list_link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='fab fa-instagram social-list-icon'></i>
                    </a>
                </li>

                {/* <li className='social-list_item'>
                    <a href='https://www.twitter.com/' className=' social-list_link'>
                        <i className='fab fa-twitter social-list-icon'></i>
                    </a>
                </li> */}
            </ul>
            <small className='footer-text'>&copy; HUMUN 2022</small>
        </footer>
    );
};

export default Footer;
