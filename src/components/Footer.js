import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='mailto:sudaisyasin@gmail.com' className='email'>
                <i className='far fa-envelope'></i> humun@habib.edu.pk
            </a>
            <ul className='social-list'>
                <li className='social-list_item'>
                    <a
                        href='https://www.linkedin.com/in/sudaisyasin/'
                        className=' social-list_link facebook'>
                        <i className='fab fa-facebook'></i>
                    </a>
                </li>
                <li className='social-list_item'>
                    <a href='https://github.com/sudaisx' className='social-list_link instagram'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>

                <li className='social-list_item'>
                    <a
                        href='https://www.linkedin.com/in/sudaisyasin/'
                        className=' social-list_link twitter'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </li>
            </ul>
            <small className='footer-text'>&copy; HUMUN 2021</small>
        </footer>
    );
};

export default Footer;
