import React from 'react';
import { Link } from 'react-router-dom';

const CommitteeInfo = ({ shortTitle, title, chair, info, img, link, guide }) => {
    console.log(title);
    return (
        <div className='committee'>
            <div className='committee_overview'>
                <h4 className='committee_title'>
                    <span className='committee_title_short'>{shortTitle}</span>: {title}
                </h4>
                <p className='committee_date'> </p>
            </div>
            <div className='committee-chair'>{/* <bold>Chair:</bold> {chair} */}</div>
            <p className='committee_info'>{info.slice(0, 450)}..</p>
            <p className='committee-links'>
                <Link
                    className='fancy-btn'
                    style={{ fontSize: '14px', marginRight: '20px' }}
                    to={'/committees/' + link}>
                    <span></span>Learn More
                </Link>
                <a className='fancy-btn' style={{ fontSize: '14px' }} href={guide} download>
                    <span></span>Download Guide
                </a>
            </p>
            <img className='committee_img' src={img} alt={title}></img>
        </div>
    );
};

export default CommitteeInfo;
